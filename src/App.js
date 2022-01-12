import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import React, { useState, useEffect } from 'react';

// api calls
import * as api from './api';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      api.getUsers().then(({ data }) => setUsers(data.Items)).catch(e => console.log(e));
  }, []);

  return (
    <div className='container'>
      <ul>
        {users.map(user => <li>{user.name}</li>)}
      </ul>
      <Header title='Netflare'/>
      <Login/>
    </div>
  );
}

export default App;

