package api

import (
	"github.com/sashabaranov/go-openai"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var Db, _ = gorm.Open(mysql.Open(DSN), &gorm.Config{})

// openai go服务
const (
	OPENAITOKEN          = "REDACTED"
	BASEURL              = "https://hk.xty.app/v1"
	MODEL                = openai.GPT3Dot5Turbo
	MAXTOKENS            = 2000
	DefaultSystemMessage = "你是我的ai助手，请帮助我解决问题"
)

// email go服务
const (
	EmailAuthorEmail = "REDACTED@qq.com"
	EmailPassword    = "REDACTED"
	EmailTitle       = "注册验证码"
	EmailTemplate    = "您的注册验证码为：%s, 请在5分钟内完成注册"
)

// redis服务
const (
	RedisAddress  = "localhost:6379"
	RedisPassword = ""
	RedisDb       = 0
)

// mysql服务
const (
	DBAddress  = "localhost:3306"
	DBUser     = "root"
	DBPassword = "root"
	DBName     = "ai"
	DSN        = DBUser + ":" + DBPassword + "@tcp(" + DBAddress + ")/" + DBName + "?charset=utf8mb4&parseTime=True&loc=Local"
)

// qianfan go服务
const (
	DIFFUSSION_XL_BASEURL = "https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/text2image/sd_xl"
	QFBASEURL             = "https://aip.baidubce.com"
	QFTOKENURL            = "/oauth/2.0/token"
	QFAPIKey              = "REDACTED"
	QFAPISecretKey        = "REDACTED"
)

// cos go服务
const (
	COS_NAME      = "sherlock-1314462060"
	COS_REGION    = "ap-nanjing"
	COS_SECRETID  = "REDACTED"
	COS_SECRETKEY = "REDACTED"
	//COS_SECRETID  = "REDACTED" //永久密钥 secretId
	//COS_SECRETKEY = "REDACTED"     //永久密钥 secretKey
	COS_BASEURL = "https://sherlock-1314462060.cos.ap-nanjing.myqcloud.com"
)
