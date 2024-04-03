package api

import (
	"awesomeProject3/config"
	"github.com/sashabaranov/go-openai"
)

var Db, _ = config.GetConfig().MySQL.GetDb()

const (
	MODEL     = openai.GPT3Dot5Turbo
	MAXTOKENS = 2000
)

const (
	DIFFUSSION_XL_BASEURL = "https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/text2image/sd_xl"
	QFBASEURL             = "https://aip.baidubce.com"
	QFTOKENURL            = "/oauth/2.0/token"
	QFAPIKey              = "REDACTED"
	QFAPISecretKey        = "REDACTED"
)
