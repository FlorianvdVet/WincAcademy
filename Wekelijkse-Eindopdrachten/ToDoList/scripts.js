const toDoList = document.querySelector("#toDoList");

const submitButton = document.querySelector("#submitBtn");

const inputValue = document.querySelector("#inputField");

getData().then(tasks => {
    console.log(tasks)
    tasks.forEach(item => {
        let listItem = document.createElement("li");
        let button = document.createElement("button");
        button.innerHTML = '<img src= "trash.jpg">';
        button.addEventListener("click", () => {
            toDoList.removeChild(listItem);
            deleteData(item);
        });
        listItem.innerHTML = item.description;
        toDoList.appendChild(listItem);
        listItem.appendChild(button);
    }
)});

const addListItem = () => {
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerHTML = '<img src= "trash.jpg">';
    button.addEventListener("click", () => {
        toDoList.removeChild(listItem);
        deleteData(item);
    })
    listItem.innerHTML = inputValue.value;
    toDoList.appendChild(listItem);
    listItem.appendChild(button);
};

submitBtn.addEventListener("click", () => {
    const inputText = inputValue.value;
    if (inputText) {
    postData(inputText);
    addListItem(inputText);
    inputValue.value = "";
}
    else {
        alert("Type in a task first!");
    }
});

