const friendArea = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => buddyList(data))
}

friendArea();

const buddyList = friends =>{
    console.log(friends)
   const buddy = friends.results
    const list = document.getElementById('buddy-list')
   for(const buddys of buddy){
       const p = document.createElement('h4');
       p.innerText = `Name: ${buddys.name.first} Email: ${buddys.email}`
       list.appendChild(p);
   }
}   