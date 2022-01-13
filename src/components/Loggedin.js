import { useState } from "react";
import { unmountComponentAtNode } from "react-dom";

import AddUserForm from './AddUserForm'
import MessagingBox from "./MessagingBox";
import Users from './Users'
import { deleteUser as removeUser,createUser } from '../api'

const Loggedin = ({currLogin,users,setUsers}) => 
{
    const [isMessagingBoxOpen, setIsMessagingBoxOpen] = useState(false);
    const [User, setUser] = useState(null);

    //delete user
    const deleteUser= (user)=>{
        removeUser(user.email).then((response)=>setUsers(users.filter((u)=>u!==user))
        ).catch((error)=>console.error(`Error: ${error}`))

    }

    //add user
    const addUser = (user)=>{
        createUser(user).then((response)=>setUsers([...users,user])
        ).catch((error)=>console.error(`Error: ${error}`))
    }

    const onUserClicked = (User) => {
        onExitClicked();
        setIsMessagingBoxOpen(true);
        setUser(User);
    }

    const onExitClicked = () => {
        const messagingBox = document.getElementById('messagingBox');
        if (messagingBox) {
            unmountComponentAtNode(messagingBox);
        }
        setIsMessagingBoxOpen(false);
    }

    return (
        <div>
            <h3>Hi {currLogin.name}</h3>
            <Users users={users} currLogin ={currLogin} onDelete={deleteUser} onUserClicked={onUserClicked}/>
            <AddUserForm users={users} onAdd={addUser}/>
            {
                isMessagingBoxOpen ? <MessagingBox userClicked={User} onExitClicked={onExitClicked}/> : <div></div>
            }
        </div>
    )
}

export default Loggedin
