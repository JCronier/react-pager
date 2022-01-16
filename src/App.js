import {useState,useEffect} from 'react'
import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import Loggedin from './components/Loggedin'
import Register from './components/Register'
import Home from './components/Home'
import { getUsers } from './api'
import {BrowserRouter as Router,Route,Routes,useNavigate} from "react-router-dom";
import {Button, Grid, Link,Typography} from "@mui/material"

function App() {
  //logins state
  const [logins,setLogins]=useState([])

  //current login
  const [currLogin,setCurrLogin]=useState({})
  
  //login page state
  const [navBar,setNavBar]=useState('login')

  const [showAddUser,setShowAddUser]=useState(false)

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
      setNavBar('loggedin')
      setCurrLogin(res)
      navigate('/loggedin')
    }
  }
  return (
    <div>
      <Typography variant='h2'>Netflare</Typography>
      {navBar==='login' ? <Grid container spacing={1} style={{marginTop: 10, marginBottom: 25}}>
        <Grid item ><Button href="/login" style={{ textDecoration: 'none'}}>login</Button></Grid>
        <Grid item ><Button href="/register" style={{ textDecoration: 'none' }}>register</Button></Grid>
      </Grid>:
      <Grid container spacing={1} style={{marginTop: 10, marginBottom: 25}}>
        <Grid item ><Button  onClick={()=>setShowAddUser(!showAddUser)} style={{ textDecoration: 'none'}}>Add User</Button></Grid>
        <Grid item ><Button href="/login" style={{ textDecoration: 'none'}}>LogOut</Button></Grid>
      </Grid>
      }
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login verifyLogin={verifyLogin}/>}/>
        <Route path="/loggedin" element={<Loggedin currLogin ={currLogin} users={logins} setUsers={setLogins} showAddUser={showAddUser}/>}/>
      </Routes>
    </div>
  );
}


export default App;

