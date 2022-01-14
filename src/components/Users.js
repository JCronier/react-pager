import User from './User'
const Users = ({users, onDelete, currLogin, onUserClicked}) => {
    return (
        <div>
            {users.map((user,index)=> user.email!==currLogin.email ? <User key={index} user={user} onDelete={onDelete} onUserClicked={onUserClicked}/>:null)}
        </div>
    )
}

export default Users
