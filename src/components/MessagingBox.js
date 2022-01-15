import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { sendEmail } from "../api/index";

import './MessagingBoxStyle.css';

const MessagingBox = ({userClicked, onExitClicked}) => {
    const recipientEmail = userClicked.email;
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const onSendClicked = (event) => {
        event.preventDefault();
        console.log('message being sent: ', message);
        sendEmail(message).then((response) => {
            console.log('response: ', response);
            console.log('recipientEmail: ', recipientEmail);
            console.log('message sent: ', message);
            alert('message sent');
        }).catch(err => {
            console.log('email send error: ', err);
            alert('error message not sent');
        });
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
                        <h3>{userClicked.name}</h3>
                        <CloseIcon className='closeIcon' onClick={() => {onExitClicked()}}/>
                    </Toolbar>
                </AppBar>
            </Box>

            <Box>
                <Box>
                    <header>
                        To: {recipientEmail}
                    </header>
                </Box>
                <Box>
                   <input 
                    type="text"
                    value={subject}
                    placeholder="Subject"
                    onChange={onSubjectInputChange}
                    /> 
                </Box>
                
                <Box>
                    <TextField
                        multiline
                        type="text"
                        value={message}
                        placeholder='Message'
                        onChange={onMessageInputChange}
                    />

                </Box>
            </Box>
            
            <Toolbar>
                <Button className='sendButton' variant='contained' onClick={onSendClicked}>
                    Send
                </Button>
            </Toolbar>
        </div>
    );
}

export default MessagingBox;