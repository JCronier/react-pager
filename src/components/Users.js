import { Grid } from '@mui/material'
import User from './User'
const Users = ({users, onDelete, currLogin, onUserClicked}) => {
    return (
        <div>
            <Grid container spacing={2}>
                {users.map((user,index)=> user.email!==currLogin.email ? 
                <Grid item xs={6} md={2} key={index}><User user={user} onDelete={onDelete} onUserClicked={onUserClicked}/>
                </Grid>:null)}
            </Grid>
        </div>
    )
}

export default Users
