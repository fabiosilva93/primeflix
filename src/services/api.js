import axios from "axios";

// BASE DA URL: https://api.themoviedb.org/3/
// URL DA API: movie/now_playing?api_key=697dd82d1cb6fc6199a25999e5df9317&language=pt-br

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

export default api;