import Table from './widget-table';
const WIDGET_TWO = document.querySelector('.widget_2');
const COUNTRY_BLOCK = document.querySelector('.widget__two__block__countries');
const CASES_DATA = document.querySelector('.cases');
const DEATHS_DATA = document.querySelector('.deaths');
const RECOVERED_DATA = document.querySelector('.recovered');
const PROPOSED_COUNTRIES = document.querySelector('#countrys');
const BTN_EXPAND_BLOCK_2 = document.querySelector('.widget__two__btn');
export const search = document.querySelector('#search');

let results;
let dataObtained;
export let selectedCountry;

function CreatesListCountries(flag, country, indicator) {
  const newСountryСontainer = document.createElement('div');
  newСountryСontainer.classList.add('widget__two__countries');
  newСountryСontainer.addEventListener('click', (event) => {
    updateTable(event.target);
  });
  COUNTRY_BLOCK.appendChild(newСountryСontainer);

  const newFlagImage = document.createElement('img');
  newFlagImage.classList.add('widget__two__flag');
  newFlagImage.src = flag;

  const newNameCountry = document.createElement('span');
  newNameCountry.classList.add('widget__two__name__countries');
  newNameCountry.innerHTML = country;

  const newIndicatorCountry = document.createElement('span');
  newIndicatorCountry.classList.add('widget__two__indicator__countries');
  newIndicatorCountry.innerHTML = ` - ${indicator}`;

  newСountryСontainer.appendChild(newFlagImage);
  newСountryСontainer.appendChild(newNameCountry);
  newСountryСontainer.appendChild(newIndicatorCountry);
}

async function GetCountryData(val) {
  const response = await fetch('https://disease.sh/v2/countries');
  results = await response.json();
  if (val === 2) {
    sortingByDeaths();
  } else if (val === 3) {
    sortingByRecovered();
  } else {
    sortingByCases();
  }
}

function sortingByCases() {
  while (COUNTRY_BLOCK.firstChild) {
    COUNTRY_BLOCK.removeChild(COUNTRY_BLOCK.firstChild);
  }
  results.sort((a, b) => b.cases - a.cases);

  for (const key in results) {
    CreatesListCountries(results[key].countryInfo.flag, results[key].country, results[key].cases);
  }
}

function sortingByDeaths() {
  while (COUNTRY_BLOCK.firstChild) {
    COUNTRY_BLOCK.removeChild(COUNTRY_BLOCK.firstChild);
  }
  results.sort((a, b) => b.deaths - a.deaths);

  for (const key in results) {
    CreatesListCountries(results[key].countryInfo.flag, results[key].country, results[key].deaths);
  }
}

function sortingByRecovered() {
  while (COUNTRY_BLOCK.firstChild) {
    COUNTRY_BLOCK.removeChild(COUNTRY_BLOCK.firstChild);
  }
  results.sort((a, b) => b.recovered - a.recovered);

  for (const key in results) {
    CreatesListCountries(results[key].countryInfo.flag, results[key].country, results[key].recovered);
  }
}

CASES_DATA.addEventListener('click', () => GetCountryData(1));
DEATHS_DATA.addEventListener('click', () => GetCountryData(2));
RECOVERED_DATA.addEventListener('click', () => GetCountryData(3));

GetCountryData(1);

const searchStates = async (searchText) => {
  const response = await fetch('https://disease.sh/v2/countries');
  dataObtained = await response.json();

  let matches = dataObtained.filter((state) => {
    const regex = new RegExp(`^${searchText}`, 'gi');
    return state.country.match(regex);
  });
  if (searchText.length === 0) {
    GetCountryData(1);
    matches = [];
  }
  outputHtml(matches);
};
const outputHtml = (matches) => {
  while (COUNTRY_BLOCK.firstChild) {
    COUNTRY_BLOCK.removeChild(COUNTRY_BLOCK.firstChild);
  }
  while (PROPOSED_COUNTRIES.firstChild) {
    PROPOSED_COUNTRIES.removeChild(PROPOSED_COUNTRIES.firstChild);
  }
  if (matches.length > 0) {
    matches.map((match) => {
      const newСountryСontainer = document.createElement('div');
      newСountryСontainer.classList.add('widget__two__countries');
      COUNTRY_BLOCK.appendChild(newСountryСontainer);

      const newOption = document.createElement('option');
      newOption.innerHTML = `${match.country}`;

      const newFlagImage = document.createElement('img');
      newFlagImage.classList.add('widget__two__flag');
      newFlagImage.src = `${match.countryInfo.flag}`;

      const newNameCountry = document.createElement('span');
      newNameCountry.classList.add('widget__two__name__countries');
      newNameCountry.innerHTML = `${match.country}`;
  
      const url = 'https://disease.sh/v3/covid-19/';
      const table = new Table(url, match.country);
      table.getRequest();

      const newIndicatorCountry = document.createElement('span');
      newIndicatorCountry.classList.add('widget__two__indicator__countries');
      newIndicatorCountry.innerHTML = ` - ${match.cases}`;

      PROPOSED_COUNTRIES.appendChild(newOption);
      newСountryСontainer.appendChild(newFlagImage);
      newСountryСontainer.appendChild(newNameCountry);
      newСountryСontainer.appendChild(newIndicatorCountry);
    });
  }
};
search.addEventListener('input', () => {
  searchStates(search.value);
});

BTN_EXPAND_BLOCK_2.addEventListener('click', () => {
  WIDGET_TWO.classList.toggle('active__widget__two');
});

function updateTable(target) {
  let countryName = target.closest('div').childNodes[1].textContent;
  const url = 'https://disease.sh/v3/covid-19/';
  const table = new Table(url, countryName);
  table.getRequest();
}