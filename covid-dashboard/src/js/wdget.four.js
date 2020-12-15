import moment from 'moment';
import Chart from 'chart.js';


async function getRegetResultsOnCovid() {
    const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=366');
    const results = await response.json();
    console.log(results);
    return results.cases;
}
getRegetResultsOnCovid()


const MONTHS = moment.monthsShort();


let ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {
    // Тип графика
    type: 'line',
    // Создание графиков
    data: {
        // Точки графиков
        labels: MONTHS,
        // График
        datasets: [{
            label: 'COVID-19', // Название
            backgroundColor: 'rgb(255, 99, 132)', // Цвет закраски
            borderColor: 'rgb(255, 99, 132)', // Цвет линии
            data: [] // Данные каждой точки графика
        }]
    },

    // Настройки графиков
    options: {
    }
});