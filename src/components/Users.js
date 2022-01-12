import User from './User'
const Users = ({currLogin,users,onDelete}) => {
    return (
        <div>
            {users.map((user,index)=>(<User key={index} currLogin ={currLogin} user={user} onDelete={onDelete}/>))}
        </div>
    )
}

export default Users
