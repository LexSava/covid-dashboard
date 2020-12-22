// const diseasesElement = document.querySelector('.count_diseases');
// const deathsElement = document.querySelector('.count_deaths');
// const recoveredElement = document.querySelector('.count_recovered');

// async function getCountries () {
//   const response = await fetch(https://api.covid19api.com/summary);
//   const content = await response.json();

//   const diseases = content.Global.TotalConfirmed;
//   const deaths = content.Global.TotalDeaths;
//   const recovered = content.Global.TotalRecovered;

//   console.log(diseases, deaths, recovered);

//   diseasesElement.textContent = diseases;
//   deathsElement.textContent = deaths;
//   recoveredElement.textContent = recovered;
// }

// getCountries();
const categoryButtonPeriod = document.querySelector('.category-name_period');
const categoryButtonValue = document.querySelector('.category-name_value');

class Table {
  constructor(url) {
    this.url = url;
    this.period = 'all';
    this.value = 'absolute';
  }

  async getRequest() {
    const response = await fetch(this.url);
    const content = await response.json();
    
    this.content = content;
    this.getData(content);
  }

  // if (this.period === 'all') {
  //   if (this.value === 'perOneHundredThousand') {
  //     this.cases = content.casesPerOneMillion * 10;
  //     this.deaths = content.deathsPerOneMillion * 10;
  //     this.recovered = content.recoveredPerOneMillion * 10; 
  //   } else if (this.value === 'absolute') {
  //     this.cases = content.cases;
  //     this.deaths = content.deaths;
  //     this.recovered = content.recovered; 
  //   }
  // } else if (this.period === 'today') {
  //   this.cases = content.todayCases;
  //   this.deaths = content.todayDeaths;
  //   this.recovered = content.todayRecovered;
  // }

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

const url = 'https://disease.sh/v3/covid-19/all'
const table = new Table(url);
table.getRequest();

categoryButtonPeriod.addEventListener('click', () => {
  table.changeCategoryPeriod();
  table.getRequest();
  console.log('Period...');
});

categoryButtonValue.addEventListener('click', () => {
  table.changeCategoryValue();
  table.getRequest();
  console.log('Value...')
});
