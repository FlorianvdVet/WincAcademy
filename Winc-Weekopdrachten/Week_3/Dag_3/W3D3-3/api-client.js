const API_KEY = "7b4a3953b23b9fd76e1b8dce1cadc159";

const getData = async () => {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
    try {
        const response = await fetch(apiUrl, {method: "GET"});
       // console.log(res);
        const responseTwee = await response.json();
        // console.log(response);
        return responseTwee;
}   catch (error) {
    console.log(error);
}
};

// getData();