import User from './User'
const Users = ({users,onDelete,currLogin}) => {
    return (
        <div>
            {users.map((user,index)=> user.email!==currLogin.email ? <User key={index} user={user} onDelete={onDelete}/>:null)}
        </div>
    )
}

export default Users
