import {ChatFormat, ChatListFormat} from "../api/standard/chatFormat.ts";

//使用chatStartAt作为key,chatList储存所有的chat的startAt时间
//索引设置为chat+chatStartAt

//本地存储chatList
const setChatList = (chatList: ChatListFormat) => {
    localStorage.setItem("chatList", JSON.stringify(chatList));
}

//本地获取chatList
const getChatList = (): ChatListFormat => {
    const chatList = localStorage.getItem("chatList");
    if (chatList) {
        return JSON.parse(chatList);
    } else {
        return {chatsStartTimes: []};
    }
}

//获取对话
const getChat = (chatStartAt: number): ChatFormat | null => {
    const chat = localStorage.getItem("chat" + chatStartAt);
    if (chat) {
        return JSON.parse(chat);
    } else {
        return null;
    }
}

//添加对话
const addChat = (chat: ChatFormat) => {
    const chatList = getChatList();
    chatList.chatsStartTimes.push(chat.chatStartAt.toString());
    setChatList(chatList);
    localStorage.setItem("chat" + chat.chatStartAt, JSON.stringify(chat));
}

//删除对话
const removeChat = (chatStartAt: number) => {
    const chatList = getChatList();
    chatList.chatsStartTimes = chatList.chatsStartTimes.filter((item) => item !== chatStartAt.toString());
    setChatList(chatList);
    localStorage.removeItem("chat" + chatStartAt);
}

//更新对话
const updateChat = (chat: ChatFormat) => {
    localStorage.setItem("chat" + chat.chatStartAt, JSON.stringify(chat));
}

const chatLocalUtils =
    {getChat, addChat, removeChat, updateChat, getChatList}

export default chatLocalUtils
