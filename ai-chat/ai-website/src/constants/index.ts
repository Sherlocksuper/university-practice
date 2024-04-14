import {Setting} from "../utils/settingUtils.ts";

export const KimiToken = "REDACTED"

export const defaultSetting: Setting = {
    model: "kimi",
    use_search: true,
    stream: false
}

interface settingItem {
    title: string,
    func: () => void
}

export const settingList: settingItem[] = [
    {
        title: "暗夜模式",
        func: () => {
        }
    },
    {
        title: "是否联网",
        func: () => {
            console.log("Use Search")
        }
    },
]