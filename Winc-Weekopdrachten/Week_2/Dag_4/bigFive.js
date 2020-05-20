
const knoppen1 = document.querySelectorAll(".big-five-button");
console.log(knoppen1);

const knoppen2 = Array.from(knoppen1);
console.log(knoppen2);

const dierenGezien = document.getElementById("spotted-animals-list");

knoppen2.forEach(x => x.addEventListener("click", () => {
    console.log(x.innerHTML);
    const newLi = document.createElement("li");
    newLi.classList.add("spotted-animals-list-item");
    newLi.innerHTML = x.innerHTML;
    dierenGezien.appendChild(newLi);
}));

// maak eventlistener aan om single item te verwijderen
//<button id="remove-first-item-button">Remove the first</button>

const deleteOne = document.querySelector("#remove-first-item-button");

console.log(deleteOne);

deleteOne.addEventListener("click", () => {
    const deleteFirst = dierenGezien.getElementsByClassName("spotted-animals-list-item")[0];
    var verwijderd = dierenGezien.removeChild(deleteFirst);
});

const deleteAll = document.querySelector("#remove-all-button");

deleteAll.addEventListener("click", () => {
    const node = dierenGezien;
   // node.innerHTML = "";
   while (node.firstChild) {
       node.removeChild(dierenGezien.firstChild);
   };
});
