const items = [
    { name: 'Bike',     price: 100  },
    { name: 'TV',       price: 200  },
    { name: 'Album',    price: 10   },
    { name: 'Book',     price: 5    },
    { name: 'Phone',    price: 500  },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25   },
]

/*
const filteredItems = items.filter((item) => {
    return item.price <= 100
});

console.log(filteredItems);

console.log(items);
*/


const itemNames = items.map((item) => {
    return item.name;
});

console.log(itemNames);


/*
const foundItem = items.find((item) => {
    return item.name === "Album";
});

console.log(foundItem);
*/

/*
items.forEach((item) => {
    console.log(item.name);
});
*/

/*
const hasCheapItems = items.some((item) => {
    return item.price <= 100;
});

console.log(hasCheapItems);
*/

/*
const hasCheapItems = items.every((item) => {
    return item.price <= 1000;
});

console.log(hasCheapItems);
*/

/*
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
}, 0);

console.log(total);
*/