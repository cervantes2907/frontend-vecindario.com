import axios from 'axios';

export const Api = axios.create({
    baseURL: 'http://34.67.224.76',
    headers: {'Content-Type': 'application/json'}
});
