import User from './User'
const Users = ({users,onDelete}) => {
    return (
        <div>
            {users.map((user)=>(<User user={user} onDelete={onDelete}/>))}
        </div>
    )
}

export default Users
