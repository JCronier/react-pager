import { useState } from "react"

const AddUserForm = ({currLogin,onAdd}) => {
    //add user input state
    const[text,setText]=useState('')

    //enter button event
    const onSubmit=(e)=>{
        e.preventDefault()
        if(!text){
            alert('Provide a user')
            return
        }
        onAdd(currLogin,text)
        setText('')
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Add User</label>
                <input type='text' value={text} onChange={(e)=>setText(e.target.value)} />
                <input type ='submit' value ='Add'/>
            </form>
        </div>
    )
}

export default AddUserForm
