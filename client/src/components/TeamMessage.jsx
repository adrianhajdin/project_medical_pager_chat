import React from 'react';
import { MessageTeam, useMessageContext } from 'stream-chat-react';

const TeamMessage = () => {
    const { handleOpenThread, message } = useMessageContext();

    return (
        <MessageTeam
            message={{ ...message, user: {}}}
            // handleOpenThread={}
        />
    )
}

export default TeamMessage
