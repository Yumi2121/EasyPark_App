import axios from 'axios';

// Define an API

const easyparkAPI = axios.create({
    // baseURL: 'https://fateen-api-production.up.railway.app'
    baseURL: 'http://localhost:27017/api'
})

easyparkAPI.interceptors.request.use((req) => {
    const token = sessionStorage.getItem("token");
    if (token) {
        req.headers["Authorization"] = `Bearer ${token}`;
    }
    return req;
})

easyparkAPI.interceptors.response.use((res) => {
    const token = res.data.token
    if(token) {
        sessionStorage.setItem('token', token)
    }
    return res;
})

export default easyparkAPI;