const genreLijst = document.getElementById("genre-list");

const apiData = async () => {
    const scriptData = await getData();
    console.log(scriptData);
    scriptData.genres.forEach(x => {
        const newItem = document.createElement("li");
        newItem.innerHTML = (`genre id =${x.id}, genre naam =${x.name}`);
        genreLijst.appendChild(newItem)
    });
};

apiData();

