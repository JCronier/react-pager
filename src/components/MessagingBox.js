import { unmountComponentAtNode } from "react-dom";
import { useState } from 'react';

import { sendEmail } from "../api/index";

const MessagingBox = ({currLogin, userClicked}) => {
    const recipientEmail = userClicked.email;
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const onExitClicked = (event) => {
        unmountComponentAtNode(document.getElementById('messagingBox'));
    }

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
        <div id="messagingBox">
            <div>
                <span style={{display: 'flex'}}>
                    <header className='header'>
                        <h5>{userClicked.name}</h5>
                    </header>
                    <button style={{marginLeft: 'auto'}} onClick={onExitClicked}>
                        X
                    </button>
                </span>
            </div>
            <div>
                <label>
                    {recipientEmail}
                </label>
                <input type="text" value={subject} placeholder="Subject" onChange={onSubjectInputChange} />
                <input type="text" value={message} placeholder="Message" onChange={onMessageInputChange} />
            </div>
            <div>
                <button value={{subject, message}} onClick={onSendClicked}>
                    Send
                </button>
            </div>
        </div>
    );
}

export default MessagingBox;