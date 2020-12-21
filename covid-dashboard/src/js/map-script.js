import red_icon from '../assets/icon/icons8-filled-circle-60.png';
import green_icon from '../assets/icon/icons8-filled-green-circle-60.png';
import cancel from '../assets/icon/icons8-cancel-50.png';
import center from '../assets/icon/icons8-center-of-gravity-50.png';
import zoomin from '../assets/icon/icons8-zoom-in-50.png';
import zoom_reg from '../assets/icon/icons8-bookmark-100.png';
import legend from '../assets/icon/icons8-list-52.png';
import skins from '../assets/icon/icons8-categorize-50.png';

function create_element(type, options) {
  const elem = document.createElement(type);
  elem.className = options[0];
  elem.id = options[1];
  if (options[2] !== undefined) elem.setAttribute(options[2], options[3]);
  elem.innerHTML = options[4];
  options[5].append(elem);
  return elem;
}
let check = {
  cumulative: true,
  active: false
}

document.querySelector('.widget_3').innerHTML = '';
create_element('div', ['wrapper-map-class', 'wrapper-map-id', , , '', document.querySelector('.widget_3')]);
create_element('div', ['map-class', 'map-id', , , '', document.querySelector('.wrapper-map-class')]);
create_element('div', ['feature-info-class', 'feature-info-id', , , '', document.querySelector('.map-class')]);
create_element('div', ['info-class', 'info-id', , , '', document.querySelector('.feature-info-class')]);
create_element('p', ['paragraph-class', 'paragraph1-id', , , '', document.querySelector('.info-class')]);
create_element('span', ['span-name-class', 'span-name-country-id', , , 'Country: ', document.getElementById('paragraph1-id')]);
create_element('span', ['span-value-class', 'span-value-country-id', , , '', document.getElementById('paragraph1-id')]);
create_element('p', ['paragraph-class', 'paragraph2-id', , , '', document.querySelector('.info-class')]);
create_element('span', ['span-name-class', 'span-name-cases-id', , , 'Cases: ', document.getElementById('paragraph2-id')]);
create_element('span', ['span-value-class', 'span-value-cases-id', , , '', document.getElementById('paragraph2-id')]);
create_element('p', ['paragraph-class', 'paragraph3-id', , , '', document.querySelector('.info-class')]);
create_element('span', ['span-name-class', 'span-name-deaths-id', , , 'Deaths: ', document.getElementById('paragraph3-id')]);
create_element('span', ['span-value-class', 'span-value-deaths-id', , , '', document.getElementById('paragraph3-id')]);

create_element('p', ['paragraph-class', 'paragraph4-id', , , '', document.querySelector('.info-class')]);
create_element('span', ['span-name-class', 'span-name-recovered-id', , , 'Recovered: ', document.getElementById('paragraph4-id')]);
create_element('span', ['span-value-class', 'span-value-recovered-id', , , '', document.getElementById('paragraph4-id')]);
create_element('p', ['paragraph-class', 'paragraph5-id', , , '', document.querySelector('.info-class')]);
create_element('span', ['span-name-class', 'span-name-active-id', , , 'Active: ', document.getElementById('paragraph5-id')]);
create_element('span', ['span-value-class', 'span-value-active-id', , , '', document.getElementById('paragraph5-id')]);

create_element('div', ['close-class', 'close-id', , , `<img class = "close-image-class" src=${cancel}>`, document.querySelector('.map-class')]);
create_element('div', ['center-class', 'center-id', , , `<img class = "center-image-class" src=${center}>`, document.querySelector('.map-class')]);
create_element('div', ['zoomin-class', 'zoomin-id', , , `<img class = "zoomin-image-class" src=${zoomin}>`, document.querySelector('.map-class')]);

create_element('div', ['button-class active-class', 'cumulative-cases-id', , , '', document.querySelector('.map-class')]);
create_element('div', ['button-text-class', 'cumulative-cases-text-id', , , 'Cumulative Cases', document.getElementById('cumulative-cases-id')]);
create_element('div', ['button-class passive-class', 'active-cases-id', , , '', document.querySelector('.map-class')]);
create_element('div', ['button-text-class', 'active-cases-text-id', , , 'Active Cases', document.getElementById('active-cases-id')]);

