import Users from './Users'
const Loggedin = ({setCurrLogin, currLogin,logins,setLogins}) => 
{
    //delete user
    const deleteUser=(currLogin,user)=>{
        let res =logins.map((l)=>l.email===currLogin.email ? {...l,users:l.users.filter((u)=>u!==user)} : l)
        console.log(res)
        setLogins(res)
        setCurrLogin(res[0])
    }

    //add user
    const addUser =()=>{

    }

    return (
        <div>
            <h3>Hi {currLogin.email}</h3>
            <Users currLogin ={currLogin} onDelete={deleteUser}/>
        </div>
    )
}

export default Loggedin
