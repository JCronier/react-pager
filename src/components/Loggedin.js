import Users from './Users'
const Loggedin = ({setCurrLogin, currLogin,logins,setLogins}) => 
{
    //delete user
    const deleteUser=(login,user)=>{
        let res =logins.map((l)=>l.email===login ? {...l,users:l.users.filter((u)=>u!==user)} : l)
        setCurrLogin(res[0]);
        // setLogins(res)
    }

    //add user
    const addUser =()=>{

    }

    return (
        <div>
            <h3>Hi {currLogin.email}</h3>
            <Users currUser={currLogin} onDelete={deleteUser}/>
        </div>
    )
}

export default Loggedin
