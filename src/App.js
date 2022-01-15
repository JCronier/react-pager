import {useState,useEffect} from 'react'
import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import Loggedin from './components/Loggedin'
import { getUsers } from './api'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

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
    <Router>
      <div>
        <Header title='Netflare'/>
        <nav>
          <ul className ="nav-area">
            <li><a href="/">login</a></li>
            <li><a href="/register">register</a></li>
          </ul>
        </nav> 

        <Routes>
          <Route path="/register" element={<Register />}/>
          <Route path="/" element={showLogin ? <Login verifyLogin={verifyLogin}/>:<Loggedin currLogin ={currLogin} users={logins} setUsers={setLogins}/>}/>
        </Routes>
      </div>
    </Router>
  );
}


export default App;

