import axios from "axios";
import { hideLoading, showLoading } from "../component/Loading/redux/loadingSlice";
import { store } from '../main';
export const CYBER_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3OSIsIkhldEhhblN0cmluZyI6IjAzLzA5LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc1Njg1NzYwMDAwMCIsIm5iZiI6MTcyOTcwMjgwMCwiZXhwIjoxNzU3MDA1MjAwfQ.nPo29RkxTkE_C16RhJnxw90M3v3cu3Ur91a47F5epxA";
const accessToken = localStorage.getItem("accessToken");
export const https = axios.create({
    baseURL: "https://movienew.cybersoft.edu.vn",
    headers: {
        "Content-Type": "application/json",
        TokenCybersoft: CYBER_TOKEN,
        Authorization: `Bearer ${accessToken}`
    }
})
// axios interceptor
// Add a request interceptor
https.interceptors.request.use(function (config) {
    console.log("Api đi");
    store.dispatch(showLoading())
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
https.interceptors.response.use(function (response) {
    setTimeout(() => {
        store.dispatch(hideLoading());
    }, 2000)
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    store.dispatch(hideLoading());
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});
