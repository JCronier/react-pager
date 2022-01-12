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
      email:'myron_yung@netflare.dev'
    }
  ])
  const [users,setUsers]=useState([
    {
      id:1,
      email:'johnny@netflare.dev'
    },
    {
      id:2,
      email:'jordan@netflare.dev'
    },
  ])

  //login page
  const [showLogin,setShowLogin]=useState(true)

   //check if user is registered  
  const verifyUser = (user)=>{
    logins.filter((login)=>login<user).length>0? setShowLogin(false):alert('Not a registered user')
  }

  //delete user
  const deleteUser=(id)=>{
    console.log(id)
  }
  return (
    <div className='container'>
      <Header title='Netflare'/>
      {showLogin? <Login verifyUser={verifyUser}/>:<Loggedin users={users} onDelete={deleteUser}/>}
    </div>
  );
}

export default App;