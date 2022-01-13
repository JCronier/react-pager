import AddUserForm from './AddUserForm'
import Users from './Users'
import { deleteUser as removeUser,createUser } from '../api'
const Loggedin = ({currLogin,users,setUsers}) => 
{
    //delete user
    const deleteUser= (user)=>{
        removeUser(user.email).then((response)=>setUsers(users.filter((u)=>u!==user))
        ).catch((error)=>console.error(`Error: ${error}`))

    }

    //add user
    const addUser = (user)=>{
        // const res = await fetch('http://localhost:5005/users',
        // { method: 'POST', 
        // headers: {'Content-type': 'application/json'},
        // body: JSON.stringify(user)
        // })
        createUser(user).then((response)=>setUsers([...users,user])
        ).catch((error)=>console.error(`Error: ${error}`))
    }

    return (
        <div>
            <h3>Hi {currLogin.email}</h3>
            <Users users={users} onDelete={deleteUser}/>
            <AddUserForm users={users} onAdd={addUser}/>
        </div>
    )
}

export default Loggedin
