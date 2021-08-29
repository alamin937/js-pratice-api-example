const countryArea = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => countryDetails(data))
    
}

countryArea();

const countryDetails = country => {
    const countryName = document.getElementById('country-name');
    for(const countries of country){
       const div = document.createElement('div');
       div.classList.add('area');
       div.innerHTML = `
            <h3> ${countries.name}</h3>
            <h5> ${countries.capital}</h5>
            <button onclick="mainArea('${countries.name}')">Details</button>
       `
       countryName.appendChild(div);
    }
}

const mainArea = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then (data => detailsArea(data));
}

const detailsArea = data =>{
   const mainArea = document.getElementById('details-area') ;
   mainArea.innerHTML = `
        <h3>${data.name}</h3>
        <h4>${data.population}</h4>
        <img src="${data.flag}" >
   `
}