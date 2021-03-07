"use strict";

//image slider 
let slideIndex = 0;

function next(){
    showSlide( slideIndex += 1)
}

function prev(){
    showSlide( slideIndex -- )
}


function showSlide(n){
    let slide = document.getElementsByClassName("my_slide"); 
    if(n >= slide.length ) { slideIndex = 0}
    if(n < 1 ) {slideIndex = slide.length -1}
  
   for(let i = 0; i < slide.length; i++){
       if(slideIndex === i){
           slide[i].style.display = "block"
       }else{
        slide[i].style.display = "none"
       }
   }
}

showSlide();

setInterval(() => {
    next();
}, 5000);

//close recepi div

let recipeBox = document.getElementById("recipe_box");

function closeRecipe() {
    recipeBox.style.display = "none";
}

//Homescreen redirect 


function firstInput(e){
    e.preventDefault();
    localStorage.setItem("firstSearchInput", document.querySelector("#first_search_box").value)
    window.location.href = "/recipies.html";
}

//API Search 

function searchBtn(e) {
    if(e) {
        e.preventDefault();
    }
   

    let firstSearchInput = localStorage.getItem("firstSearchInput");
    let html = document.getElementById("food_containner");
    html.innerHTML = "";

    let foodName =  document.querySelector("#search_box").value;

    if(firstSearchInput) {
        foodName = firstSearchInput;
        localStorage.setItem("firstSearchInput", "");
    }

    if( foodName){ 
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s= ${foodName}`)
        .then(response => response.json())
        .then(data => {
           
    
            if(data.meals){
                data.meals.forEach(element => {
    
                    html.innerHTML +=  `<div class="food">
                    <img src=${element.strMealThumb} alt="first food"/>
                    <h5>${element.strMeal}</h5>
                <input type="submit" value="see recipe" onclick = seeRecipe()>
                 </div>`
                 recipeBox.children[1].innerHTML = element.strMeal;
                 recipeBox.children[2].innerHTML = element.strInstructions;
                });
    
               
            }
    
           
        })
    }
}

//Recipe Details

function seeRecipe(){
    recipeBox.style.display = "block";
}

function load(){
    searchBtn();
}





