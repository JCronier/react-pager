import AddUserForm from './AddUserForm'
import Users from './Users'
const Loggedin = ({currLogin,users,setUsers}) => 
{
    //delete user
    const deleteUser= async(user)=>{
        //await fetch('http://localhost:5005/logins/${currLogin')
        // let res =logins.map((l)=>l.email===currLogin.email ? {...l,users:l.users.filter((u)=>u!==user)} : l)
        // setLogins(res)
        // setCurrLogin(res.find((r)=>r.email===currLogin.email))
        setUsers(users.filter((u)=>u!==user))
    }

    //add user
    const addUser =(user)=>{
        // let res =logins.map((l)=>l.email===currLogin.email ? {...l,users:[...currLogin.users,user]} : l)
        // setLogins(res)
        // setCurrLogin(res.find((r)=>r.email===currLogin.email))
        setUsers([...users,user])
        console.log(users)
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
