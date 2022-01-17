import { useState } from "react"
import { loginUser } from "../api"
import {Button, TextField, Box, Alert } from "@mui/material"
const Login = ({verifyLogin,setAlertUsername,setAlertUnvalid}) => {
    //login input state
    const [text,setText]=useState('')
    //enter button event
    const onSubmit=(e)=>{
        e.preventDefault()
        if(!text){
            setAlertUsername(true)
            return
        }
        loginUser({ email: text }).then((response) => {
            verifyLogin(text)

        }).catch((error) => {console.error(`Error: ${error}`) 
            setAlertUnvalid(true)
        })
        setText('');
    }
    return (
        <form className='container' onSubmit={onSubmit}>
            <Box display='flex' flexDirection='column' marginLeft={2}>
                <Box marginBottom={2}>
                    <TextField type='text' label="Email"  size="small"
                    value={text} onChange={(e)=>setText(e.target.value)} />
                </Box>
                <Box >
                    <Button variant="contained" type ='submit'>Login</Button>
                </Box>
            </Box>   
        </form>
    )
}
 
export default Login
