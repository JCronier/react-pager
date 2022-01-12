import {FaTimes} from 'react-icons/fa'
const User = ({currUser, user,onDelete}) => {
    return (
        <div>
            <h4>{user}<FaTimes style={{color:'red', cursor:'crosshair'}} onClick={()=>onDelete(currUser.email, user)}/></h4>
        </div>
    )
}

export default User
