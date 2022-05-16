import axios from 'axios'

const apiUrl = process.env.API_URL;

export const getPokemons = (limit) => {
    return axios.get(`${apiUrl}/pokemon?limit=${limit}&offset=0`);
};

export const getPokemon = (url) => {
    return axios.get(`${url}`);
};

export const searchPokemon = (pokemon) => {
    return axios.get(`${apiUrl}/pokemon/${pokemon}`);
};