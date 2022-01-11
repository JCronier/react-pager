import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import {useState} from 'react'

function App() {
  //add users state
  const [users,setUsers]=useState([])
  //add user 
  const verifyUser = (user)=>{
    console.log(user)
  }
  return (
    <div className='container'>
      <Header title='Netflare'/>
      <Login verify={verifyUser} />
    </div>
  );
}

export default App;