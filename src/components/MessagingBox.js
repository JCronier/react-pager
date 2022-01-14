import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

import { sendEmail } from "../api/index";

import './MessagingBoxStyle.css';

const MessagingBox = ({userClicked, onExitClicked}) => {
    const recipientEmail = userClicked.email;
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const onSendClicked = (event) => {
        const messageBeingSent = event.target.value.message;
        console.log('message being sent: ', messageBeingSent);
        sendEmail(messageBeingSent).then((response) => {
            console.log('response: ', response);
            console.log('recipientEmail: ', recipientEmail);
            console.log('message sent: ', message);
        }).catch(err => {
            console.log('email send error: ', err);
        });
        alert('message sent');
    }

    const onSubjectInputChange = (event) => {
        setSubject(event.target.value);
    }

    const onMessageInputChange = (event) => {
        setMessage(event.target.value);
    }

    return (
        <div className='messagingFrame' id="messagingBox">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <h5>{userClicked.name}</h5>
                        <CloseIcon onClick={() => {onExitClicked()}}/>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box>
                <label>
                    {recipientEmail}
                </label>
                <input type="text" value={subject} placeholder="Subject" onChange={onSubjectInputChange} />
                <input type="text" value={message} placeholder="Message" onChange={onMessageInputChange} />
            </Box>
            <Box>
                <Button variant='contained' value={{subject, message}} onClick={onSendClicked}>
                    Send
                </Button>
            </Box>
        </div>
    );
}

export default MessagingBox;