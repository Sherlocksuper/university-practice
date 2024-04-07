import {useState} from 'react';
import './ChatPage.css';
import ChatBubble from "../../components/chat/chat_bubble.tsx";

// 定义ChatPage组件
const ChatPage = () => {
    // 状态管理

    const [messages, setMessages] = useState<string[]>([]);
    const [inputMessage, setInputMessage] = useState('');

    // 处理消息发送
    const handleSendMessage = () => {
        if (inputMessage.trim() !== '') {
            setMessages([...messages, inputMessage]);
            setInputMessage('');
        }
    };
    // @ts-ignore
    const handleInputChange = (e) => {
        setInputMessage(e.target.value);
    };

    return (
        <div className="chat-container">
            <div className="chat-box">
                <div className="messages">
                    {messages.map((message: string, index) => (
                        <ChatBubble key={index} message={message} isFromUser={index % 2 === 0}/>
                    ))}
                </div>
                <div className="input-area">
                    <input
                        type="text"
                        value={inputMessage}
                        onChange={handleInputChange}
                        placeholder="输入消息..."
                        onKeyUp={(e) => {
                            if (e.key === 'Enter') {handleSendMessage();}
                        }}
                    />
                    <button onClick={handleSendMessage}>发送</button>
                </div>
            </div>
        </div>
    );
};

export default ChatPage;

