const userLoad = () =>{
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data => mainContainer(data))
}
userLoad();

const mainContainer = container =>{
    console.log(container)
    const allUser = container.results;
    const mainContainer = document.getElementById('main-container');
    for(const containers of allUser){
        const div = document.createElement('div');
        div.classList.add('style-area')
        div.innerHTML = `
        
            <img width='300px' src='${containers.picture.large}'>
            <h4> Name : ${containers.name.first}</h4>
            <h4> Street : ${containers.location.street.name}</h4>
            <h4> City : ${containers.location.city}</h4>
            <h4> Timezone : ${containers.location.timezone.offset}</h4>
        `
        mainContainer.appendChild(div)
    }
}