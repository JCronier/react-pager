import User from './User'
import { UserContext } from '../context/UserContext'
import { useContext } from 'react'
const Users = ({currLogin,onDelete}) => {
    const { state, dispatch } = useContext(UserContext);
    return (
        <div>
            {state.allUsers.map((user,index)=>(<User key={index} currLogin ={currLogin} user={user} onDelete={onDelete}/>))}
        </div>
    )
}

export default Users
