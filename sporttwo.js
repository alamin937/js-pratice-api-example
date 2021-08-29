const loadClub = () =>{
    const inputArea = document.getElementById('input-area');
    const inputValue  = inputArea.value;
    inputArea.value = '';
   if(inputValue == 0){
       return('write something')
   }
   else{
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${inputValue}`
    fetch(url)
    .then(res => res.json())
    .then(data => loadApi(data.teams))
   }
}

const loadApi = teams =>{
    console.log(teams)
    const cardArea = document.getElementById('card-area')
    cardArea.textContent = '';
    for(const team of teams){
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div onclick="clickCard()" class="card">
        <img height='200px' src="${team.strTeamBadge}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${team.strTeam}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
        `
        cardArea.appendChild(div);
    }
}

const clickCard = id