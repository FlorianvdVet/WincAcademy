const apiURL = 'https://wincacademydatabase.firebaseio.com/Florian/tasks.json'

const getData = async () => {
    try {
        const response = await fetch(apiURL, {method: "GET"});
        const taskData = await response.json();
        let tasks = Object.keys(taskData).map(key => ({
            id: key,
            description: taskData[key].description,
            done: taskData[key].done
        }));
        return tasks;
}   catch (error) {
    console.log(error);
}
};

const postData = () => {
    const data = {description: inputValue.value, done:'false'};
    fetch('https://wincacademydatabase.firebaseio.com/Florian/tasks.json', {method: 'POST', headers: {
        'Content-Type' : 'application/JSON',}, body: JSON.stringify(data)})
    };

const deleteData = (item) => {
    fetch(`https://wincacademydatabase.firebaseio.com/Florian/tasks/${item.id}.json`, {method: 'DELETE'})
    };