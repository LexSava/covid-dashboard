import moment from 'moment';
import Chart from 'chart.js';

const BTN_EXPAND_BLOCK = document.querySelector('.widget_4__btn');
const BLOCK_WIDGET_4 = document.querySelector('.widget_4');
const SELECT_COUNTRYS = document.querySelector('.dropdown_select');


const D = new Date("01/20/20");
let Till = new Date();
const ARRAY_OF_DATES = [];
const ctx = document.getElementById('myChart').getContext('2d');


function pad(s) { return ('00' + s).slice(-2) }
while (D.getTime() < Till.getTime()) {
    ARRAY_OF_DATES.push('' + D.getFullYear() + '-' + pad(D.getMonth() + 1) + '-' + pad(D.getDate()));
    D.setDate(D.getDate() + 1);
}

// const getRegetResultsOnCovid = async () => {
//     const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=366');
//     const results = await response.json();
//     console.log(Object.values(results.cases));
// }

async function BuildGraphWithData() {
    const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=366');
    const results = await response.json();
    const arrCasesValue = Object.values(results.cases);
    const arrDeathsValue = Object.values(results.deaths);
    const arrRecoveredValue = Object.values(results.recovered);

    let chart = new Chart(ctx, {
        // Тип графика
        type: 'line',
        // Создание графиков
        data: {
            // Точки графиков
            labels: ARRAY_OF_DATES,
            // График
            datasets: [{
                label: 'Cases', // Название
                // backgroundColor: 'rgb(255, 99, 132)', // Цвет закраски
                borderColor: 'rgb(255, 99, 132)', // Цвет линии
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderWidth: 1,
                pointRadius: 1,
                data: arrCasesValue // Данные каждой точки графика
            }, {
                label: 'Deaths', // Название
                borderColor: 'rgb(37, 37, 37)', // Цвет линии
                pointBackgroundColor: 'rgb(37, 37, 37)',
                pointBorderWidth: 1,
                pointRadius: 1,
                data: arrDeathsValue // Данные каждой точки графика
            }, {
                label: 'Recovered', // Название
                borderColor: 'rgb(0, 255, 64)', // Цвет линии
                pointBackgroundColor: 'rgb(0, 255, 64)',
                pointBorderWidth: 1,
                pointRadius: 1,
                data: arrRecoveredValue // Данные каждой точки графика
            }]
        },
        // Настройки графиков
        options: {
            scales: {
                xAxes: [{
                    type: 'time',
                    time: {
                        displayFormats: {
                            quarter: 'MMM YYYY'
                        }
                    }
                }]
            }
        }
    })
}

BuildGraphWithData()

BTN_EXPAND_BLOCK.addEventListener('click', () => {
    BLOCK_WIDGET_4.classList.toggle('active');
})

function getNewOption(content) {
    const NewOption = document.createElement('option');
    NewOption.innerHTML = content;
    NewOption.setAttribute("value", `${content}`)
    return NewOption;
}

async function GetInformationThroughoutTheCountry() {
    const response = await fetch('https://disease.sh/v2/countries');
    const results = await response.json();

    for (const key in results) {
        SELECT_COUNTRYS.appendChild(getNewOption(`${results[key].country}`));
    }
}

GetInformationThroughoutTheCountry()