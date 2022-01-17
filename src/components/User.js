import { Button, Typography,Grid, IconButton } from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel'
const User = ({user, onDelete, onUserClicked,showRemoveUser}) => {
  return (
        <div>
            <Grid container direction='row' alignItems='center'>
                <Grid item >
                    <Button variant='outlined' disableElevation  value={user.email} onClick={()=>onUserClicked(user)}>
                    <Typography variant='h6' style={{textTransform:'none'}}>{user.name}</Typography>
                    </Button>
                </Grid>
                 {showRemoveUser&&<Grid item >
                   <IconButton onClick={()=>onDelete(user)}><CancelIcon style={{color:'red', fontSize:'30'}} /></IconButton>
                </Grid>}
            </Grid>
            
        </div>
    )
}

export default User
