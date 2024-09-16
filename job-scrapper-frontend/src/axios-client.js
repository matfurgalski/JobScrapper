import axios from "axios";

const axiosClient = axios.create({
  baseURL: `http://host.docker.internal:8080/api/v1/`
})




export default axiosClient