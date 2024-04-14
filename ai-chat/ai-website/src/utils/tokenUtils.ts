import {defaultToken} from "../api/request/chat_base_setting.ts";

const saveToken = (token: string) => {
    localStorage.setItem('token', token)
}

const getToken = () => {
    return defaultToken || localStorage?.getItem('token')
}

const removeToken = () => {
    localStorage.removeItem('token')
}


export const tokenUtils = {
    saveToken,
    getToken,
    removeToken
}
