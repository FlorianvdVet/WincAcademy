/*
const testNum = (numberCompare) => {
    return new Promise((resolve, reject) => {
        let basisValue = 10;
        if (numberCompare >= basisValue) {
           resolve("Dit nummer is groter dan of gelijk aan 10");
        } else {
            reject("Dit nummer is kleiner dan 10");
        }
    })};

    testNum(25).then(resolve => console.log(resolve)).catch(reject => console.log(reject));
*/


    /*
Exercise 2:
Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order. If the array contains anything but strings, it should throw an error.
Then call these functions by *chaining* the promises
*/

const makeAllCaps = (wordsInArray) => {
    return new Promise((resolve, reject) => {
       if (wordsInArray.every(word => {
           return typeof word === "string";
       })) {
           resolve(
               sortWords(
                   wordsInArray.map(word => {
                       return word.toUpperCase();
                   })
               )
           )
       } else {
           reject("geen string");
       }
    });
};



const sortWords = (wordsInArray) => {
    return new Promise((resolve, reject) => {
        if (wordsInArray) {
            resolve(wordsInArray.sort());
        } else {
            reject("alleen strings");
        }
    });
};

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

makeAllCaps(arrayOfWords).then(sortWords(arrayOfWords)).then(resolve => console.log(resolve)).catch(reject => console.log(reject));

makeAllCaps(complicatedArray).then(sortWords(complicatedArray)).then(resolve => console.log(resolve)).catch(reject => console.log(reject));



let promiseShouldSucceed = Math.random() >= 0.5;
console.log(promiseShouldSucceed);

let randomMillisecond = Math.floor(Math.random() * 5000) + 1;
console.log(randomMillisecond);

/*
const sinterklaasIsGul = true;

// Promise maken (dit hoeven jullie dus niet te leren, dit is aan de API (back-end) kant)
const krijgIkEenNieuweiPhone = new Promise(
    (resolve, reject) => {
        if (sinterklaasIsGul) {
            const smartphone = {
                merk: 'Apple',
                type: 'iPhone 11'
            };
            resolve(smartphone);
        } else {
            const metWelkeReden = new Error('Je bent stout geweest, geen cadeaus voor jou');
            reject(metWelkeReden);
        }

    }
);


// Promise aanroepen, of "consumeren" (dit zullen je dus wel doen en moeten leren)
const vraagAanSinterklaas = () => {
    krijgIkEenNieuweiPhone
        .then(function (resolved) {
            // yay, je hebt een nieuwe smartphone
            console.log(resolved);
        })
        .catch(function (error) {
            // oeps, geen Sinterklaas cadeau dit jaar
            console.log(error.message);
        });
}

vraagAanSinterklaas();
*/