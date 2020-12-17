import moment from 'moment';
import Chart from 'chart.js';


let D = new Date("01/20/20");
let Till = new Date();
const ARRAY_OF_DATES = [];
let ctx = document.getElementById('myChart').getContext('2d');


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

async function getRegetResultsOnCovid() {
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

        }
    })
}

getRegetResultsOnCovid()



