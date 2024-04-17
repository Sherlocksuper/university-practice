import {Message, OriginMessageFormat} from "../request/format.ts";

export interface AutoComProps {
    model: string,
    messages: Array<Message>,
    use_search: boolean,
    stream: boolean
}

export interface ChatFormat {
    chatName?: string;
    chatStartAt: number;
    messages: OriginMessageFormat[];
}

export interface ChatListFormat {
    chatsStartTimes: string[];
}

