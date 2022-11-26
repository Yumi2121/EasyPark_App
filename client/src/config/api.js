import axios from 'axios';

// Define an API

const easyparkAPI = axios.create({
    // <= This only works locally
    baseURL: 'http://localhost:27017/api'    
    // baseURL: 'http://www.ezcarparkspot.com/api' // <= Need this for deployment
})

easyparkAPI.interceptors.request.use((req) => {
    const token = sessionStorage.getItem("token");
    if (token) {
        req.headers["Authorization"] = `Bearer ${token}`;
    }
    return req;

})

export default easyparkAPI;