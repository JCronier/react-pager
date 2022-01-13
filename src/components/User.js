import {FaTimes} from 'react-icons/fa'
const User = ({user,onDelete}) => {
    const onEmailClicked = (event) => {

    }

    return (
        <div>
            <h4>
                <button value={user.email} onClick={onEmailClicked}>
                    {user.name}
                </button>
                <FaTimes style={{color:'red', cursor:'crosshair'}} onClick={()=>onDelete(user)}/>
            </h4>
        </div>
    )
}

export default User
