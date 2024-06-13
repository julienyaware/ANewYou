import React, { useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

export default function CommunityChat() {
    const [messages, setMessages] = useState([]);

    // Example function to handle sending messages
    const onSend = (newMessages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages));
    };

    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1, // user id
                name: 'John Doe', // user name
            }}
        />
    );
}
