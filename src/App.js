import {useState,useEffect} from 'react'
import './App.css'
import Login from './components/Login'
import Loggedin from './components/Loggedin'
import Register from './components/Register'
import Home from './components/Home'
import { getUsers } from './api'
import {Route,Routes,useNavigate,useLocation} from "react-router-dom";
import {Button, Grid, Typography,Alert} from "@mui/material"

function App() {
  //logins state
  const [logins,setLogins]=useState([])
  //current login
  const [currLogin,setCurrLogin]=useState({})
  //show Add user button
  const [showAddUser,setShowAddUser]=useState(false)
  //show Remove user button
  const [showRemoveUser,setShowRemoveUser]=useState(false)
  //show alert messages
  const [pageChange,setPageChange]=useState(false)
  const [alertUsername,setAlertUsername]=useState(false)
  const [alertUnvalid,setAlertUnvalid]=useState(false)
  const [alertName,setAlertName]=useState(false)
  const [alertRegistered,setAlertRegistered]=useState(false)
  const [alertRegisterFail,setAlertRegisterFail]=useState(false)

  //fetch logins
  useEffect(()=>{
    getUsers().then((response)=>setLogins(response.data.users)
    ).catch((error)=>console.error(`Error: ${error}`))  
    },[])

  //alert cleanup
  useEffect(()=>{
    setAlertUsername(false)
    setAlertUnvalid(false)
    setAlertName(false)
    setAlertRegistered(false)
    setAlertRegisterFail(false)
  },[pageChange])

  const navigate = useNavigate()
   //check if login is registered  
  const verifyLogin = (login)=>{
    let res =logins.find((l)=>l.email===login)
    if(res){
      setCurrLogin(res)
      navigate('/loggedin')
      setPageChange(!pageChange)
    }
  }
  const location =useLocation()
    return (
    <div >
      <Grid container direction='row' alignItems='end' >
        <Grid item xs={10}>
          <Typography variant='h2'>Netflare</Typography>
        </Grid>
        <Grid item >
          {currLogin.name==='undefined'&&<Typography variant='h4'>Hi {currLogin.name}</Typography>}
        </Grid>
      </Grid>
      
      {alertUsername&&<Alert severity='error'>Provide a email</Alert>}
      {alertUnvalid&&<Alert severity='error'>Not a valid email</Alert>}
      {alertName&&<Alert severity='error'>Provide a name</Alert>}
      {alertRegistered&&<Alert severity='success'>Registration Successful</Alert>}
      {alertRegisterFail&&<Alert severity='error'>Registration Failed</Alert>}

      {location.pathname!=='/loggedin' ? <Grid container spacing={1} style={{marginTop: 10, marginBottom: 25}}>
        <Grid item ><Button href="/login" onClick={()=>setPageChange(!pageChange)} style={{ textDecoration: 'none'}}>login</Button></Grid>
        <Grid item ><Button href="/register" onClick={()=>setPageChange(!pageChange)} style={{ textDecoration: 'none' }}>register</Button></Grid>
      </Grid>:
      <Grid container spacing={1} style={{marginTop: 10, marginBottom: 25}}>
        <Grid item ><Button  onClick={()=>{setShowAddUser(!showAddUser); setPageChange(!pageChange)}} style={{ textDecoration: 'none'}}>Add User</Button></Grid>
        <Grid item ><Button  onClick={()=>{setShowRemoveUser(!showRemoveUser);setPageChange(!pageChange)}} style={{ textDecoration: 'none'}}>Remove User</Button></Grid>
        <Grid item ><Button href="/login" onClick={()=>setPageChange(!pageChange)} style={{ textDecoration: 'none'}}>LogOut</Button></Grid>
      </Grid>
      }
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/register" element={<Register setLogins={setLogins} setAlertUsername={setAlertUsername} setAlertName={setAlertName} setAlertRegistered={setAlertRegistered} setAlertRegisterFail={setAlertRegisterFail}/>}/>
        <Route path="/login" element={<Login verifyLogin={verifyLogin} setAlertUsername={setAlertUsername} setAlertUnvalid={setAlertUnvalid}/>}/>
        <Route path="/loggedin" element={<Loggedin currLogin ={currLogin} users={logins} setUsers={setLogins} showAddUser={showAddUser} showRemoveUser={showRemoveUser} setAlertUsername={setAlertUsername} setAlertName={setAlertName}/>}/>
      </Routes>
    </div>
  );
}


export default App;

