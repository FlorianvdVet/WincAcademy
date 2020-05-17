const age = 27;
const isFemale = false;
const driverStatus = "Bob";
const name = "Cornelis";
const totalAmount = 10;

if (age >= 18) {

    console.log("Welkom welkom voel je thuis");

} else {
    
    console.log("Stay in school");

}

if (age >= 18 && age <= 25) {

    console.log("De hele avond 50% korting!")

} else {

    console.log("Reguliere prijs")

}

if (isFemale) {

    console.log("Gefeliciteerd mevrouw");

} else {

    console.log("Helaas alleen dames");

}

if (driverStatus == "Bob"){

    console.log("Wel thuis en rij voorzichtig");

} else {
    
    console.log("We bellen een taxi");

}

if (name == "Sarah" || name == "Bram" || name == "Abraham"){

    console.log("Wat leuk! Jij krijgt een biertje");

} else {

    console.log("Gewoon betalen jij");

}

if (totalAmount >= 25 && totalAmount <= 49){

    console.log("Gratis portie bitterballen!");

} else if (totalAmount >=50 && totalAmount <= 99){

    console.log("Nachos?! ja hoor");

} else if (totalAmount >= 100){

    console.log("Flessie Crystal voor deze gast!");

}