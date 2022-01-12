import Users from './Users'
const Loggedin = ({currLogin,logins,setLogins}) => 
{
    //delete user
    const deleteUser=(login,user)=>{
        let res =logins.map((l)=>l.email==login.email ? {...l,users:l.users.filter((u)=>u!==user)} : l)
        console.log(res)
        setLogins(res)
    }

    //add user
    const addUser =()=>{

    }

    return (
        <div>
            <h3>Hi {currLogin.email}</h3>
            <Users users={currLogin.users} onDelete={deleteUser}/>
        </div>
    )
}

export default Loggedin
