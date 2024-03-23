package api

import (
	"github.com/gin-gonic/gin"
	"github.com/sashabaranov/go-openai"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var dsn = "root:root@tcp(localhost:3306)/ai?charset=utf8mb4&parseTime=True&loc=Local"
var Db, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})

// var Token = "REDACTED"
//var Token = "REDACTED"

var Token = "REDACTED"
var Model = openai.GPT4
var MaxTokens = 2000

func init() {

}

// 一些返回的code
const (
	SUCCESS     = 200
	FAIL        = 400
	NOTFOUND    = 404
	SERVERERROR = 500
)

type ReturnMessage struct {
	Code    int    `json:"code"`
	Message string `json:"message"`
	Data    any    `json:"data"`
}

type Func struct {
	Url    string `json:"url"`
	Method string `json:"method"`
	Action func(c *gin.Context)
}
