const widget_zero = document.querySelector('.widget_0');
widget_zero.classList.add('general__information');

async function getResponseAllCases() {
  const response = await fetch('https://disease.sh/v3/covid-19/all');
  const content = await response.json();
  widget_zero.appendChild(getEl(`- Cases - ${content.cases}`));
  widget_zero.appendChild(getEl(`- Deaths - ${content.deaths}`));
  widget_zero.appendChild(getEl(`- Recovered - ${content.recovered}`));
}

getResponseAllCases();

function getEl(content) {
  const newEl = document.createElement('div');
  newEl.classList.add('general__information__heading');
  newEl.innerHTML = content;
  return newEl;
}
