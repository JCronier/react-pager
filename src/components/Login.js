import { useState } from "react"
const Login = ({verifyUser}) => {
    //username input state
    const [text,setText]=useState('')
    //enter button event
    const onSubmit=(e)=>{
        e.preventDefault()
        if(!text){
            alert('Provide a username')
            return
        }
        verifyUser(text)
        setText('')
    }
    return (
<<<<<<< HEAD
        <form onSubmit={onSubmit}>
            <h3>Login</h3>
            <input type='text' value={text} onChange={(e)=>setText(e.target.value)} />
            <input type ='submit' value ='Enter'/>
        </form>
=======
        <div>
            <input type='text'/>
            <Button>Submit</Button>
        </div>
>>>>>>> feature/api
    )
}
 
export default Login
