import axios from "axios";

const axiosClient = axios.create({
  baseURL: `http://172.19.0.3:8080/api/v1/`
})




export default axiosClient