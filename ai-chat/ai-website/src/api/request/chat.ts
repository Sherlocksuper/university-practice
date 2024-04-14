import {MyUrl} from "../url.ts";
import {fetchStreamData} from "../base_request.ts";
import {AIStreamResponseProps, defaultAIStreamResponse, Message} from "./chat_base_setting.ts";


//AutoComplete
export const autoCompleteChat = (data: Message[]): Promise<Response> => {
    const api = MyUrl.Chat.AuToComplete

    const requestData = {
        model: "kimi",
        messages: data,
        use_search: false,
        stream: true
    }

    return fetchStreamData({
        url: api.url,
        method: api.method,
        data: requestData
    })
};

export const updateToAIStreamResponse = (value: Uint8Array): AIStreamResponseProps => {
    const decoder = new TextDecoder();
    const text: string = decoder.decode(value);
    try {
        return JSON.parse(text.slice(text.indexOf("{"), text.lastIndexOf("}") + 1));
    } catch (e) {
        const textArr = text.split("\n").filter((item) => item !== "").map((item) => item.replace("data:", ""));
        const result = JSON.parse(JSON.stringify(defaultAIStreamResponse));
        textArr.forEach((item) => {
            if (isValidJSON(item)) {
                result.choices[0].delta!.content += JSON.parse(item).choices[0].delta.content;
            }
        });
        return result;
    }
}

function isValidJSON(text: string) {
    try {
        JSON.parse(text);
        return true;
    } catch {
        return false;
    }
}