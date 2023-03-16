import axios from 'axios';
// config
import { HOST_API_KEY } from '../config-global';

// ----------------------------------------------------------------------

const axiosInstance = axios.create(
  { 
    baseURL: HOST_API_KEY,
    timeout: 20000
  }
);

// request interceptor

axiosInstance.interceptors.request.use(
  config => {
    // Do something before request is sent

    config.headers["Authorization"] = "bearer " + getToken();

    config.headers["Access-Control-Allow-Origin"] = "*";
    config.headers["Access-Control-Allow-Methods"] = "GET,PUT,POST,DELETE,PATCH,OPTIONS";
    config.headers["Access-Control-Allow-Headers"] = "Origin, X-Requested-With, Content-Type, Accept, Authorization";


    return config;
  },
  error => {
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

//get token
function getToken() {
  //return localStorage.getItem('token');
  return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eVByb3ZpZGVyIjoiQW5vbnltb3VzIiwicGFydG5lclBsYXllcklkIjoiTDNIR0dHIiwicGxheWxpbmtQbGF5ZXJJZCI6IkwzSEdHRyIsInN1cHBvcnRDb2RlIjoiTDNIR0dHIiwicGFydG5lckFwcGxpY2F0aW9uSWQiOiJQbGF5bGlua18zY2QzYzM5OS0zNTMxLTQwYzYtYTcwZS04NGI0Njk2N2M3NWYiLCJuZXh1c0FwcGxpY2F0aW9uSWQiOiIxMDkiLCJwbGF5bGlua1Nlc3Npb25JZCI6IjExM2Y3NzFjLWMyYjktNDk0Yi04ZjA2LWZiZjFhMjRmOWJlZSIsInRheS10ZW5hbnQtaWQiOiIwMDAxIiwiaWF0IjoiMTY3ODgxMDI2MyJ9.3oqwQWvUtHpmid7PL_s4CbdkeoZ21NwuRTnrqml0NsI';
}

export default axiosInstance;
