import { useState } from "react";
import { unmountComponentAtNode } from "react-dom";
import AddUserForm from './AddUserForm'
import MessagingBox from "./MessagingBox";
import Users from './Users'
import { deleteUser as removeUser,createUser } from '../api'
import { Grid } from "@mui/material"
const Loggedin = ({currLogin,users,setUsers,showAddUser,showRemoveUser,setAlertName,setAlertUsername}) => 
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
        createUser(user).then((response)=>setUsers(prev=>[...prev,user])
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
            <Grid container>
                <Grid item md={12} style={{marginTop: 10, marginBottom: 10}}>
                    {showAddUser &&<AddUserForm users={users} onAdd={addUser} setAlertUsername={setAlertUsername} setAlertName={setAlertName}/>}
                </Grid>
                <Grid item md={12}>
                   <Users users={users} currLogin ={currLogin} onDelete={deleteUser} onUserClicked={onUserClicked} showRemoveUser={showRemoveUser}/> 
                </Grid>
                
                { isMessagingBoxOpen ? <MessagingBox userClicked={User} onExitClicked={onExitClicked}/> : <div></div>}
            </Grid>
        </div>
    )
}

export default Loggedin
