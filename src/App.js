import {useState,useEffect} from 'react'

import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import Loggedin from './components/Loggedin'
import Register from './components/Register'
import { getUsers } from './api'

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

  //all users state
  const [users,setUsers]=useState([])

  //current login
  const [currLogin,setCurrLogin]=useState({})
  
  //login page state
  const [showLogin,setShowLogin]=useState(true)

  //fetch logins
  useEffect(()=>{
    const getLogins =()=>{
      getUsers().then((response)=>{
        const res = response.data
        //setLogins(res)
        console.log(res)
      }).catch((error)=>console.error(`Error: ${error}`))
    }
      getLogins()
    },[])
    
    // //fetch users
    // useEffect(()=>{
    //   const getUsers =async()=>{
    //     const res =await fetch('http://localhost:5005/users')
    //     const data = await res.json()
    //     setUsers(data)
    //   }
    //     getUsers()
    //   },[])

   //check if login is registered  
  const verifyLogin = (login)=>{
    let res =logins.find((l)=>l.email===login)
    if(res){
      setShowLogin(false)
      setCurrLogin(res)
      console.log(res)
    }else{
      alert('Not a registered user')
    }
  }

  return (
    <div >
      {/* <ul>
        {users.map(user => <li>{user.name}</li>)}
      </ul> */}
      <Header title='Netflare'/>
      <Register />
      {showLogin ? <Login  verifyLogin={verifyLogin}/>:<Loggedin currLogin ={currLogin} users={users} setUsers={setUsers}/>}
    </div>
  );
}

export default App;

