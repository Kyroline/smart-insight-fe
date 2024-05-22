import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/'
})

axiosInstance.interceptors.request.use(function (config) {
    const token = sessionStorage.getItem('api_key');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {

    return response;
}, function (error) {
    if (error.response.status == 401)
        sessionStorage.removeItem('api_key')
    return Promise.reject(error);
});

export default axiosInstance