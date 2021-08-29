const loadSport = () =>{
    const inputArea = document.getElementById('input-area');
    const inputValue = inputArea.value;
    inputArea.value = '';

    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${inputValue}`
    fetch(url)
    .then(res =>res.json())
    .then(data => sportArea(data.teams))
}

const sportArea = teams =>{
    console.log(teams)
    const divArea = document.getElementById('div-area')
    for(const team of teams){
        const div = document.createElement('div')
       div.classList.add = 'col'
       div.innerHTML = `
       <div class="card">
       <img src="${team.strTeamBadge}" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">Card title</h5>
         <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
       </div>
     </div>
        
       `
       divArea.appendChild(div)
    }
}