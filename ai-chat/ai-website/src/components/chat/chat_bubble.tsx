import React from 'react';
import './chat_bubble.css';
import {Message, Role} from "../../api/request/chat_base_setting.ts";
import Markdown from "react-markdown";
import {CodeBlock} from "../code_block/code_block.tsx"; // 引入CSS样式文件

interface ChatBubbleProps {
    message: Message;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({message}) => {

    const isFromUser = message.role === Role.user

    return (
        <div className={`chat-line  ${isFromUser ? 'user-line' : 'ai-line'}`}>
            <div className={`chat-bubble`}>
                <Markdown
                    components={{
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        pre: ({children}) => {
                            return <CodeBlock children={children}/>;
                        },
                    }}
                >
                    {message.content}
                </Markdown>

            </div>
            <img
                className="chat-avatar"
                src={isFromUser ? '/src/assets/user.jpg' : '/src/assets/ai.jpg'}
                alt="avatar"/>
        </div>
    );
};

export default ChatBubble;