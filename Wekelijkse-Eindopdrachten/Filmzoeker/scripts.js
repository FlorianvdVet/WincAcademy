const knoppen = document.getElementsByName("film-selector");
const knopList = Array.from(knoppen);

const filmLijst = document.getElementById("film-list");


const filmsInDom = () => {
    movies.forEach(film => {
    const newItem = document.createElement("li");
    const newLink = document.createElement("a");
    const newPoster = document.createElement("img");
    newLink.href = "http://www.imdb.com/title/" + film.imdbID;
    newPoster.src = film.Poster;
    filmLijst.appendChild(newItem).append(newLink);
    newLink.append(newPoster);
})};

filmsInDom();

knopList.forEach(x => x.addEventListener("change", () => {
        (console.log(event.target));
        const node = filmLijst
        switch (event.target.value) {
            case "nieuwste":
                console.log("Dit zijn de nieuwste films");
                while (node.firstChild) {
                node.removeChild(filmLijst.firstChild);
                }
                const nieuwsteFilter = movies.filter((movie) => {
                    return movie.Year >= 2014;
                });        

                const nieuwsteInDom = () => {
                    nieuwsteFilter.forEach(film => {
                    const newItem = document.createElement("li");
                    const newLink = document.createElement("a");
                    const newPoster = document.createElement("img");
                    newLink.href = "http://www.imdb.com/title/" + film.imdbID;
                    newPoster.src = film.Poster;
                    filmLijst.appendChild(newItem).append(newLink);
                    newLink.append(newPoster);
                })};
                nieuwsteInDom();
                break;

            case "avengers":
                console.log("Dit zijn de Avengers films");
                while (node.firstChild) {
                node.removeChild(filmLijst.firstChild);
                }
                const avengersFilter = movies.filter((movie) => {
                    return movie.Title.includes("Avengers");
                });           
                
                const avengersInDom = () => {
                    avengersFilter.forEach(film => {
                    const newItem = document.createElement("li");
                    const newLink = document.createElement("a");
                    const newPoster = document.createElement("img");
                    newLink.href = "http://www.imdb.com/title/" + film.imdbID;
                    newPoster.src = film.Poster;
                    filmLijst.appendChild(newItem).append(newLink);
                    newLink.append(newPoster);
                })};
                avengersInDom();
                break;

            case "x-men":
                console.log("Dit zijn de X-Men films");
                while (node.firstChild) {
                node.removeChild(filmLijst.firstChild);
                }

                const xMenFilter = movies.filter((movie) => {
                    return movie.Title.includes("X-Men");
                });        

                const xMenInDom = () => {
                    xMenFilter.forEach(film => {
                    const newItem = document.createElement("li");
                    const newLink = document.createElement("a");
                    const newPoster = document.createElement("img");
                    newLink.href = "http://www.imdb.com/title/" + film.imdbID;
                    newPoster.src = film.Poster;
                    filmLijst.appendChild(newItem).append(newLink);
                    newLink.append(newPoster);
                })};
                xMenInDom();
                break;

            case "princess":
                console.log("Dit zijn de Princess films");
                while (node.firstChild) {
                node.removeChild(filmLijst.firstChild);
                }
                const princessFilter = movies.filter((movie) => {
                    return movie.Title.includes("Princess");
                });        

                const princessInDom = () => {
                    princessFilter.forEach(film => {
                    const newItem = document.createElement("li");
                    const newLink = document.createElement("a");
                    const newPoster = document.createElement("img");
                    newLink.href = "http://www.imdb.com/title/" + film.imdbID;
                    newPoster.src = film.Poster;
                    filmLijst.appendChild(newItem).append(newLink);
                    newLink.append(newPoster);
                })};
                princessInDom();
                break;

            case "batman":
                console.log("Dit zijn de Batman films");
                while (node.firstChild) {
                node.removeChild(filmLijst.firstChild);
                }
                const batmanFilter = movies.filter((movie) => {
                    return movie.Title.includes("Batman");
                });        

                const batmanInDom = () => {
                    batmanFilter.forEach(film => {
                    const newItem = document.createElement("li");
                    const newLink = document.createElement("a");
                    const newPoster = document.createElement("img");
                    newLink.href = "http://www.imdb.com/title/" + film.imdbID;
                    newPoster.src = film.Poster;
                    filmLijst.appendChild(newItem).append(newLink);
                    newLink.append(newPoster);
                })};
                batmanInDom();
                break;

            case "alle":
                console.log("Dit zijn alle films");
                while (node.firstChild) {
                node.removeChild(filmLijst.firstChild);
                }
                filmsInDom();
                break;
                
            default:
                console.log("Geen films!");
        }
}));