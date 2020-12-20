const WIDGET_TWO = document.querySelector('.widget_2')
const COUNTRY_BLOCK = document.querySelector('.widget__two__block__countries')


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



async function GetCountryData() {
    const response = await fetch('https://disease.sh/v2/countries');
    const results = await response.json();
    results.sort(function (a, b) {
        return b.cases - a.cases;
    })
    console.log(results);


    for (const key in results) {
        CreatesListCountries(results[key].countryInfo.flag, results[key].country, results[key].cases)
        console.log(typeof results[key].cases);
    }
}

GetCountryData()