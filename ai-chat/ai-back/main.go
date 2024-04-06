package main

import (
	"awesomeProject3/api"
	api2 "awesomeProject3/api/struct"
	"awesomeProject3/router"
	"github.com/gin-gonic/gin"
	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
	_ "github.com/swaggo/files" // swagger embed files
	_ "github.com/swaggo/gin-swagger"
	"os"
)

func init() {
	log.Logger = log.Output(zerolog.ConsoleWriter{Out: os.Stderr})
	zerolog.SetGlobalLevel(zerolog.DebugLevel)

	var err error

	err = api.Db.AutoMigrate(&api2.User{})
	err = api.Db.AutoMigrate(&api2.Chat{})
	err = api.Db.AutoMigrate(&api2.Message{})
	err = api.Db.AutoMigrate(&api2.Version{})
	err = api.Db.AutoMigrate(&api2.Prompt{})

	if err != nil {
		log.Error().Msg("数据库迁移失败：" + err.Error())
	}

}

func main() {
	r := gin.Default()
	router.ConfigRouter(r)
	r.Run(":8080")
}
