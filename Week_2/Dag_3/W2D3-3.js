/*
//AAAAAA

const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}]
    
    // Hier komt jouw functie
    const findSpiderMan = superheroes.find((superheroes) => {
        return superheroes.name === "Spiderman";
    });

    const findSuperman = superheroes.find((superheroes) => {
        return superheroes.name === "Superman";
    })
    
    console.log(findSpiderMan, "\n", findSuperman);
    // Find Spiderman
    // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}


BBBBBBBB

const doubleArrayValues = [1, 2, 3, 6, 9];

const verdubbeldArray = doubleArrayValues.map(i => i*2);

console.log(verdubbeldArray);
*/

/*
const doubleArrayValues = (array) => {
    let newArray = [];
    array.forEach(x => {
        newArray.push(x * 2);
    });
    return newArray;
};

console.log(doubleArrayValues([1, 2, 3]));



CCCCCC

const containsNumberBiggerThan10 = [1, 4, 3, 6, 9, 7, 11];

const groterDanTien = (element) => element > 10;

console.log(containsNumberBiggerThan10.some(groterDanTien));


const containsNumberBiggerThan10 = (array) => {
    return array.some(x => {
        return x > 10;
    })
}

console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));



DDDDDD

const isItalyInTheGreat7 = (array) => {

    return array.includes("Italy");
}

console.log(isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']));



EEEEEEE

const tenfold = (arrayToBeDoubled) => {
    return arrayToBeDoubled.map((getal) => {
        return getal * 10;
    });
};
   

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));



FFFFFFF

const isBelow100 = (nummersChecken) => {
    return nummersChecken.every((getal) => {
        return getal < 100;
    });
}

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]));


GGGGGGG

const bigSum = (totaal) => {
    return totaal.reduce((currentTotaal, getal) => {
        return getal + currentTotaal}, 0);
    };

console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]));
*/