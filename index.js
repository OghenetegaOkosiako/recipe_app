"use strict";

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
