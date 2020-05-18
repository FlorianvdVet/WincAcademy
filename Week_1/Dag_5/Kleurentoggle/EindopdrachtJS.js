/*
const klikken = document.getElementsByTagName("li");

const lichaam = document.getElementById(".achtergrondKleur");

console.log(klikken, lichaam);

let kleurenKeuze = ["blauw", "groen", "geel", "rood", "zilver", "goud"];

console.log(kleurenKeuze);
console.log(Array.isArray(kleurenKeuze));
*/

// de eerste code was voor mezelf om te testen of die functies goed werkten, uiteindelijk
// heb ik er geen gebruik van gemaakt. Wilde met array werken maar dat kreeg ik niet aan de
// praat dus toen maar handmatig zoals onderstaand:

const blauw = document.getElementById('blauw');

blauw.addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
  
});

const groen = document.getElementById('groen');

groen.addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
});

const geel = document.getElementById('geel');

geel.addEventListener("click", function () {
  document.body.style.backgroundColor = "yellow";
});

const rood = document.getElementById('rood');

rood.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});

const zilver = document.getElementById('zilver');

zilver.addEventListener("click", function () {
  document.body.style.backgroundColor = "silver";
});

const goud = document.getElementById('goud');

goud.addEventListener("click", function () {
  document.body.style.backgroundColor = "gold";
});

/*

const knoppen = document.querySelectorAll("#zijMenu .knopje");

knoppen.forEach(function(e){

    let zijMenuWeg = document.querySelector(".openMenu");

    e.addEventListener("click", function(){

            zijMenuWeg.style.visibility = "hidden";

    });
});

Het lukte me niet om een manier te verzinnen om het menu weer in te laten klappen.
Bovenstaande hield in dat het menu helemaal niet meer tevoorschijn kwam.
Het menu verdwijnt alleen als er niet meer over gehoverd wordt.
*/