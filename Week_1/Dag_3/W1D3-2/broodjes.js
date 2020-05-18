/*
Dutch Cheese Sandwich

Get bread
Put on some appelstroop
Put on cheese
Put other bread on top
*/

/*
const dutchCheeseSandwich = () => {

    console.log("Get bread, Put on some appelstroop, Put on cheese, Put other bread on top")
    
};

dutchCheeseSandwich()
*/

/*
// function declaration
const makeSandwich = (topping) => {

    console.log("There you go, a sandwich with", topping)
    
};

// function call
makeSandwich('kaas')
makeSandwich('salami')
*/

/*
const calculateDiscountPrice = (totalAmount, discount) => {

    return Math.round(totalAmount - discount);

}

console.log(calculateDiscountPrice(24, 13));
*/

const berekenKortingPrijs = (totaalBedrag, korting) => {

    if (totaalBedrag < 25) {

        console.log("Helaas geen korting! De totale prijs is")
        return (totaalBedrag)
    
    } else {
        
        console.log("U krijgt korting hoera! De totale prijs is")
        return Math.round(totaalBedrag - korting)

    }

}

console.log(berekenKortingPrijs(25, 5))