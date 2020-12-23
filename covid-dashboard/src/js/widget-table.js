const categoryButtonPeriod = document.querySelector('.category-name_period');
const categoryButtonValue = document.querySelector('.category-name_value');
const globalButton = document.querySelector('.global-button');

export default class Table {
  constructor(url, country) {
    this.url = url;
    this.period = 'all';
    this.value = 'absolute';
    this.searchType = 'global';

    if (country === undefined) {
      this.country = null;
    } else {
      this.country = country;
      this.searchType = 'country'
    }

    this.setTableTile();
  }

  setTableTile() {
    document.querySelector('.table-title').textContent = this.country || this.searchType[0].toUpperCase() + this.searchType.slice(1);
  }

  async getRequest() {    
    if (this.searchType === 'global') {
      let response = await fetch(this.url + 'all/');
      let content = await response.json();
      this.content = content;
    } else {
      let response = await fetch(this.url + 'countries/');
      let content = await response.json();
      for (let i = 0; i < content.length; i++) {
        if (content[i].country === this.country) {
          this.content = content[i];
        }
      }
    }
    
    this.getData(this.content);
  }

  getData(content) {
    switch (this.period) {
      case 'all':
        switch (this.value) {
          case 'absolute':
            this.cases = content.cases;
            this.deaths = content.deaths;
            this.recovered = content.recovered; 
          break;

          case 'perOneHundredThousand':
            this.cases = Math.round(content.casesPerOneMillion * 10);
            this.deaths = Math.round(content.deathsPerOneMillion * 10);
            this.recovered = Math.round(content.recoveredPerOneMillion * 10); 
          break;
        }
      break;
      case 'today':
        switch (this.value) {
          case 'absolute':
            this.cases = content.todayCases;
            this.deaths = content.todayDeaths;
            this.recovered = content.todayRecovered; 
          break;

          case 'perOneHundredThousand':
            this.cases = Math.round(content.todayCases);
            this.deaths = Math.round(content.todayDeaths);
            this.recovered = Math.round(content.todayRecovered); 
          break;
        }
      break;
    }

    this.updateTextElements();
  }

  updateTextElements() {
    document.querySelector('.count_cases').textContent = this.cases;
    document.querySelector('.count_deaths').textContent = this.deaths;
    document.querySelector('.count_recovered').textContent = this.recovered;
  }

  changeCategoryPeriod() {
    if (categoryButtonPeriod.textContent === 'All period') {
      this.period = 'today';
      categoryButtonPeriod.textContent = 'Last day';
    } else {
      this.period = 'all';
      categoryButtonPeriod.textContent = 'All period';
    }
  }

  changeCategoryValue() {
    if (categoryButtonValue.textContent === 'Absolute') {
      this.value = 'perOneHundredThousand';
      categoryButtonValue.textContent = 'Per 100.000';
    } else {
      this.value = 'absolute';
      categoryButtonValue.textContent = 'Absolute';
    } 
  }
}

const url = 'https://disease.sh/v3/covid-19/'
const table = new Table(url);
table.getRequest();

categoryButtonPeriod.addEventListener('click', () => {
  table.changeCategoryPeriod();
  table.getRequest();
});

categoryButtonValue.addEventListener('click', () => {
  table.changeCategoryValue();
  table.getRequest();
});

globalButton.addEventListener('click', () => {
  document.querySelector('.table-title').textContent = 'Global'
  table.getRequest();
})