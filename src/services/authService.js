import http from "../services/http";
import {emailRegex} from '../utils/regexs'

const apiURL = "/auth"

function login({username, password}){
    const isEmail = emailRegex.test(username);
    const data = isEmail ? {email: username, password} : {phone: username, password}
    return http.post(apiURL, data )
}

export default {
    login
}