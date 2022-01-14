import {FaTimes} from 'react-icons/fa'
const User = ({user,onDelete}) => {
    return (
        <div>
            <h4 className='user'>{user.name}<FaTimes style={{color:'red', cursor:'crosshair'}} onClick={()=>onDelete(user)}/></h4>
        </div>
    )
}

export default User
