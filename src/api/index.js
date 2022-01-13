import axios from 'axios';

const api_url = 'https://ofwrz4w174.execute-api.us-west-2.amazonaws.com/backend';

const token = "";

const registerEndPoint = '/register';
const usersEndpoint = '/users';
const userEndpoint = '/users/user';
const loginEndPoint = '/login';
const emailEndPoint = '/email';

const headers = {
    'Content-Type': 'application/json',
    'x-api-key': 'to4IMVwNqz3Btx3jOH9NLz289adm9xK9OwNgKb41'
};

const body = {
    "user": {
        "username": "jcronier",
        "name": "Jordan"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Impjcm9uaWVyIiwiaWF0IjoxNjQxOTM5MzQyLCJleHAiOjE2NDE5NDI5NDJ9.3YW3UWDEwLukcdqk_WijAhB60Nw6QrQaINDm74yOu3Y"
}

/** Don't need authorization */

//getUsers function
// const getLogins =()=>{
//     getUsers().then((response)=>{
//       const res = response.data
//       //setLogins(res)
//       console.log(res)
//     }).catch((error)=>console.error(`Error: ${error}`))
//   }
//     getLogins()
//   }
// register a user 
export const registerUser = (userData) => axios.post(api_url + registerEndPoint, userData);

// login user
export const loginUser = (userData) => axios.post(api_url + loginEndPoint, userData)

// get all users
export const getUsers = () => axios.get(api_url + usersEndpoint);

// get a user
export const getUser = (email) => axios.get(`${api_url}${userEndpoint}?email=${email}`, { headers });

// delete a user
export const deleteUser = (email) => axios.delete(`${api_url}${usersEndpoint}?email=${email}`, { headers });

// send an email
export const sendEmail = (data) => axios.post(api_url + emailEndPoint, { headers, data })