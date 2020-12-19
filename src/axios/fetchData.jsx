import axios from 'axios'

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export default async function getRequest(url, params){
    const response = await axiosInstance.get(url, {...params});
    return response;
}