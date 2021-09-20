import axios from 'axios';

const api = axios.create({
    baseURL: 'https://finalspaceapi.com/api/v0'
});


export default api;