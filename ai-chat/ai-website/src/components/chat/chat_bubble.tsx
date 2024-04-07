// @ts-ignore

import React from 'react';
import './chat_bubble.css'; // 引入CSS样式文件

interface ChatBubbleProps {
    message: string;
    isFromUser: boolean; // 新增属性，用于判断消息是否来自用户
}

const ChatBubble: React.FC<ChatBubbleProps> = ({message, isFromUser}) => {
    return (
        <div className={`chat-line  ${isFromUser ? 'user-line' : 'ai-line'}`}>
            <div className={`chat-bubble`}>
                {message}
            </div>
            <img
                className="chat-avatar"
                src={isFromUser ? '/src/assets/user.jpg' : '/src/assets/ai.jpg'}
                alt="avatar"/>
        </div>
    );
};

export default ChatBubble;