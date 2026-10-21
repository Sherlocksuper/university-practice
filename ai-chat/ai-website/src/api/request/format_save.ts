import {Message} from "./format.ts";


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

export interface AIStreamResponseProps {
    id: string,
    model: string,
    object: string,
    choices: Array<Choice>,
    usage: Usage,
    created: number,
    stream: boolean
}


export const defaultToken = "REDACTED"


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
