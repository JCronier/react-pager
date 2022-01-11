import { useState } from "react"
const Login = ({verify}) => {
    //username input state
    const [text,setText]=useState('')
    //enter button event
    const onSubmit=(e)=>{
        e.preventDefault()
        if(!text){
            alert('Provide a username')
            return
        }
        verify({text})
        setText('')
    }
    return (
        <form onSubmit={onSubmit}>
            <input type='text' value={text} onChange={(e)=>setText(e.target.value)} />
            <input type ='submit' value ='enter'/>
        </form>
    )
}
 
export default Login
