const input = document.querySelector('.search');
const resultList = document.querySelector('.suggestions');
const data = [];

const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
fetch(endpoint)
  .then((bla) => bla.json())
  .then((res) => {
    data.push(...res);
  });

function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function findMatches(wordToSearch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToSearch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, data);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, 'gi');
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `
    <li>
    <span class="name">${cityName}, ${stateName}</span>
    <span class="population">${numberWithCommas(place.population)}</span>
  </li>
    `;
    })
    .join('');
  resultList.innerHTML = html;
}

input.addEventListener('keyup', displayMatches);
