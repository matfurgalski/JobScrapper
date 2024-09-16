import axios from "axios";

const axiosClient = axios.create({
  baseURL: `http://spring-app:8080/api/v1/`
})




export default axiosClient