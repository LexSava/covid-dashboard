const widget_zero = document.querySelector('.widget_0');
widget_zero.classList.add('general__information');

async function getResponseAllCases() {
  const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=366');
  const content = await response.json();
  for (const key in content) {
    widget_zero.appendChild(getEl(`- ${key} - ${content[key][Object.keys(content[key])[Object.keys(content[key]).length - 1]]}`));
  }
}

getResponseAllCases();

function getEl(content) {
  const newEl = document.createElement('div');
  newEl.classList.add('general__information__heading');
  newEl.innerHTML = content;
  return newEl;
}
