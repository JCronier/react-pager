import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import {useState,useEffect} from 'react'

function App() {
  //logins state
  const [logins,setLogins]=useState(['myron_yung@netflare.dev'])

  //login page
  const [showLogin,setShowLogin]=useState(true)

   //check if user is registered  
  const verifyUser = (user)=>{
    //logins.filter((login)=>login<user).length>0? setShowLogin(false):alert('Not a registered user')
    logins.includes(user)? setShowLogin(false):alert('Not a registered user')

  }

  return (
    <div className='container'>
      <Header title='Netflare'/>
      {showLogin && <Login verifyUser={verifyUser}/>}
    </div>
  );
}

export default App;