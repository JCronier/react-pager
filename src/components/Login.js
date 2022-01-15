import { useState } from "react"
import { loginUser } from "../api"
import {Button, TextField, Grid } from "@mui/material"
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
        loginUser({ email: text }).then((response) => verifyLogin(text)
        ).catch((error) => console.error(`Error: ${error}`));
        setText('');
    }
    return (
        <form className='container' onSubmit={onSubmit}>
            <Grid container rowSpacing={{xs: 2}}>
                <Grid item md={12} >
                    <TextField type='text' label="Username"  size="small"
                    value={text} onChange={(e)=>setText(e.target.value)} />
                </Grid>
                <Grid item alignItems="stretch" style={{ display: "flex" }}>
                    <Button variant="contained" type ='submit'>Login</Button>
                </Grid>
            </Grid>   
        </form>
    )
}
 
export default Login
