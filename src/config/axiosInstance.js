import axios from "axios";
import { BASEURL } from "../Constants/baseUrl";

const AxiosInstance =axios.create({

    baseURL: BASEURL
})

AxiosInstance.interceptors.request.use(function(config){
    const token = localStorage.getItem('autherisation')
    config.headers['Authorization']='Bearer '+ token
    config.headers['Access-controle-Allow-Orgin']='*'
    return config
})

export default AxiosInstance;