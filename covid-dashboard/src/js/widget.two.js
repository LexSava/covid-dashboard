const WIDGET_TWO = document.querySelector('.widget_2')
const COUNTRY_BLOCK = document.querySelector('.widget__two__block__countries')
const CASES_DATA = document.querySelector('.cases')
const DEATHS_DATA = document.querySelector('.deaths')
const RECOVERED_DATA = document.querySelector('.recovered')
let results;

function CreatesListCountries(flag, country, indicator) {
    const newСountryСontainer = document.createElement('div');
    newСountryСontainer.classList.add('widget__two__countries');
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
    results.sort((a, b) => { return b.cases - a.cases; })

    for (let key in results) {
        CreatesListCountries(results[key].countryInfo.flag, results[key].country, results[key].cases)
    }
}

function sortingByDeaths() {
    while (COUNTRY_BLOCK.firstChild) {
        COUNTRY_BLOCK.removeChild(COUNTRY_BLOCK.firstChild);
    }
    results.sort((a, b) => { return b.deaths - a.deaths; })

    for (let key in results) {
        CreatesListCountries(results[key].countryInfo.flag, results[key].country, results[key].deaths)
    }
}

function sortingByRecovered() {
    while (COUNTRY_BLOCK.firstChild) {
        COUNTRY_BLOCK.removeChild(COUNTRY_BLOCK.firstChild);
    }
    results.sort((a, b) => { return b.recovered - a.recovered; })

    for (let key in results) {
        CreatesListCountries(results[key].countryInfo.flag, results[key].country, results[key].recovered)
    }
}

CASES_DATA.addEventListener("click", () => GetCountryData(1));
DEATHS_DATA.addEventListener("click", () => GetCountryData(2));
RECOVERED_DATA.addEventListener("click", () => GetCountryData(3));

GetCountryData(1);


const search = document.querySelector('#search');

const searchStates = async searchText => {
    const response = await fetch('https://disease.sh/v2/countries');
    const dataObtained = await response.json();
    console.log(dataObtained);
    let matches = dataObtained.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return state.country.match(regex);
    });
    if (searchText.length === 0) {
        matches = [];
    }
    outputHtml(matches);
    console.log(matches);
}
const outputHtml = matches => {
    while (COUNTRY_BLOCK.firstChild) {
        COUNTRY_BLOCK.removeChild(COUNTRY_BLOCK.firstChild);
    }
    if (matches.length > 0) {
        const html = matches.map(match => {

            const newСountryСontainer = document.createElement('div');
            newСountryСontainer.classList.add('widget__two__countries');
            COUNTRY_BLOCK.appendChild(newСountryСontainer);

            const newFlagImage = document.createElement('img');
            newFlagImage.classList.add('widget__two__flag');
            newFlagImage.src = `${match.countryInfo.flag}`;

            const newNameCountry = document.createElement('span');
            newNameCountry.classList.add('widget__two__name__countries');
            newNameCountry.innerHTML = `${match.country}`;

            const newIndicatorCountry = document.createElement('span');
            newIndicatorCountry.classList.add('widget__two__indicator__countries');
            newIndicatorCountry.innerHTML = ` - ${match.cases}`;

            newСountryСontainer.appendChild(newFlagImage);
            newСountryСontainer.appendChild(newNameCountry);
            newСountryСontainer.appendChild(newIndicatorCountry);
        }
        );
    }
};


search.addEventListener('input', () => searchStates(search.value))




