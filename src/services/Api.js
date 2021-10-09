import axios from 'axios';

export const Api = axios.create({
    baseURL: 'https://api-vecindario-challenge-eb263m5bka-uc.a.run.app',
    headers: {'Content-Type': 'application/json'}
});
