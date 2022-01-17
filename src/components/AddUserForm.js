import { useState } from "react"
import {Grid, TextField,Button,Alert} from "@mui/material"
const AddUserForm = ({onAdd}) => {
    //add user input state
    const[email,setEmail]=useState('')
    const[name,setName]=useState('')
    //enter button event
    const onSubmit=(e)=>{
        e.preventDefault()
        if(!email){
            <Alert severity='error'>Provide a username</Alert>
            return
        }
        if(!name){
            <Alert severity='error'>Provide a name</Alert>
            return
        }
        onAdd({email,name})
        setEmail('')
        setName('')
    }
    return (
    <form className='container' onSubmit={onSubmit}>
        <Grid container columnSpacing={{xs: 1}}>
            <Grid item xs={1}>
                <TextField type='text' label="Name"  size="small"
                    value={name} onChange={(e)=>setName(e.target.value)} />
            </Grid>
            <Grid item xs={2}>
                <TextField type='text' label="Email"  size="small"
                    value={email} onChange={(e)=>setEmail(e.target.value)} />
            </Grid>
            <Grid item alignItems="stretch" style={{ display: "flex" }}>
                <Button variant="contained" type ='submit'>Add</Button>
            </Grid>
        </Grid>
    </form>
    )
}

export default AddUserForm
