const loadSearch = () =>{
    const inputArea = document.getElementById('input-area');
    const inputValue = inputArea.value;
    inputArea.value = '';
    if(inputValue == ''){
      return('write something');
    }
    else{
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
      fetch(url)
      .then(res => res.json())
      .then(data => mealArea(data.meals));
    }
}
const mealArea = meals =>{
  console.log(meals)
    const divArea = document.getElementById('div-area');
    divArea.textContent = '';

    for(const meal of meals){
       const div = document.createElement('div')
       div.classList.add = 'col'
       div.innerHTML = `
       <div onclick="mealInfo('${meal.idMeal}')" class="card">
       <img height='200px' src="${meal.strMealThumb}" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${meal.strMeal}</h5>
         <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
       </div>
     </div>
        
       `
       divArea.appendChild(div)
    }
}

const mealInfo = id =>{
   const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
   fetch(url)
   .then(res =>res.json())
   .then(data => allMeals(data.meals[0]))
}

const allMeals = data =>{
  console.log(data)
    const cardArea = document.getElementById('card-area');
    cardArea.textContent = '';
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
        <img height='200px' src="${data.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.strMeal}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    `
    cardArea.appendChild(div)
}