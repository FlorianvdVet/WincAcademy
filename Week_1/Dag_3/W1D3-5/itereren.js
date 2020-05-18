let colors = ["yellow", "blue", "red", "orange", "green"];
var i = 0;

/*
while (i < colors.length) {

    console.log(colors[i]);
    i++;
}

console.log("dit waren alle kleuren");
*/

/*
for (i = 0; i < colors.length; i++) {

    console.log(colors[i]);

}
*/

// colors.forEach(element => console.log(element));

/*
1. Mijn For loop neemt 3 (5 incl enters) regels in beslag

2. Mijn forEach method neemt 1 regel in beslag

3. Voor mij is de forEach methode een stuk simpeler omdat het makkelijk
te zien is dat elk element los wordt geschreven in de output. Bij de While-loop
duurde het lang voordat ik een manier wist waarmee ik elk element los kon
printen in de console. Met name omdat je andere variabelen moet gebruiken bij
het schrijven van de code.

4.


let auto = {

    merk: "Audi",
    model: "r8",
    kleur: "zwart",
    prijs: 100000,
    wielen: 4,

}

console.dir(auto);

Volgens mij is dit geen kwestie van itereren omdat er geen herhaling van commands
plaatsvindt op basis van de verandering van een variabele in een functie. De eigenschappen
blijven hetzelfde dus de code hoeft niet te herhalen om te zien of er iets veranderd is.