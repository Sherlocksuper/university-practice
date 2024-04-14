import {useId, useState} from 'react';
import './ChatPage.css';
import ChatBubble from "../../components/chat/chat_bubble.tsx";
import {Message, Role} from "../../api/request/chat_base_setting.ts";
import {autoCompleteChat, updateToAIStreamResponse} from "../../api/request/chat.ts";

// 定义ChatPage组件
const ChatPage = () => {
    // 状态管理
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputMessage, setInputMessage] = useState('');
    const messagesId = useId();


    // @ts-ignore
    const handleInputChange = (e) => {
        setInputMessage(e.target.value);
    };

    const handleSendMessage = () => {
        if (inputMessage.trim() !== '') {
            const newMessages = [...messages, {role: Role.user, content: inputMessage}];
            setMessages(newMessages);
            handleAutoComplete(newMessages);
            setInputMessage('');
        }
    };

    const handleAutoComplete = async (messages: Message[]) => {
        const newMessage: Message = {role: Role.ai, content: ""}
        setMessages(messages => [...messages, newMessage]);

        //先获取result
        const response = await autoCompleteChat(messages);
        const reader = response.body!.getReader();
        const currentMessage = [...messages];

        while (true) {
            const {done, value} = await reader.read();
            if (done) break;
            const resultJson = updateToAIStreamResponse(value!);
            if (resultJson!.choices[0].delta!.content.length > 0) {
                newMessage.content += resultJson!.choices[0].delta!.content;
                setMessages([...currentMessage, newMessage])
            }
            scrollToBottom();
        }
    }

    const scrollToBottom = () => {
        const messagesElement = document.getElementById(messagesId);
        if (messagesElement) {
            messagesElement.scrollTop = messagesElement.scrollHeight;
        }
    }

    return (
        <div className="chat-box">
            <div className="messages" id={messagesId}>
                {messages.map((messageItem: Message, index) => (
                    <ChatBubble message={messageItem} key={index}/>
                ))}
            </div>
            <div className="input-area">
                <input
                    type="text"
                    value={inputMessage}
                    onChange={handleInputChange}
                    placeholder="输入消息..."
                    onKeyUp={(e) => {
                        if (e.key === 'Enter') {
                            handleSendMessage();
                        }
                    }}
                />
                <button onClick={handleSendMessage}>发送</button>
            </div>
        </div>
    );
}

export default ChatPage;

