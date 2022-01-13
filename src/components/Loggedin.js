import AddUserForm from './AddUserForm'
import Users from './Users'
import { deleteUser as removeUser,createUser, verifyToken } from '../api'
import Cookies from 'universal-cookie/es6'
const Loggedin = ({currLogin,users,setUsers, setShowLogin}) => 
{
    const cookies = new Cookies();
    //delete user
    const deleteUser= (user)=>{
        removeUser(user.email).then((response)=>setUsers(users.filter((u)=>u!==user))
        ).catch((error)=>console.error(`Error: ${error}`))

    }

    //add user
    const addUser = (user)=>{
        const { name, email, token } = cookies.getAll();
        console.log(token)
        const body = {
            userInfo: {
                name,
                email
            },
            token
        }
        verifyToken(body)
            .then(() => {
                createUser(user)
                    .then((response)=>setUsers([...users,user]))
                    .catch((error)=>console.error(`Error: ${error}`))
            })
            .catch(() => alert('invalid token'));
       
    }

    const logout = () => {
        cookies.remove('name');
        cookies.remove('email');
        cookies.remove('token');
        setShowLogin(true);
    }

    return (
        <div>
            <h3>Hi {currLogin.name}</h3>
            <button type='button' onClick={logout}>Logout</button>
            <Users users={users} onDelete={deleteUser}/>
            <AddUserForm users={users} onAdd={addUser}/>
        </div>
    )
}

export default Loggedin
