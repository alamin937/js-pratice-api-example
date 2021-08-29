const postArea = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => loadPost(data))
}

postArea()

const loadPost = posts =>{
    const containerArea = document.getElementById('container-area')
    for(const post of posts){
       const div = document.createElement('div');
       div.classList.add('style-area');
       div.innerHTML = `
       
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <button onclick="idArea('${post.id}')">Post</button>
       `
       containerArea.appendChild(div);
    }
}

const idArea = id =>{
   const url = `https://jsonplaceholder.typicode.com/posts/${id}`
   fetch(url)
   .then(res => res.json())
   .then(data =>mainArea(data))
}

const mainArea = data =>{
    console.log(data)
    const idArea = document.getElementById('id-area');
    idArea.innerHTML = `
        <h2>Id : ${data.id}</h2>
        <h3>User id : ${data.userId}</h3>
    `
    
}