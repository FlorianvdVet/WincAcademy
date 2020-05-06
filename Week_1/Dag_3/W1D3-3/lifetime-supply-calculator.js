const calculateSupply = (age, amountPerDay) => {

    let maxAge = 65
    let aantalNodig = (365 * amountPerDay) * (maxAge - age);
    console.log("Je hebt", aantalNodig, "snickers tot je", maxAge, "bent")

}

calculateSupply(20, 5);
calculateSupply(53, 1.3);
calculateSupply(8, 16);