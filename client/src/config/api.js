import axios from 'axios';

// Define an API

const easyparkAPI = axios.create({
    // <= This only works locally
    baseURL: 'http://localhost:27017/api/'    
    // baseURL: 'http://www.ezcarparkspot.com/api' // <= Need this for deployment
})

easyparkAPI.interceptors.request.use((req) => {
    const token = JSON.parse(sessionStorage.getItem('userLogin'))?.data?.token;
    // console.log('token is', token); //test to see if token is logged
    if (token) {
        req.headers["Authorization"] = `Bearer ${token}`;
    }
    return req;

})

easyparkAPI.interceptors.request.use((res) => {
    const token = res?.data?.token ?? '';
    if (token) {
        sessionStorage.setItem('token', token)
    }
    return res;
})

export default easyparkAPI;