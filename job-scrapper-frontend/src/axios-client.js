import axios from "axios";

const baseURL = '/api/v1/'

const axiosClient = axios.create({
  baseURL
})




export default axiosClient