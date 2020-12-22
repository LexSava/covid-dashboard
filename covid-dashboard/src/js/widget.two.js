const WIDGET_TWO = document.querySelector('.widget_2');
const COUNTRY_BLOCK = document.querySelector('.widget__two__block__countries');
const CASES_DATA = document.querySelector('.cases');
const DEATHS_DATA = document.querySelector('.deaths');
const RECOVERED_DATA = document.querySelector('.recovered');
const PROPOSED_COUNTRIES = document.querySelector('#countrys');
const search = document.querySelector('#search');
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



let dataObtained;
const searchStates = async searchText => {
    const response = await fetch('https://disease.sh/v2/countries');
    dataObtained = await response.json();
    // console.log(dataObtained);
    let matches = dataObtained.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return state.country.match(regex);
    });
    if (searchText.length === 0) {
        GetCountryData(1);
        matches = [];
    }
    outputHtml(matches);
    // console.log(matches);
}
const outputHtml = matches => {
    while (COUNTRY_BLOCK.firstChild) {
        COUNTRY_BLOCK.removeChild(COUNTRY_BLOCK.firstChild);
    }
    while (PROPOSED_COUNTRIES.firstChild) {
        PROPOSED_COUNTRIES.removeChild(PROPOSED_COUNTRIES.firstChild);
    }
    if (matches.length > 0) {
        matches.map(match => {
            // console.log(match.country);
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

            const newIndicatorCountry = document.createElement('span');
            newIndicatorCountry.classList.add('widget__two__indicator__countries');
            newIndicatorCountry.innerHTML = ` - ${match.cases}`;

            PROPOSED_COUNTRIES.appendChild(newOption);
            newСountryСontainer.appendChild(newFlagImage);
            newСountryСontainer.appendChild(newNameCountry);
            newСountryСontainer.appendChild(newIndicatorCountry);

        }
        );
    }
};


search.addEventListener('input', () => searchStates(search.value));

// let allCuntries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central Arfrican Republic", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauro", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];


// function autocomplete(inp, arr) {
//     var currentFocus;
//     inp.addEventListener("input", function (e) {
//         var a, b, i, val = this.value;
//         closeAllLists();
//         if (!val) { return false; }
//         currentFocus = -1;
//         a = document.createElement("DIV");
//         a.setAttribute("id", this.id + "autocomplete-list");
//         a.setAttribute("class", "autocomplete-items");
//         this.parentNode.appendChild(a);
//         for (i = 0; i < arr.length; i++) {
//             if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
//                 b = document.createElement("DIV");
//                 b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
//                 b.innerHTML += arr[i].substr(val.length);
//                 b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
//                 b.addEventListener("click", function (e) {
//                     inp.value = this.getElementsByTagName("input")[0].value;
//                     closeAllLists();
//                 });
//                 a.appendChild(b);
//             }
//         }
//     });
//     inp.addEventListener("keydown", function (e) {
//         var x = document.getElementById(this.id + "autocomplete-list");
//         if (x) x = x.getElementsByTagName("div");
//         if (e.keyCode == 40) {
//             currentFocus++;
//             addActive(x);
//         } else if (e.keyCode == 38) {
//             currentFocus--;
//             addActive(x);
//         } else if (e.keyCode == 13) {
//             e.preventDefault();
//             if (currentFocus > -1) {
//                 if (x) x[currentFocus].click();
//             }
//         }
//     });
//     function addActive(x) {
//         if (!x) return false;
//         removeActive(x);
//         if (currentFocus >= x.length) currentFocus = 0;
//         if (currentFocus < 0) currentFocus = (x.length - 1);
//         x[currentFocus].classList.add("autocomplete-active");
//     }
//     function removeActive(x) {
//         for (var i = 0; i < x.length; i++) {
//             x[i].classList.remove("autocomplete-active");
//         }
//     }
//     function closeAllLists(elmnt) {
//         var x = document.getElementsByClassName("autocomplete-items");
//         for (var i = 0; i < x.length; i++) {
//             if (elmnt != x[i] && elmnt != inp) {
//                 x[i].parentNode.removeChild(x[i]);
//             }
//         }
//     }
//     document.addEventListener("click", function (e) {
//         closeAllLists(e.target);
//     });
// }
// (function () {
//     document.querySelector('input').addEventListener('keydown', function (e) {
//         if (e.keyCode === 13) {
//             // можете делать все что угодно со значением текстового поля
//             console.log(this.value);
//         }
//     });
// })();
// autocomplete(document.querySelector(".myInput"), allCuntries);
