export const defaultToken = "REDACTED"

export enum Role {
    user = "user",
    ai = "assistant",
    system = "system",
}

export interface Message {
    role: Role,
    content: string
}


//{"id":"codj22ucp7f14gnftf6g",
// "model":"kimi",
// "object":"chat.completion",
// "choices":[{"index":0,"message":{"role":"assistant","content":"你好！有什么可以帮助你的吗？"},
// "finish_reason":"stop"}],
// "usage":
// {"prompt_tokens":1,"completion_tokens":1,"total_tokens":2},"created":1713058058}
interface Choice {
    index: number,
    message?: Message,
    delta?: { content: string },
    finish_reason: string
}

interface Usage {
    prompt_tokens: number,
    completion_tokens: number,
    total_tokens: number
}

export interface AIResponseProps {
    id: string,
    model: string,
    object: string,
    choices: Array<Choice>,
    usage: Usage,
    created: number
}

//{"id":"codj0e1hmfrd1vonfav0"
// ,"model":"kimi",
// "object":"chat.completion.chunk",
// "choices":[{"index":0,"delta":{"content":"您"},"finish_reason":null}],
// "created":1713057847}


export interface AIStreamResponseProps {
    id: string,
    model: string,
    object: string,
    choices: Array<Choice>,
    usage: Usage,
    created: number,
    stream: boolean
}

export const defaultAIStreamResponse: AIStreamResponseProps = {
    id: "",
    model: "",
    object: "",
    choices: [
        {
            index: 0,
            finish_reason: "",
            delta: {
                content: ""
            }
        }
    ],
    usage: {
        prompt_tokens: 0,
        completion_tokens: 0,
        total_tokens: 0
    },
    created: 0,
    stream: true
}