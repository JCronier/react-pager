import { useState } from "react"
import { loginUser } from "../api"
import Register from "./Register"
const Login = ({verifyLogin, setLogins}) => {
    //login input state
    const [text,setText]=useState('')

    //enter button event
    const onSubmit=(e)=>{
        e.preventDefault()
        if(!text){
            alert('Provide a username')
            return
        }
        loginUser({ email: text })
            .then((res) => verifyLogin(text))
            .catch(() => alert("Yall done ****** up"));

        setText('');
    }
    return (
        <>
        <form className='container' onSubmit={onSubmit}>
            <h3>Login</h3>
            <input type='text' value={text} onChange={(e)=>setText(e.target.value)} />
            <input type ='submit' value ='Enter'/>
        </form>
        <Register setLogins={setLogins} />
        </>
    )
}
 
export default Login
