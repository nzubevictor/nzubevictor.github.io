//Firstly, set the currentIndex to 1. (first picture)
var currentIndex = 1;

//Then call displaySlides() to display the first immage.
displaySlides(currentIndex);

//When the user clicks one of the button call controller()
//The controller() function substracts or adds one of the displaySlides.
function controller(num){
 displaySlides(currentIndex += num);
}

function displaySlides(num){
 var x;
 var slides = document.getElementsByClassName('slide');
 //Note that the "num" vaule refers to the "currentIndex" of the slides
 if(num > slides.length){currentIndex = 1}
 if(num < 1){currentIndex = slides.length}
 for(x = 0; x < slides.length; x++){
  slides[x].style.display = "none";
 }
 slides[currentIndex-1].style.display = 'block';
}