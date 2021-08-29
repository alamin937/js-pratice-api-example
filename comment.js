const loadComment = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => commentArea(data))
}

loadComment();

const commentArea =  comment =>{
    const containerrArea = document.getElementById('container-area');
    for(const commentss of comment){
       const div = document.createElement('div');
       div.classList.add('style-area')
       div.innerHTML= `
            <h4>Name: ${commentss.name}</h4>
            <h5>Body: ${commentss.body}</h5>
            <button onclick="detailsArea('${commentss.id}')">Details</button>
       `
       containerrArea.appendChild(div);
    }
};

const detailsArea = id =>{
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data =>idArea(data))
}

const idArea = data =>{
    const allIdArea = document.getElementById('id-area');
    allIdArea.innerHTML = `
        <h2>ID: ${data.id}</h2> 
    `
}