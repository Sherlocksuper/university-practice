package router

import (
	"awesomeProject3/api"
	"awesomeProject3/handler"
	"awesomeProject3/service"
	"github.com/gin-gonic/gin"
)

var userService = service.NewUserService()
var userHandler = handler.NewUserHandler(userService)

func RegisterUserRouter(router *gin.Engine) {
	userGroup := router.Group(api.API + "/user")
	{
		userGroup.POST("/find", userHandler.FindUser)
		userGroup.GET("/findAll", userHandler.FindAllUser)
		userGroup.GET("/delete", userHandler.DeleteUser)
		userGroup.GET("/getemailcode", userHandler.GetEmailCode)
		userGroup.GET("/checkemailcode", userHandler.CheckRegisterCode)
	}
}
