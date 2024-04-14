interface UrlItem {
    url: string;
    method: string;
}

interface UrlMap {
    [key: string]: UrlItem
}

const Chat: UrlMap = {
    AuToComplete: {url: "/v1/chat/completions", method: "POST"},
}

const Token: UrlMap = {
    Check: {url: "/token/check", method: "POST"},
}


export const MyUrl = {
    BASE_URL: 'http://localhost:8000',
    Chat,
    Token

}


