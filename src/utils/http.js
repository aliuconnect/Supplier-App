import axios from 'axios';

const http = axios.create({
    baseURL:'http://192.168.1.135:9000/v1/auth',
    "Content-Type": "application/json",
});


http.interceptors.response.use(res=>{
    console.log('efdfvdfedfedfef');
    
    return res.data;
})

export default http;