import axios from "axios"
export function request(config) {
    const instance = axios.create({
        baseURL: "http://152.136.185.210:7878/api/hy66",
        //https://api.apiopen.top/getJoke?page=1&count=2&type=video
        timeout: "2000"
    })
    return instance(config)
}





