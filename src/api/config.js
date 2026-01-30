import axios from "axios";
import { hideLoading, showLoading } from "../component/Loading/redux/loadingSlice";
import { store } from '../main';
export const CYBER_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJBSSBPZmZpY2UgMTEiLCJIZXRIYW5TdHJpbmciOiIxNC8wNS8yMDI2IiwiSGV0SGFuVGltZSI6IjE3Nzg3MTY4MDAwMDAiLCJuYmYiOjE3NjQwOTM2MDAsImV4cCI6MTc3ODg2ODAwMH0.YEZVs6ZqIqm0bsnZATZbj-N6xum1AIEZY7FWC5Zp7gY";
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
