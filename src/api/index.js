import axios from 'axios';

const api_url = process.env.API_URL;

const token = "";

const registerEndPoint = '/register';
const usersEndpoint = '/users';
const loginEndPoint = '/login';
const emailEndPoint = '/email';

const headers = {
    'Content-Type': 'json',
    'Authorization': token
};

/** Don't need authorization */

// register a user 
export const registerUser = (userData) => axios.post(api_url + registerEndPoint, userData);

// login user
export const loginUser = (userData) => axios.post(api_url + loginEndPoint, userData)

// get all users
export const getUsers = () => axios.get(api_url + usersEndpoint, { headers });

// get a user
export const getUser = (id) => axios.get(`${api_url}${usersEndpoint}/${id}`, { headers });

// create user
export const createUser = (data) => axios.post(api_url + usersEndpoint, { headers, data});

// delete a user
export const deleteUser = (id) => axios.delete(`${api_url}${usersEndpoint}/${id}`, { headers });

// send an email
export const sendEmail = (data) => axios.post(api_url + emailEndPoint, { headers, data })

