import User from './User'
const Users = ({users,onDelete}) => {
    return (
        <div>
            {users.map((user,index)=>(<User key={index} user={user} onDelete={onDelete}/>))}
        </div>
    )
}

export default Users
