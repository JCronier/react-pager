import { useState, useContext } from "react"
import { UserContext } from "../context/UserContext";
import { loginUser } from "../api";
const Login = ({verifyUser}) => {
    const { state, dispatch } = useContext(UserContext);
    //login input state
    const [text,setText]=useState('')
    
    //enter button event
    const onSubmit=(e)=>{
        e.preventDefault()
        if(!text){
            alert('Provide a username')
            return
        }

        loginUser({email: text, name: 'Jordan'})
            .then(data => {
                dispatch({type: 'SET_CURRENT_USER', value: {email:text, name: 'Jordan'}});
            })
        // verifyUser(text)
        setText('')
    }
    return (
        <form onSubmit={onSubmit}>
            <h3>Login</h3>
            <input type='text' value={text} onChange={(e)=>setText(e.target.value)} />
            <input type ='submit' value ='Enter'/>
        </form>
    )
}
 
export default Login
