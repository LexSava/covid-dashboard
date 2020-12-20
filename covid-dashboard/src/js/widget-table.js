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

  getData(content) {
    if (this.period === 'all') {
      if (this.value === 'perOneHundredThousand') {
        this.diseases = content.casesPerOneMillion * 10;
        this.deaths = content.deathsPerOneMillion * 10;
        this.recovered = content.recoveredPerOneMillion * 10; 
      } else if (this.value === 'absolute') {
        this.diseases = content.cases;
        this.deaths = content.deaths;
        this.recovered = content.recovered; 
      }
    } else if (this.period === 'today') {
      this.diseases = content.todayCases;
      this.deaths = content.todayDeaths;
      this.recovered = content.todayRecovered;
    }

    this.updateTextElements();
  }

  updateTextElements() {
    document.querySelector('.count_diseases').textContent = this.diseases;
    document.querySelector('.count_deaths').textContent = this.deaths;
    document.querySelector('.count_recovered').textContent = this.recovered;
  }
  
}

const url = 'https://disease.sh/v3/covid-19/all'
const table = new Table(url);
table.getRequest();