import axios from "axios";

const axiosClient = axios.create({
  baseURL: `http://192.168.1.10:8080/api/v1/`,
   headers: {
      'Content-Type': 'application/json',
      // Add any additional headers needed
    }
})




export default axiosClient