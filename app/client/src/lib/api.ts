import axios from 'axios';

const getBaseURL = () => {
    const ip = localStorage.getItem('serverIP')
    return ip ? `http://${ip}:8000` : import.meta.env.VITE_API_URL
}
export const api = axios.create({
    baseURL: getBaseURL()
})