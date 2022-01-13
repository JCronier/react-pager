import { useState } from "react"
const Login = ({verifyLogin}) => {
    //login input state
    const [text,setText]=useState('')

    //enter button event
    const onSubmit=(e)=>{
        e.preventDefault()
        if(!text){
            alert('Provide a username')
            return
        }
        verifyLogin(text)
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
