const button = document.getElementById("mybutton");

const knop = document.getElementById("mijnknop");

const lichaam = document.querySelector(".blue-background")


button.addEventListener("click", function(){

    alert ("Button clicked!");

});


knop.addEventListener("click", function(toggleColor){

   lichaam.classList.toggle("red-background");

});