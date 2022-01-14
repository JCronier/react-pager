import { useState } from "react"

const AddUserForm = ({onAdd}) => {
    //add user input state
    const[email,setEmail]=useState('')
    const[name,setName]=useState('')
    //enter button event
    const onSubmit=(e)=>{
        e.preventDefault()
        if(!email){
            alert('Provide a user')
            return
        }
        onAdd({email,name})
        setEmail('')
        setName('')
    }
    return (
        <form className='addForm' onSubmit={onSubmit}>
            <div><label className='title'>Add User</label></div>
            <label>Name</label>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
            <label>Email</label>
            <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type ='submit' value ='Add'/>
        </form>
    )
}

export default AddUserForm
