import Users from './Users'
const Loggedin = ({users,onDelete}) => {
    return (
        <div>
            <h3>Hi</h3>
            <Users users={users} onDelete={onDelete}/>
        </div>
    )
}

export default Loggedin
