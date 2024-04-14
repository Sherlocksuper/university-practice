// 保存聊天记录
const saveChat = (chat: string) => {
    localStorage.setItem('chat', JSON.stringify(chat));
}

// 获取聊天记录
const getChat = () => {
    const chat = localStorage.getItem('chat');
    return chat ? JSON.parse(chat) : null;
}

// 删除聊天记录
const removeChat = () => {
    localStorage.removeItem('chat');
}

// 更新聊天记录
const updateChat = (chat: string) => {
    saveChat(chat);
}

export const chatUtils = {
    saveChat,
    getChat,
    removeChat,
    updateChat
}