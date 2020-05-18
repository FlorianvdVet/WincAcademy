let favoFilm = {

    titel: "Lord of the Rings Trilogy Extended Edition",
    duration: 684,
    stars: ["Elijah Wood", "Viggo Mortensen", "Sean Bean"]

};

const filmInfo = () => {

    console.log(favoFilm.titel, "duurt in totaal", favoFilm.duration, "minuten. Dit zijn enkele acteurs:", favoFilm.stars.join(', '));

}

filmInfo();