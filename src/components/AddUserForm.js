import { useContext, useState } from "react"
import { createUser } from "../api";
import { UserContext } from "../context/UserContext";

const AddUserForm = ({currLogin,onAdd}) => {
    //add user input state
    const[email,setEmail]=useState('');
    const [name, setName] = useState('');

    const { state, dispatch } = useContext(UserContext);

    //enter button event
    const onSubmit=(e)=>{
        e.preventDefault();
        if(!name || !email){
            alert('Provide a user')
            return
        }
        createUser({name, email})
            .then(() => {
                dispatch({type: 'ADD_USER', value: {name, email} });
            }).catch(e => {
                console.log(e.message);
            })
        // onAdd(currLogin,)
        setName('');
        setEmail('')
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Add User</label>
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
                <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} />
                <button onSubmit={onSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default AddUserForm
