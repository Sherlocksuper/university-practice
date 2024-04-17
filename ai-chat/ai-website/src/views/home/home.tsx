import './home.css';
import React, {useContext} from "react";
import {ChatContext, useChatManager} from "../../chat_context.ts";
import chatLocalUtils from "../../utils/chatUtils.ts";
import ChatPage from "../chat/Chat.tsx";

export const Home = () => {
    const [openChatList, setOpenChatList] = React.useState(false);

    const chatContext = useChatManager()

    const handleNewChat = () => {
        if (window.confirm("确定要创建新会话吗?"))
            chatContext.onAddChat()
    }
    const handleHistoryChat = () => {
        setOpenChatList(!openChatList)
    }


    return (
        <ChatContext.Provider value={chatContext}>
            <div id={'home'}>
                <div id={'home-content'}>
                    <div>
                        <button onClick={handleNewChat} className={"action-button"}>创建新会话</button>
                        <button onClick={handleHistoryChat} className={"action-button"}>历史会话</button>
                    </div>

                    <div id={'user-container'}>
                        <img className={'user-avatar'} src={'src//assets/user.jpg'} alt={'user-avatar'}/>
                    </div>
                </div>
                <ChatPage chat={chatContext.currentChat}/>
                <ChatListComponent open={openChatList} onClose={() => {
                    setOpenChatList(false)
                }}/>
            </div>
        </ChatContext.Provider>
    );
}


const ChatListComponent = ({open, onClose}: {
    open: boolean,
    onClose: () => void
}) => {
    const chatList = chatLocalUtils.getChatList()

    return (
        <div className={'chat-list-container'} style={{display: open ? 'block' : 'none', backgroundColor: "white"}}>
            <div className={'container_bar'}>
                <h3 className={'chat-list-title'}>会话列表</h3>
                <div className={'return'} onClick={() => onClose()}>×</div>
            </div>

            <div className={'chat-list'}>
                {chatList.chatsStartTimes.map((chatStartAt) => (
                    <ChatItem key={chatStartAt} chatStartAt={chatStartAt} chatName={chatStartAt}/>
                ))}
            </div>
        </div>
    );
}

const ChatItem = ({chatStartAt, chatName}: { chatStartAt: string, chatName: string }) => {
    const chatContext = useContext(ChatContext)

    return (
        <div className={'chat-item'} onClick={() => {
            chatContext.onSwitchChat(chatStartAt)
        }}>
            <span className={'chat-name'}>{chatName}</span>
            <span className={'chat-time'}>{new Date(Number(chatStartAt)).toLocaleString()}</span>
        </div>
    );
}