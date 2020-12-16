function create_element(type, options) {
  const elem = document.createElement(type);
  elem.className = options[0];
  elem.id = options[1];
  if (options[2] !== undefined) elem.setAttribute(options[2], options[3]);
  elem.innerHTML = options[4];
  options[5].append(elem);
  return elem;
}

document.querySelector('.widget_3').innerHTML = '';
create_element('div', ['wrapper-map-class', 'wrapper-map-id',,, '', document.querySelector('.widget_3')]);
create_element('div', ['map-class', 'map-id',,, '', document.querySelector('.wrapper-map-class')]);
create_element('div', ['feature-info-class', 'feature-info-id',,, '', document.querySelector('.map-class')]);
create_element('div', ['info-class', 'info-id',,, '', document.querySelector('.feature-info-class')]);
create_element('p', ['paragraph-class', 'paragraph1-id',,, '', document.querySelector('.info-class')]);
create_element('span', ['span-name-class', 'span-name-country-id',,, 'Country: ', document.getElementById('paragraph1-id')]);
create_element('span', ['span-value-class', 'span-value-country-id',,, '', document.getElementById('paragraph1-id')]);
create_element('p', ['paragraph-class', 'paragraph2-id',,, '', document.querySelector('.info-class')]);
create_element('span', ['span-name-class', 'span-name-cases-id',,, 'Cases: ', document.getElementById('paragraph2-id')]);
create_element('span', ['span-value-class', 'span-value-cases-id',,, '', document.getElementById('paragraph2-id')]);
create_element('p', ['paragraph-class', 'paragraph3-id',,, '', document.querySelector('.info-class')]);
create_element('span', ['span-name-class', 'span-name-deaths-id',,, 'Deaths: ', document.getElementById('paragraph3-id')]);
create_element('span', ['span-value-class', 'span-value-deaths-id',,, '', document.getElementById('paragraph3-id')]);
create_element('div', ['close-class', 'close-id',,, '<img class = "close-image-class" src="./assets/icon/icons8-cancel-50.png">', document.querySelector('.map-class')]);
create_element('div', ['center-class', 'center-id',,, '<img class = "center-image-class" src="./assets/icon/icons8-center-of-gravity-50.png">', document.querySelector('.map-class')]);
create_element('div', ['zoomin-class', 'zoomin-id',,, '<img class = "zoomin-image-class" src="./assets/icon/icons8-zoom-in-50.png">', document.querySelector('.map-class')]);

const osmap = L.map('map-id', {scrollWheelZoom: false, zoomControl: false}).setView([10, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(osmap);

new L.Control.Zoom({ position: 'topright' }).addTo(osmap);

async function getCountries() {
  const response = await fetch('https://disease.sh/v2/countries');
  const content = await response.json();    
  for (const key in content) {
    let x, y;
    if (content[key].cases > 10000000) {
      x = 50; 
      y = 50;
    } else if (content[key].cases > 1000000 && content[key].cases < 9999999) {
      x = 40; 
      y = 40;
    } else if (content[key].cases > 100000 && content[key].cases < 999999) {
      x = 30; 
      y = 30;
    } else if (content[key].cases > 10000 && content[key].cases < 99999) {
      x = 20; 
      y = 20;
    } else {
      x = 10; 
      y = 10;
    }
    const myIcon = L.icon({
      iconUrl: './assets/icon/icons8-filled-circle-60.png',
      iconSize: [x, y]
    });    
    const tooltip = L.tooltip({direction: 'top'}).setContent(content[key].country);
    const mark = L.marker([content[key].countryInfo.lat, content[key].countryInfo.long], {icon: myIcon}).addTo(osmap)
      .bindTooltip(tooltip);
    mark.addEventListener('click', () => {
      document.querySelector('.feature-info-class').style.display = 'flex';
      document.querySelector('.close-class').style.display = 'flex';
      document.querySelector('.center-class').style.display = 'flex';
      document.querySelector('.zoomin-class').style.display = 'flex';
      document.getElementById('span-value-country-id').innerHTML = content[key].country;
      document.getElementById('span-value-cases-id').innerHTML = content[key].cases.toLocaleString('ru');
      document.getElementById('span-value-deaths-id').innerHTML = content[key].deaths.toLocaleString('ru');
      document.getElementById('center-id').addEventListener('click', () => {
        osmap.setView([content[key].countryInfo.lat, content[key].countryInfo.long]);
      });
      document.getElementById('zoomin-id').addEventListener('click', () => {
        osmap.setView([content[key].countryInfo.lat, content[key].countryInfo.long], 6);
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
  
getCountries();
