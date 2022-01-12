import User from './User'
const Users = ({currUser,onDelete}) => {
    return (
        <div>
            {currUser.users.map(user=>(<User key={user} user={user} currUser={currUser} onDelete={onDelete}/>))}
        </div>
    )
}

export default Users
