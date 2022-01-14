import {useState,useEffect} from 'react'
// import ReactDOM from 'react-dom';
// import Button from '@mui/material/Button';
import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import Loggedin from './components/Loggedin'
import Register from './components/Register'
import { getUsers } from './api'

function App() {
  //logins state
  const [logins,setLogins]=useState([])

  //current login
  const [currLogin,setCurrLogin]=useState({})
  
  //login page state
  const [showLogin,setShowLogin]=useState(true)

  //fetch logins
  useEffect(()=>{
    getUsers().then((response)=>setLogins(response.data.users)
    ).catch((error)=>console.error(`Error: ${error}`))  
    },[])
    
   //check if login is registered  
  const verifyLogin = (login)=>{
    let res =logins.find((l)=>l.email===login)
    if(res){
      setShowLogin(false)
      setCurrLogin(res)
    }else{
      alert('Not a registered user')
    }
  }

  return (
    <div >
      <Header title='Netflare'/>
      {/* <Register /> */}
      {showLogin ? <Login verifyLogin={verifyLogin}/>:<Loggedin currLogin ={currLogin} users={logins} setUsers={setLogins}/>}
      <Register setLogins={setLogins} />
    </div>
  );
}

export default App;

