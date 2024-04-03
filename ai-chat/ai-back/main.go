package main

import (
	"awesomeProject3/router"
	_ "github.com/swaggo/gin-swagger"
)                                  // gin-swagger middleware
import _ "github.com/swaggo/files" // swagger embed files

import (
	"awesomeProject3/api"
	"github.com/gin-gonic/gin"
	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
	"os"
)

func init() {
	log.Logger = log.Output(zerolog.ConsoleWriter{Out: os.Stderr})
	zerolog.SetGlobalLevel(zerolog.DebugLevel)

	var err error

	err = api.Db.AutoMigrate(&api.User{})
	err = api.Db.AutoMigrate(&api.Chat{})
	err = api.Db.AutoMigrate(&api.Message{})
	err = api.Db.AutoMigrate(&api.Version{})

	if err != nil {
		log.Error().Msg("数据库迁移失败：" + err.Error())
	}

}

func main() {
	r := gin.Default()

	router.ConfigRouter(r)

	r.Run(":8080")
}
