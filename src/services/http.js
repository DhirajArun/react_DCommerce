import axios from "axios"

axios.defaults.baseURL = "http://localhost:3100/api"

axios.interceptors.response.use(null, (error)=>{
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    
    if(!expectedError) return console.log("unexpected error occured");

    return Promise.reject(error)
})

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}