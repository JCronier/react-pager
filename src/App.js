import {useState,useEffect} from 'react'

import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import Loggedin from './components/Loggedin'
import Register from './components/Register'

function App() {
  //logins state
  const [logins,setLogins]=useState([
    {
      id:1,
      email:'jcronier777@gmail.com',
      users:['johnny@netflare.dev','jordan@netflare.dev']
    },
    {
      id:2,
      email:'test@netflare.dev',
      users:['test2@netflare.dev','test3@netflare.dev']
    }
  ])

  //current login
  const [currLogin,setCurrLogin]=useState({})
  
  //login page state
  const [showLogin,setShowLogin]=useState(true)

  useEffect(()=>{
    const getLogins =async()=>{
      const loginsFromServer= await fetchLogins()
      setLogins(loginsFromServer)
      
    }
      getLogins()
    },[])

    //fetch logins
    const fetchLogins =async()=>{
      const res =await fetch('http://localhost:5005/logins')
      const data = await res.json()
      return data
    }

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

  return (
    <div className='container'>
      {/* <ul>
        {users.map(user => <li>{user.name}</li>)}
      </ul> */}
      <Header title='Netflare'/>
      <Register />
      {showLogin ? <Login verifyUser={verifyUser}/>:<Loggedin currLogin={currLogin} setCurrLogin={setCurrLogin} logins={logins} setLogins={setLogins}/>}
    </div>
  );
}

export default App;

