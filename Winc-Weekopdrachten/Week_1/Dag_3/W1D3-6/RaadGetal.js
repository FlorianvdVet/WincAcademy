alert("Welkom bij Raad het Getal!");

let naam = prompt("Wat is je naam?");

if (naam != null) {

    alert(naam + ", ben je er klaar voor?");

} else {
    
    prompt("Vul je naam in");

}

let minimumGetal = parseInt(prompt("Kies je laagste getal"));

let maximumGetal = parseInt(prompt("Kies je hoogste getal"));

console.log(minimumGetal);
console.log(maximumGetal);

while (maximumGetal - minimumGetal > 10) {

    alert("Het verschil is groter dan 10, kies nieuwe getallen");
    minimumGetal = prompt("Kies je laagste getal");
    maximumGetal = prompt("Kies je hoogste getal");

}  

let randomNumber =  Math.floor((Math.random() * maximumGetal) + minimumGetal);

console.log(randomNumber);

let geradenGetal = prompt("Raad een getal tussen " + minimumGetal + " en " + maximumGetal);

let levens = 5;

while (geradenGetal != randomNumber && levens > 0) {

    geradenGetal = prompt("Helaas was dat niet goed, raad nog eens. Je hebt nog " + levens + " pogingen over");
    levens--;

} 
 if (geradenGetal === randomNumber) {

    alert("Dat was het juiste getal! Goed gedaan");

 } else {

    alert("Je hebt geen pogingen meer, game over!");
    
 }