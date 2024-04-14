//refresh_token存活检测
// 检测refresh_token是否存活，如果存活live未true，否则为false，请不要频繁（小于10分钟）调用此接口。
//
// POST /token/check
//
// 请求数据：
//
// {
//     "token": "REDACTED"
// }
// 响应数据：
//
// {
//     "live": true
// }

import {MyUrl} from "../url.ts";
import {request} from "../base_request.ts";

export const checkToken = (data: { token: string }) => {
    const api = MyUrl.Token.Check;
    return request({
        url: api.url,
        method: 'POST',
        data
    })
}