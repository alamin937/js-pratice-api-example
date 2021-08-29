const buttonArea = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => containerArea(data))
}

const containerArea = quote =>{
    const quoteArea = document.getElementById('container')

    quoteArea.innerText = quote.quote;
}