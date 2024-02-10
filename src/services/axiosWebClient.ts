import axios from "axios";

const API_URI = process.env.REACT_APP_API;

const axiosWebClient = axios.create({ baseURL: API_URI });

export default axiosWebClient;
