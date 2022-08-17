import axios from 'axios';

const $api = axios.create({
    baseURL: 'https://api.privatbank.ua',
});

export default $api;
