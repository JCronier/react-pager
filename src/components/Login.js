import { useState } from "react"
import Cookies from "universal-cookie/es6";
import { loginUser } from "../api";
const Login = ({verifyLogin}) => {
    //login input state
    const [text,setText]=useState('')
    const cookies = new Cookies();

    const setCookieAndCurrentUser = ({ name, email, token }) => {
      cookies.set('name', name, { path: '/', maxAge: 86400} );
      cookies.set('email', email, { path: '/', maxAge: 86400} );
      cookies.set('token', token, { path: '/', maxAge: 86400} );
    }

    //enter button event
    const onSubmit=(e)=>{
        e.preventDefault()
        if(!text){
            alert('Provide a username')
            return
        }
        // verifyLogin(text);
        loginUser({ email: text })
            .then(({ data }) => {
                const { name, email } = data.userInfo;
                const { token } = data;
                setCookieAndCurrentUser({ name, email, token });
                verifyLogin({ name, email });
            })
            .catch(() => alert('Invalid username'));
        setText('')
    }
    return (
        <form className='container' onSubmit={onSubmit}>
            <h3>Login</h3>
            <input type='text' value={text} onChange={(e)=>setText(e.target.value)} />
            <input type ='submit' value ='Enter'/>
        </form>
    )
}
 
export default Login
