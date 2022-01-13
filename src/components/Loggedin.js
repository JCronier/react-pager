import { useState } from "react";
import { unmountComponentAtNode } from "react-dom";

import AddUserForm from './AddUserForm'
import MessagingBox from "./MessagingBox";
import Users from './Users'

const Loggedin = ({currLogin,users,setUsers}) => 
{
    const [isMessagingBoxOpen, setIsMessagingBoxOpen] = useState(false);
    const [User, setUser] = useState(null);

    //delete user
    const deleteUser= async(user)=>{
        await fetch(`http://localhost:5005/users/${user.id}`,{method: 'DELETE'})
        setUsers(users.filter((u)=>u!==user))
    }

    //add user
    const addUser = async(user)=>{
        const res = await fetch('http://localhost:5005/users',
        { method: 'POST', 
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(user)
        })
        const data = await res.json()
        setUsers([...users,user])
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
            <h3>Hi {currLogin.email}</h3>
            <Users users={users} onDelete={deleteUser} onUserClicked={onUserClicked}/>
            <AddUserForm users={users} onAdd={addUser}/>
            {
                isMessagingBoxOpen ? <MessagingBox userClicked={User} onExitClicked={onExitClicked}/> : <div></div>
            }
        </div>
    )
}

export default Loggedin
