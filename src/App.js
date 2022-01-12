import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import Loggedin from './components/Loggedin'
import {useState,useEffect} from 'react'
function App() {
  //logins state
  const [logins,setLogins]=useState([
    {
      id:1,
      email:'myron_yung@netflare.dev',
      users:['johnny@netflare.dev','jordan@netflare.dev']
    }
  ])

  //current login
  const [currLogin,setCurrLogin]=useState({})
  
  //login page
  const [showLogin,setShowLogin]=useState(true)

   //check if user is registered  
  const verifyUser = (user)=>{
    let res =logins.find((login)=>login.email===user)
    if(res){
      setShowLogin(false)
      setCurrLogin(res)
    }else{
      alert('Not a registered user')
    }
  }

  //delete user
  const deleteUser=(user)=>{
    console.log(user)
  }
  return (
    <div className='container'>
      <Header title='Netflare'/>
      {showLogin? <Login verifyUser={verifyUser}/>:<Loggedin login={currLogin} onDelete={deleteUser}/>}
    </div>
  );
}

export default App;