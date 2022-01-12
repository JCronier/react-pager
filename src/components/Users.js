import User from './User'
const Users = ({users,onDelete}) => {
    return (
        <div>
            {users.map((user)=>(<User key ={user.id} user={user} onDelete={onDelete}/>))}
        </div>
    )
}

export default Users
