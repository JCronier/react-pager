import { useState } from "react"

const AddUserForm = ({onAdd}) => {
    //add user input state
    const[email,setEmail]=useState('')

    //enter button event
    const onSubmit=(e)=>{
        e.preventDefault()
        if(!email){
            alert('Provide a user')
            return
        }
        onAdd({email})
        setEmail('')
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Add User</label>
                <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input type ='submit' value ='Add'/>
            </form>
        </div>
    )
}

export default AddUserForm
