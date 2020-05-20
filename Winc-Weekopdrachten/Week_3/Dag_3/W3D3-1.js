/*
function sum(...numbers) {
    return numbers.reduce((previous, current) => {
        return previous + current;
    });
};


console.log(sum(2, 3, 4, 5, 6));
*/

function sum(x, y, z) {
    return x + y + z;
}

let numbers = [3, 5, 7];

console.log(sum(...numbers));