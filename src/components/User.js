import {FaTimes} from 'react-icons/fa'
const User = ({user, onDelete, onUserClicked}) => {
  return (
        <div>
            <h4 className='user'>
                <button value={user.email} onClick={()=>onUserClicked(user)}>
                    {user.name}
                </button>
                <FaTimes style={{color:'red', cursor:'crosshair'}} onClick={()=>onDelete(user)}/>
            </h4>
        </div>
    )
}

export default User
