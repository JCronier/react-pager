import User from './User'
const Users = ({currLogin,onDelete}) => {
    return (
        <div>
            {currLogin.users.map((user,index)=>(<User key={index} currLogin ={currLogin} user={user} onDelete={onDelete}/>))}
        </div>
    )
}

export default Users
