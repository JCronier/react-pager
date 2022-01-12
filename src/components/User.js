import {FaTimes} from 'react-icons/fa'
const User = ({user,onDelete}) => {
    return (
        <div>
            <h3>{user.text}<FaTimes style={{color:'red', cursor:'crosshair'}} onClick={()=>onDelete(user.id)}/></h3>
            <p>{user.email}</p>
        </div>
    )
}

export default User
