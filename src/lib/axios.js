import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/',
    headers: {
        Authorization: `Bearer ${sessionStorage.getItem('api_key')}`
    }
})

axiosInstance.interceptors.response.use(function (response) {

    return response;
}, function (error) {
    if (error.response.status == 401)
        sessionStorage.removeItem('api_key')
    return Promise.reject(error);
});

export default axiosInstance