import AddUserForm from './AddUserForm'
import Users from './Users'
const Loggedin = ({currLogin,users,setUsers}) => 
{
    //delete user
    const deleteUser= async(user)=>{
        await fetch(`http://localhost:5005/users/${user.id}`,{method: 'DELETE'})
        setUsers(users.filter((u)=>u!==user))
    }

    //add user
    const addUser = async(user)=>{
        const res = await fetch('http://localhost:5005/users',
        { method: 'POST', 
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(user)
        })
        const data = await res.json()
        setUsers([...users,user])
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
