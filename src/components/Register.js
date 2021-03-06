import {Button, TextField, Grid } from "@mui/material"
import { registerUser } from '../api/index';
import { useState } from "react"
const Register =({setLogins,setAlertUsername,setAlertName,setAlertRegistered,setAlertRegisterFail})=> {
    //register user input state
    const[email,setEmail]=useState('')
    const[name,setName]=useState('')

    //enter button event
    const onSubmit=(e)=>{
        e.preventDefault()
        if(!email){
            setAlertUsername(true)
        }
        if(!name){
            setAlertName(true)
            return
        }
        registerUser({email,name}).then((response) => {
            setLogins(prev => [...prev, {email,name}])
            setAlertRegistered(true)
        }).catch((error) => {
            console.error(`Error: ${error}`)
            setAlertRegisterFail(true)
        })
        setEmail('')
        setName('')
    }

    return (
        <form onSubmit={onSubmit}>
            <Grid container rowSpacing={{xs: 2}}>
                <Grid item xs={12}>
                    <TextField type='text' label="Name"  size="small"
                        value={name} onChange={(e)=>setName(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                    <TextField type='text' label="Email"  size="small"
                        value={email} onChange={(e)=>setEmail(e.target.value)} />
                </Grid>
                <Grid item alignItems="stretch" style={{ display: "flex" }}>
                    <Button variant="contained" type ='submit'>Register</Button>
                </Grid>
            </Grid>

        </form>
    )
    
}

export default Register;