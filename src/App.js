import {useState,useEffect} from 'react'
import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import Loggedin from './components/Loggedin'
import Register from './components/Register'
import Home from './components/Home'
import { getUsers } from './api'
import {BrowserRouter as Router,Route,Routes,useNavigate} from "react-router-dom";
import {Grid, Link,Typography} from "@mui/material"

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
    
  let navigate = useNavigate()
   //check if login is registered  
  const verifyLogin = (login)=>{
    let res =logins.find((l)=>l.email===login)
    if(res){
      setShowLogin(false)
      setCurrLogin(res)
      navigate('/loggedin')
    }else{
      alert('Not a registered user')
    }
  }
  return (
    <div style={{transform: `translate(40%,20%)`}}>
      <Header title='Netflare'/>
      {showLogin ? <Grid container spacing={1} style={{marginTop: 10, marginBottom: 25}}>
        <Grid item sm={1} ><Link href="/login" style={{ textDecoration: 'none'}}>login</Link></Grid>
        <Grid item sm={1} ><Link href="/register" style={{ textDecoration: 'none' }}>register</Link></Grid>
      </Grid>:
      <Grid container spacing={1} style={{marginTop: 10, marginBottom: 25}}>
        <Grid item sm={1} ><Link href="/login" style={{ textDecoration: 'none'}}>LogOut</Link></Grid>
      </Grid>
      }
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login verifyLogin={verifyLogin}/>}/>
        <Route path="/loggedin" element={<Loggedin currLogin ={currLogin} users={logins} setUsers={setLogins}/>}/>
      </Routes>
    </div>
  );
}


export default App;

