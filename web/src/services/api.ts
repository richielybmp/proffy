import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nlw2-proffy-backend.herokuapp.com'
})

export default api;