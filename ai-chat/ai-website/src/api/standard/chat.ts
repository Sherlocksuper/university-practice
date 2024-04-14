import {Message} from "../request/chat_base_setting.ts";

export interface AutoComProps {
    model: string,
    messages: Array<Message>,
    use_search: boolean,
    stream: boolean
}

