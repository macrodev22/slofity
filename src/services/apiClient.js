import axios from "axios";

const BASE_URL = 'http://localhost:8080'

const client = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
})

export default client