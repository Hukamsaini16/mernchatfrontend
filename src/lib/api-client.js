import { HOST } from "@/utils/constants.js"
import axios from "axios"


export const apiClient = axios.create({
    baseURL: "https://mernchatappbackend-mxfy.onrender.com",
    withCredentials: true,
});

