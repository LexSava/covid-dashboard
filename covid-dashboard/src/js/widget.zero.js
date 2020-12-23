const widget_zero = document.querySelector('.widget_0');
widget_zero.classList.add('general__information');

async function getResponseAllCases() {
  const response = await fetch('https://api.covid19api.com/summary');
  const content = await response.json();
  widget_zero.appendChild(getEl(`- Cases - ${content.Global.TotalConfirmed}`));
  widget_zero.appendChild(getEl(`- Deaths - ${content.Global.TotalDeaths}`));
  widget_zero.appendChild(getEl(`- Recovered - ${content.Global.TotalRecovered}`));
}

getResponseAllCases();

function getEl(content) {
  const newEl = document.createElement('div');
  newEl.classList.add('general__information__heading');
  newEl.innerHTML = content;
  return newEl;
}
