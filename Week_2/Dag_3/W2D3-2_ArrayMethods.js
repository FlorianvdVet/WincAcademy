
/*
AAAAAAA
const addTheWordCool = function(array){
      array.push("cool");
      return array;
    }
    console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
    // resultaat: ["nice", "awesome", "tof", "cool"]


BBBBBB

const fruits = ['appels', 'peren', 'citroenen'];

const amountOfElementsInArray = () => {
    return fruits.length;
}

console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen'])); // 3


OPLOSSING:
const amountOfElementsInArray = function(array) {
    return array.length;
  };
  console.log(amountOfElementsInArray(["appels", "peren", "citroenen"]));
  

CCCCCCC

const selectBelgiumFromBenelux = function(array) {
    return array[0];
}

console.log(selectBelgiumFromBenelux(["België", "Nederland", "Luxemburg"]));


DDDDDD

const lastElementInArray = (array) => {
    return array[array.length-1];
}
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));


EEEEEE
const presidents = ["Trump", "Obama", "Bush", "Clinton"] 

const impeachTrumpSlice = function(array) {
    return array.slice(1);
}
const impeachTrumpSplice = function(array) {
    array.splice(0, 1);
    return array;
}

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]



 FFFFFFF

const stringsTogether = (array) => {
    return array.join(" ");
}

console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))
*/



//GGGGGGG


const combineArrays = (array1, array2, array3) => {
    return array1.concat(array2, array3);
}
console.log(combineArrays([1,2,3], [4,5,6], [7,8,9]));