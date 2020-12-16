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

let osmap = L.map('map-id').setView([10, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(osmap);

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
    let myIcon = L.icon({
      iconUrl: './assets/icon/icons8-filled-circle-60.png',
      iconSize: [x, y]
    });
    L.marker([content[key].countryInfo.lat, content[key].countryInfo.long], {icon: myIcon}).addTo(osmap)
      .bindPopup(`Country: ${content[key].country} <br> Cases: ${content[key].cases} <br> Deaths: ${content[key].deaths}`)
      .bindTooltip(content[key].country);
  }  
}
  
getCountries();
