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

const countries = [];
//const points = {};
async function getCountries() {
  const response = await fetch('https://api.covid19api.com/countries');  
  const content = await response.json();  
  for (const key in content) {
    countries.push(content[key].Slug);
    //widget_zero.appendChild(getEl(`- ${key} - ${content[key][Object.keys(content[key])[Object.keys(content[key]).length - 1]]}`));
  }
  /* for (const slug of countries) {      
    const markers = await fetch(`https://api.covid19api.com/live/country/${slug}/status/confirmed`);
    const array_obj = await markers.json();
    //console.log(array_obj[0].Country);
  }  */ 
}
  
getCountries();

/* L.marker([array_obj[0].Lat, array_obj[0].Lon]).addTo(osmap)
      .bindPopup(array_obj[0].Country)
      .openPopup(); */
//console.log(countries);