import http from '../utils/http';
import axios from 'axios';
import {ApiHelper} from "../helpers/api-helper"

// const URL = "http://192.168.1.135:9000/v1/auth";

// export const fetchApi = async({email , password}) =>{
//     console.log(`Email: ${email} , Password: ${password}`);
//         const data ={
//             email,
//             password
//         }
//         const response = await fetch(
//             URL,
//             {
//                 headers:{
//                     'Content-Type':'application/json'
//                 },
//                 method:'POST',
//                 body:JSON.stringify(data)
//             }
//         )
//         return response.json();
// }

export const getLoginApi =  async (credentials) =>{
  // Method 1 
  // const res = await axios({
  //   method: 'post',
  //   url: `http://192.168.1.135:9000/v1/auth`,
  //   data: JSON.stringify(credentials) ,
  //   headers:{'Content-Type':'application/x-www-form-urlencoded'}
  // });
  // console.log(res , 'Resss');
  //   return res;
  
  // Method 2  
  
  //  axios.post(`http://192.168.1.135:9000/v1/auth`,credentials,{
  //     "headers": {
  //       'Content-Type': 'application/json',
  //     }
  // }).then((response) => {
  //    console.log("reactNativeDemo:"+response.data);
  // })
  // .catch((error) => {
  //    console.log("axios error:",error);
  // });

  // Method 3
  const requestObject = {
    email: credentials.Email,
    password: credentials.Passowrd
  }
  console.log(credentials, ' Credentials');
  //  const response = new ApiHelper().FetchFromPortal("auth", "POST", false, undefined, credentials)
  const response = await http.post("http://192.168.1.135:9000/v1/auth", requestObject)
  console.log(response, 'working');
  return response;
  
}