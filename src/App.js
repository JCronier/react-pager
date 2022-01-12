import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import {useState,useEffect} from 'react'
import Loggedin from './components/Loggedin'

function App() {
  //logins state
  const [logins,setLogins]=useState([
    {
      id:1,
      email:'myron_yung@netflare.dev'
    }
  ])

  //login page
  const [showLogin,setShowLogin]=useState(true)

   //check if user is registered  
  const verifyUser = (user)=>{
    logins.filter((login)=>login<user).length>0? setShowLogin(false):alert('Not a registered user')
  }

  return (
    <div className='container'>
      <Header title='Netflare'/>
      {showLogin? <Login verifyUser={verifyUser}/>:<Loggedin/>}
    </div>
  );
}

export default App;