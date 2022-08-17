import axios from 'axios';

const $api = axios.create({
    baseURL: 'https://bank.gov.ua',
});

export default $api;
