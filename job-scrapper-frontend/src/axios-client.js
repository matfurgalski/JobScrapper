import axios from "axios";

const axiosClient = axios.create({
  baseURL: `http://192.168.1.10:8080/api/v1/`,
   headers: {
      'Content-Type': 'application/json',
      // Add any additional headers needed
      'Accept-Encoding': 'gzip, deflate',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/png,image/svg+xml,*/*;q=0.8',
      'Connection': 'keep-alive',
    }
})




export default axiosClient