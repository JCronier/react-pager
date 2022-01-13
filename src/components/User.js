import {FaTimes} from 'react-icons/fa'
const User = ({currLogin,user,onDelete}) => {
    return (
        <div>
            <h4>{user.email}<FaTimes style={{color:'red', cursor:'crosshair'}} onClick={()=>onDelete(currLogin,user)}/></h4>
        </div>
    )
}

export default User
