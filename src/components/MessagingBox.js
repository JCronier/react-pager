import { unmountComponentAtNode } from "react-dom";
import { useState } from 'react';

const MessagingBox = ({currLogin, userClicked}) => {
    const recipientEmail = userClicked.email;
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const onExitClicked = (event) => {
        unmountComponentAtNode(document.getElementById('messagingBox'));
    }

    const onSendClicked = (event) => {
        // TODO use SNS to send the message to email
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
            <div style={{display: 'flex'}}>
                <span>
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
                <button onClick={onSendClicked}>
                    Send
                </button>
            </div>
        </div>
    );
}

export default MessagingBox;