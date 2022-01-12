import Users from './Users'
const Loggedin = ({login,onDelete}) => {
    return (
        <div>
            <h3>Hi {login.email}</h3>
            <Users users={login.users} onDelete={onDelete}/>
        </div>
    )
}

export default Loggedin
