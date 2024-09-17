import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_URL || '/api/v1/'

const axiosClient = axios.create({
  baseURL
})




export default axiosClient