import axios from 'axios';

const api_url = 'https://0gy9ldsaqj.execute-api.us-west-2.amazonaws.com/prod';

const token = "";

const registerEndPoint = '/register';
const usersEndpoint = '/users';
const loginEndPoint = '/login';
const emailEndPoint = '/email';

const headers = {
    'Content-Type': 'application/json',
    'x-api-key': '097ubZybcb9ECVEQUTZ6M8caWPzBZXz7aHdFsqS7'
};

const body = {
    "user": {
        "username": "jcronier",
        "name": "Jordan"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Impjcm9uaWVyIiwiaWF0IjoxNjQxOTM5MzQyLCJleHAiOjE2NDE5NDI5NDJ9.3YW3UWDEwLukcdqk_WijAhB60Nw6QrQaINDm74yOu3Y"
}

/** Don't need authorization */

// register a user 
export const registerUser = (userData) => axios.post(api_url + registerEndPoint, userData);

// login user
export const loginUser = (userData) => axios.post(api_url + loginEndPoint, userData)

// get all users
export const getUsers = () => axios.get(api_url);

// get a user
export const getUser = (id) => axios.get(`${api_url}${usersEndpoint}/${id}`, { headers });

// create user
export const createUser = (data) => axios.post(api_url + usersEndpoint, { headers, data});

// delete a user
export const deleteUser = (id) => axios.delete(`${api_url}${usersEndpoint}/${id}`, { headers });

// send an email
export const sendEmail = (data) => axios.post(api_url + emailEndPoint, { headers, data })
