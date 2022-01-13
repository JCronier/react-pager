import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import Loggedin from './components/Loggedin'
import {useState,useEffect} from 'react'
function App() {
  //all logins state
  const [logins,setLogins]=useState([])

  //all users state
  const [users,setUsers]=useState([])

  //current login
  const [currLogin,setCurrLogin]=useState({})
  
  //login page state
  const [showLogin,setShowLogin]=useState(true)

  //fetch logins
  useEffect(()=>{
    const getLogins =async()=>{
      const res =await fetch('http://localhost:5005/logins')
      const data = await res.json()
      setLogins(data)
    }
      getLogins()
    },[])
    
    //fetch users
    useEffect(()=>{
      const getUsers =async()=>{
        const res =await fetch('http://localhost:5005/users')
        const data = await res.json()
        setUsers(data)
      }
        getUsers()
      },[])

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
    <div className='container'>
      {/* <ul>
        {users.map(user => <li>{user.name}</li>)}
      </ul> */}
      <Header title='Netflare'/>
      {showLogin ? <Login verifyLogin={verifyLogin}/>:<Loggedin currLogin ={currLogin} users={users} setUsers={setUsers}/>}
    </div>
  );
}

export default App;