create_element('div', ['options-class', 'options-id', , , '', document.querySelector('.map-class')]);
create_element('div', ['zoom-reg-button-class', 'zoom-reg-button-id', , , `<img class = "zoom-reg-image-class" src=${zoom_reg}>`, document.querySelector('.options-class')]);
create_element('div', ['legend-button-class', 'legend-button-id', , , `<img class = "legend-image-class" src=${legend}>`, document.querySelector('.options-class')]);
create_element('div', ['skins-button-class', 'skins-button-id', , , `<img class = "skins-image-class" src=${skins}>`, document.querySelector('.options-class')]);

create_element('div', ['legend-class', 'legend-id', , , '', document.querySelector('.map-class')]);
create_element('div', ['close-legend-class', 'close-legend-id', , , `<img class = "close-image-legend-class" src=${cancel}>`, document.querySelector('.legend-class')]);
create_element('div', ['legend-text-class', 'legend-text-id', , , '', document.querySelector('.legend-class')]);

create_element('div', ['region-class', 'region-id', , , '', document.querySelector('.map-class')]);
create_element('div', ['close-region-class', 'close-region-id', , , `<img class = "close-image-region-class" src=${cancel}>`, document.querySelector('.region-class')]);
create_element('div', ['region-text-class', 'region-text-id', , , '', document.querySelector('.region-class')]);

function create_legend () {
  document.getElementById('legend-text-id').innerHTML = '';
  let legend_icon;
  if (check.cumulative) legend_icon = red_icon;
  else if (check.active) legend_icon = green_icon;
  create_element('p', ['p-class', 'p-legend-1-id', , , `<img src = ${legend_icon} style = 'width: 25px; height: 25px;'> > 10,000,000`, document.querySelector('.legend-text-class')]);
  create_element('p', ['p-class', 'p-legend-2-id', , , `<img src = ${legend_icon} style = 'width: 20px; height: 20px; margin-right: 2.5px;'> 1,000,000 - 10,000,000`, document.querySelector('.legend-text-class')]);
  create_element('p', ['p-class', 'p-legend-3-id', , , `<img src = ${legend_icon} style = 'width: 15px; height: 15px; margin-right: 5px;'> 100,000 - 1,000,000`, document.querySelector('.legend-text-class')]);
  create_element('p', ['p-class', 'p-legend-4-id', , , `<img src = ${legend_icon} style = 'width: 10px; height: 10px; margin-right: 7.5px;'> 10,000 - 100,000`, document.querySelector('.legend-text-class')]);
  create_element('p', ['p-class', 'p-legend-5-id', , , `<img src = ${legend_icon} style = 'width: 5px; height: 5px; margin-right: 10px;'> < 10,000`, document.querySelector('.legend-text-class')]);
}
create_legend();

create_element('p', ['p-class p-region-class', 'p-region-1-id', , , 'Default world map', document.querySelector('.region-text-class')]);
create_element('p', ['p-class p-region-class', 'p-region-2-id', , , 'China', document.querySelector('.region-text-class')]);
create_element('p', ['p-class p-region-class', 'p-region-3-id', , , 'Australia', document.querySelector('.region-text-class')]);
create_element('p', ['p-class p-region-class', 'p-region-4-id', , , 'North America', document.querySelector('.region-text-class')]);
create_element('p', ['p-class p-region-class', 'p-region-5-id', , , 'Europe', document.querySelector('.region-text-class')]);

const osmap = L.map('map-id', { scrollWheelZoom: true, zoomControl: false }).setView([10, 0], 2);
L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(osmap);

new L.Control.Zoom({ position: 'bottomright' }).addTo(osmap);

