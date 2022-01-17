import {useState,useEffect} from 'react'
import './App.css'
import Login from './components/Login'
import Loggedin from './components/Loggedin'
import Register from './components/Register'
import Home from './components/Home'
import { getUsers } from './api'
import {Route,Routes,useNavigate,useLocation} from "react-router-dom";
import {Button, Typography,Alert} from "@mui/material"
import { Box } from '@mui/system'

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
      <Box display='flex' flexDirection='row' alignItems='flex-end' >
        <Box marginLeft={2} flexGrow='1'><Typography variant='h2'>Netflare</Typography></Box>
        <Box marginRight={2}><Typography variant='h4'>Hi {currLogin.name}</Typography></Box>
      </Box>

      {alertUsername&&<Alert severity='error'>Provide a email</Alert>}
      {alertUnvalid&&<Alert severity='error'>Not a valid email</Alert>}
      {alertName&&<Alert severity='error'>Provide a name</Alert>}
      {alertRegistered&&<Alert severity='success'>Registration Successful</Alert>}

      {location.pathname!=='/loggedin' ? 
      <Box display='flex' flexDirection='row' margin={2}>
        <Box ><Button href="/login" onClick={()=>setPageChange(!pageChange)} style={{ textDecoration: 'none'}}>login</Button></Box>
        <Box ><Button href="/register" onClick={()=>setPageChange(!pageChange)} style={{ textDecoration: 'none' }}>register</Button></Box>
      </Box>:
      <Box display='flex' flexDirection='row' margin={2}>
        <Box ><Button  onClick={()=>{setShowAddUser(!showAddUser); setPageChange(!pageChange)}} style={{ textDecoration: 'none'}}>Add User</Button></Box>
        <Box ><Button  onClick={()=>{setShowRemoveUser(!showRemoveUser);setPageChange(!pageChange)}} style={{ textDecoration: 'none'}}>Remove User</Button></Box>
        <Box ><Button href="/login" onClick={()=>setPageChange(!pageChange)} style={{ textDecoration: 'none'}}>LogOut</Button></Box>
      </Box>
      }
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/register" element={<Register setLogins={setLogins} setAlertUsername={setAlertUsername} setAlertName={setAlertName} setAlertRegistered={setAlertRegistered}/>}/>
        <Route path="/login" element={<Login verifyLogin={verifyLogin} setAlertUsername={setAlertUsername} setAlertUnvalid={setAlertUnvalid}/>}/>
        <Route path="/loggedin" element={<Loggedin currLogin ={currLogin} users={logins} setUsers={setLogins} showAddUser={showAddUser} showRemoveUser={showRemoveUser} setAlertUsername={setAlertUsername} setAlertName={setAlertName}/>}/>
      </Routes>
    </div>
  );
}


export default App;

