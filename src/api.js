import axios from 'axios'

const baseUrl = import.meta.env.VITE_BASEURL;
const apiKey = import.meta.env.VITE_APIKEY;

export const getMovieList = async () => {
    const movie = await axios.get(
        `${baseUrl}/movie/popular?api_key=${apiKey}`
    );

    return movie.data.results;
}

export const searchMovie = async (e) => {
    const search = await axios.get(e);

    return;
}