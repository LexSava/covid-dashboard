import moment from 'moment';
import Chart from 'chart.js';

const BTN_EXPAND_BLOCK = document.querySelector('.widget_4__btn');
const BLOCK_WIDGET_4 = document.querySelector('.widget_4');
const SELECT_COUNTRYS = document.querySelector('.dropdown-select');

const D = new Date('01/20/20');
const Till = new Date();
const ARRAY_OF_DATES = [];

const ctx = document.getElementById('myChart').getContext('2d');

function pad(s) { return (`00${s}`).slice(-2); }
while (D.getTime() < Till.getTime()) {
    ARRAY_OF_DATES.push(`${D.getFullYear()}-${pad(D.getMonth() + 1)}-${pad(D.getDate())}`);
    D.setDate(D.getDate() + 1);
}

let LineGraph;
let BarGraph;

async function BuildGraphWithData() {
    const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=366');
    const results = await response.json();
    const arrCasesValue = Object.values(results.cases);
    const arrDeathsValue = Object.values(results.deaths);
    const arrRecoveredValue = Object.values(results.recovered);

    LineGraph = new Chart(ctx, {
        // Тип графика
        type: 'line',
        // Создание графиков
        data: {
            // Точки графиков
            labels: ARRAY_OF_DATES,
            // График
            datasets: [{
                label: 'Cases', // Название
                backgroundColor: 'rgba(255, 206, 86, 0.2)', // Цвет закраски
                borderColor: 'rgba(255, 206, 86, 1)', // Цвет линии
                pointBackgroundColor: 'rgba(255, 206, 86, 1)',
                pointBorderWidth: 1,
                pointRadius: 1,
                data: arrCasesValue, // Данные каждой точки графика
            }, {
                label: 'Deaths', // Название
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)', // Цвет линии
                pointBackgroundColor: 'rgba(153, 102, 255, 1)',
                pointBorderWidth: 1,
                pointRadius: 1,
                data: arrDeathsValue, // Данные каждой точки графика
            }, {
                label: 'Recovered', // Название
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)', // Цвет линии
                pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                pointBorderWidth: 1,
                pointRadius: 1,
                data: arrRecoveredValue, // Данные каждой точки графика
            }],
        },
        // Настройки графиков
        options: {
            legend: {
                labels: {
                    // переопределение цвета шрифта
                    fontColor: 'white',
                },
            },
            scales: {
                xAxes: [{
                    type: 'time',
                    time: {
                        displayFormats: {
                            quarter: 'MMM YYYY',
                        },
                    },
                }],
            },
        },
    });
}

async function BuildGraphByCountry(countryNeme) {
    const response = await fetch('https://disease.sh/v2/countries');
    const results = await response.json();
    const newArrDate = [];
    console.log(results[1]);
    for (const key in results) {
        if (results[key].country === countryNeme) {
            newArrDate.push(results[key].cases);
            newArrDate.push(results[key].deaths);
            newArrDate.push(results[key].recovered);
        }
    }

    BarGraph = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Cases', 'Deaths', 'Recovered'],
            datasets: [{
                label: 'Contry',
                data: newArrDate,
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(54, 162, 235, 0.2)',

                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
            }],
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    },
                }],
            },
        },
    });
}

BTN_EXPAND_BLOCK.addEventListener('click', () => {
    BLOCK_WIDGET_4.classList.toggle('active');
});

function getNewOption(content) {
    const NewOption = document.createElement('option');
    NewOption.innerHTML = content;
    NewOption.setAttribute('value', `${content}`);
    return NewOption;
}

async function GetInformationThroughoutTheCountry() {
    const response = await fetch('https://disease.sh/v2/countries');
    const results = await response.json();

    for (const key in results) {
        SELECT_COUNTRYS.appendChild(getNewOption(`${results[key].country}`));
    }
}

function test() {
    console.log('HI');
}

GetInformationThroughoutTheCountry();

// LineGraph.destroy();
//         BarGraph.destroy();
console.log(BarGraph);
console.log(LineGraph);

document.querySelector('.dropdown-select').onchange = () => {
    if (document.querySelector('.dropdown-select').value === 'All countries') {
        BarGraph.destroy();
        LineGraph.destroy();
        BuildGraphWithData();
    } else {
        if (BarGraph !== undefined) {
            BarGraph.destroy();
        }
        LineGraph.destroy();
        BuildGraphByCountry(document.querySelector('.dropdown-select').value);
    }
};
BuildGraphWithData();
