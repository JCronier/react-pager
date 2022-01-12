import AddUserForm from './AddUserForm'
import Users from './Users'
const Loggedin = ({setCurrLogin, currLogin,logins,setLogins}) => 
{
    //delete user
    const deleteUser=(currLogin,user)=>{
        let res =logins.map((l)=>l.email===currLogin.email ? {...l,users:l.users.filter((u)=>u!==user)} : l)
        setLogins(res)
        setCurrLogin(res.find((r)=>r.email===currLogin.email))
    }

    //add user
    const addUser =(currLogin,user)=>{
        let res =logins.map((l)=>l.email===currLogin.email ? {...l,users:[...currLogin.users,user]} : l)
        setLogins(res)
        setCurrLogin(res.find((r)=>r.email===currLogin.email))
    }

    return (
        <div>
            <h3>Hi {currLogin.email}</h3>
            <Users currLogin ={currLogin} onDelete={deleteUser}/>
            <AddUserForm currLogin ={currLogin} onAdd={addUser}/>
        </div>
    )
}

export default Loggedin
