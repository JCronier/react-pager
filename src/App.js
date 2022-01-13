import {useState,useEffect} from 'react'

import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import Loggedin from './components/Loggedin'
import Register from './components/Register'
import { getUsers } from './api';
import Cookies from 'universal-cookie/es6';

function App() {
  //logins state
  const [logins,setLogins]=useState([])

  //current login
  const [currLogin,setCurrLogin]=useState({})
  
  //login page state
  const [showLogin,setShowLogin]=useState(true)

  // set cookies
  const cookies = new Cookies();



  //fetch logins
  useEffect(()=>{
    const test = ()=>{
      getUsers().then((response)=>setLogins(response.data.users)
      ).catch((error)=>console.error(`Error: ${error}`))
    }
    test()
    },[])

    useEffect(() => {
      if (cookies.get('token')) {
        setCurrLogin({name: cookies.get('name'), email: cookies.get('email')});
        setShowLogin(false);
      }
    }, []);
    
   //check if login is registered  
  const verifyLogin = (login)=>{
    // let res =logins.find((l)=>l.email===login)
      setShowLogin(false)
      setCurrLogin(login)
  }

  return (
    <div >
      {/* <ul>
        {users.map(user => <li>{user.name}</li>)}
      </ul> */}
      <Header title='Netflare'/>
      {/* <Register /> */}
      {showLogin ? <Login  verifyLogin={verifyLogin}/>:<Loggedin setShowLogin={setShowLogin} currLogin ={currLogin} users={logins} setUsers={setLogins}/>}
    </div>
  );
}

export default App;