async function getCountries() {
  const response = await fetch('https://disease.sh/v2/countries');
  const content = await response.json();
  for (const key in content) {
    let x, y;
    if (content[key].cases > 10000000) {
      x = 25;
      y = 25;
    } else if (content[key].cases > 1000000 && content[key].cases < 9999999) {
      x = 20;
      y = 20;
    } else if (content[key].cases > 100000 && content[key].cases < 999999) {
      x = 15;
      y = 15;
    } else if (content[key].cases > 10000 && content[key].cases < 99999) {
      x = 10;
      y = 10;
    } else {
      x = 5;
      y = 5;
    }
    let icon_fill, tooltip_content;
    if (check.cumulative) {      
      icon_fill = red_icon;
      tooltip_content = `Country: ${content[key].country} <br> 
        Cases: ${content[key].cases.toLocaleString()} <br> Deaths: ${content[key].deaths.toLocaleString()}`;
      document.getElementById('paragraph4-id').style.display = 'none';
      document.getElementById('paragraph5-id').style.display = 'none';
      document.querySelector('.feature-info-class').style.height = '155px';
      document.querySelector('.info-class').style.height = '77px';
      document.querySelector('.center-class').style.top = '134px';
      document.querySelector('.zoomin-class').style.top = '134px';
    } else if (check.active) {
      icon_fill = green_icon;
      tooltip_content = `Country: ${content[key].country} <br> 
        Cases: ${content[key].cases.toLocaleString()} <br> Deaths: ${content[key].deaths.toLocaleString()} <br> 
        Recovered: ${content[key].recovered.toLocaleString()} <br> Active: ${content[key].active.toLocaleString()}`;
      document.getElementById('paragraph4-id').style.display = 'block';
      document.getElementById('paragraph5-id').style.display = 'block';
      document.querySelector('.feature-info-class').style.height = '207px';
      document.querySelector('.info-class').style.height = '129px';
      document.querySelector('.center-class').style.top = '186px';
      document.querySelector('.zoomin-class').style.top = '186px';
    }
    const myIcon = L.icon({
      iconUrl: icon_fill,
      iconSize: [x, y]
    });
    const tooltip = L.tooltip({ direction: 'top' }).setContent(tooltip_content);
    const mark = L.marker([content[key].countryInfo.lat, content[key].countryInfo.long], { icon: myIcon }).addTo(osmap)
      .bindTooltip(tooltip);
    mark.addEventListener('click', () => {
      document.querySelector('.feature-info-class').style.display = 'flex';
      document.querySelector('.close-class').style.display = 'flex';
      document.querySelector('.center-class').style.display = 'flex';
      document.querySelector('.zoomin-class').style.display = 'flex';
      document.getElementById('span-value-country-id').innerHTML = content[key].country;
      document.getElementById('span-value-cases-id').innerHTML = content[key].cases.toLocaleString();
      document.getElementById('span-value-deaths-id').innerHTML = content[key].deaths.toLocaleString();
      document.getElementById('span-value-recovered-id').innerHTML = content[key].recovered.toLocaleString();
      document.getElementById('span-value-active-id').innerHTML = content[key].active.toLocaleString();
      const lat = content[key].countryInfo.lat;
      const lon = content[key].countryInfo.long;
      document.getElementById('center-id').addEventListener('click', () => {
        osmap.setView([lat, lon]);
      });
      document.getElementById('zoomin-id').addEventListener('click', () => {
        osmap.setView([lat, lon], 6);
      });
    });
  }
}
document.getElementById('close-id').addEventListener('click', () => {
  document.querySelector('.feature-info-class').style.display = 'none';
  document.querySelector('.close-class').style.display = 'none';
  document.querySelector('.center-class').style.display = 'none';
  document.querySelector('.zoomin-class').style.display = 'none';
});

document.getElementById('active-cases-id').addEventListener('click', () => {
  check.cumulative = false;
  check.active = true;
  document.getElementById('cumulative-cases-id').className = 'button-class passive-class';
  document.getElementById('active-cases-id').className = 'button-class active-class';
  getCountries();
  create_legend();
});

document.getElementById('cumulative-cases-id').addEventListener('click', () => {
  check.cumulative = true;
  check.active = false;
  document.getElementById('cumulative-cases-id').className = 'button-class active-class';
  document.getElementById('active-cases-id').className = 'button-class passive-class';
  getCountries();
  create_legend();
});

getCountries();

document.getElementById('legend-button-id').addEventListener('click', () => {
  document.getElementById('legend-id').style.display = 'flex';
  document.getElementById('region-id').style.display = 'none';
});
document.querySelector('.close-image-legend-class').addEventListener('click', () => {
  document.getElementById('legend-id').style.display = 'none';
});

document.getElementById('zoom-reg-button-id').addEventListener('click', () => {
  document.getElementById('region-id').style.display = 'flex';
  document.getElementById('legend-id').style.display = 'none';
});
document.querySelector('.close-image-region-class').addEventListener('click', () => {
  document.getElementById('region-id').style.display = 'none';
});

document.getElementById('p-region-1-id').addEventListener('click', () => {
  osmap.setView([10, 0], 2);
});
document.getElementById('p-region-2-id').addEventListener('click', () => {
  osmap.setView([30, 100], 3);
});
document.getElementById('p-region-3-id').addEventListener('click', () => {
  osmap.setView([-18, 135], 3);
});
document.getElementById('p-region-4-id').addEventListener('click', () => {
  osmap.setView([50, -97], 3);
});
document.getElementById('p-region-5-id').addEventListener('click', () => {
  osmap.setView([55, 10], 4);
});