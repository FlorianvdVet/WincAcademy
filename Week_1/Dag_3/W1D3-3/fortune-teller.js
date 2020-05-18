let aantalKinderen = [0, 1, 2, 3];
let naamPartner = ["Henk", "Kees", "Sarah", "Anke"]
let woonPlaats = ["Amsterdam", "Tokio", "Istanbul", "Moskou"]
let baanFunctie = ["piloot", "gamer", "wiskundige", "leraar"]

const tellFortune = () => {

    if (aantalKinderen[Math.floor(Math.random() * aantalKinderen.length)] === 1) {

        console.log("Je zal een", baanFunctie[Math.floor(Math.random() * baanFunctie.length)],
        "zijn in",woonPlaats[Math.floor(Math.random() * woonPlaats.length)],
        "bent getrouwd met", naamPartner[Math.floor(Math.random() * naamPartner.length)],
        "en jullie hebben", 1, "kind");

    } else { 

        console.log("Je zal een", baanFunctie[Math.floor(Math.random() * baanFunctie.length)],
    "zijn in",woonPlaats[Math.floor(Math.random() * woonPlaats.length)],
    "bent getrouwd met", naamPartner[Math.floor(Math.random() * naamPartner.length)],
    "en jullie hebben", aantalKinderen[Math.floor(Math.random() * aantalKinderen.length)], "kinderen");

    }
}

tellFortune();