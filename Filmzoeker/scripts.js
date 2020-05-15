const knoppen = document.getElementsByName("film-selector");
const knopList = Array.from(knoppen);

const filmLijst = document.getElementById("film-list");

const filmTitels = movies.map(titel => {
    return titel.Title;
})
//console.log(filmTitels);

const filmPosters = movies.map(poster => {
    return poster.Poster;
})
//console.log(filmPosters);


const filmsInDom = () => {
    movies.map((film) => {
    const newLi = document.createElement("li");
    filmLijst.appendChild(newLi);
    const newA = document.createElement("a");
    newA.href = "http://www.imdb.com/title/" + film.imdbID;
    newA.target = "_blank";
    newLi.appendChild(newA);
    const plaatje = document.createElement("img");
    plaatje.src = film.Poster;
    newLi.appendChild(plaatje);
})};

filmsInDom();


const buttonClicked = () => {
    knopList.forEach(x => x.addEventListener("change", () => {
        console.log("knop geklikt");
        (console.log(event.target.value));
}))};

buttonClicked();


const handleOnChangeEvent = () => {
    knopList.forEach(x => x.addEventListener("change", () => {
        (console.log(event.target));
        const filmWissel = event.target.value;
        switch (filmWissel) {
            case "nieuwste":
                console.log("Dit zijn de nieuwste films");
                break;
            case "avengers":
                console.log("Dit zijn de Avengers films");
                const avengers = movies.filter(movie => {
                    return movie.Title.includes("Avengers");
                });
                filmsInDom(avengers);
                break;
            case "x-men":
                console.log("Dit zijn de X-Men films");
                const xmen = movies.filter(movie => {
                    return movie.Title.includes("X-men");
                });
                filmsInDom(xmen);
                break;
            case "princess":
                console.log("Dit zijn de Princess films");
                const princess = movies.filter(movie => {
                    return movie.Title.includes("Princess");
                });
                filmsInDom(princess);
                break;
            case "batman":
                console.log("Dit zijn de Batman films");
                const batman = movies.filter(movie => {
                    return movie.Title.includes("Batman");
                });
                filmsInDom(batman);
                break;
            case "alle":
                console.log("Dit zijn alle films");
                filmsInDom();
                break;
            default:
                console.log("Geen films!");
        }
}))};

handleOnChangeEvent();

/*
verwijder alle films:

const node = filmLijst;
while (node.firstChild) {
    node.removeChild(filmLijst.firstChild);
}
*/