const sorteerLijst = document.getElementById("result-button-click");

const landenKnop = document.getElementById("landenlijst");

const steenbokVrouwenKnop = document.getElementById("steenbokvrouwen");

const landenRegion = randomPersonData.map(person => person.region);


const newListItem = (value) => {
    let newItem = document.createElement("li");
    newItem.innerHTML = value;
    sorteerLijst.appendChild(newItem);
};

// Landenfilter
landenKnop.addEventListener("click", () => {
    node = sorteerLijst;
        while (node.firstChild) {
        node.removeChild(sorteerLijst.firstChild);
    };
    landenRegion.sort();
    landenRegion.forEach((land) => {
        newListItem(land);
    });
});



// 30+ vrouwen die Steenbok zijn


const steenbokFilter = (person) => {
    let gebDatum = new Date(person.birthday.mdy);
    let steenbok = (gebDatum.getMonth() === 11 && gebDatum.getDate() >=22) || (gebDatum.getMonth() === 0 && gebDatum.getDate() <= 19);
    return person.gender === "female" && person.age > 30 && steenbok;
};

const filterVrouwen = randomPersonData.filter((person) => {
    return steenbokFilter(person);
});


console.log(filterVrouwen);

steenbokVrouwenKnop.addEventListener("click", () => {
    node = sorteerLijst;
        while (node.firstChild) {
        node.removeChild(sorteerLijst.firstChild);
    };
    filterVrouwen.sort(function (a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });
    filterVrouwen.forEach((person) => {
        newListItem(`Dit is ${person.name} ${person.surname} en zij is ${person.age}`);
        });
    });



// Oude creditcards

// Maak een lijst van mensen:

// - laat per persoon de volgende data zien
//     - voornaam, achternaam
//     - telefoonnummer
//     - creditcardnummer
//     - verloopdatum

// De lijst mag alleen volwassenen bevatten.

// De verloopdatum moet in de toekomst liggen (van dit jaar). 

// Let op: de verloop datum van deze credit cards is in de volgende notatie `Maand/'Jaar`. Hierbij bevat het jaartal slechts de laatste twee cijfers. Dus niet `2025` maar `25`.

// De verloopdatum moet tussen nu en de komende 12 maanden liggen. (als het nu 15 feb 2020 is, willen we kaarten overhouden die verlopen tussen 15 feb 2020 en 15 feb 2021).

// Sorteer de lijst zodat de snelst verlopende creditcards bovenaan staan.

const creditFilter = (person) => {
    let verlopen = person.credit_card.expiration;
    
};

const filteredCards = randomPersonData.filter((person) => {
    return creditFilter(person);
});

console.log(filteredCards);

let creditCard = randomPersonData.map(person => person.credit_card.expiration);

console.log(creditCard);
