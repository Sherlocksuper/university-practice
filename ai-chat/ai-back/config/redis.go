package config

//	RedisAddress  = "localhost:6379"
//	RedisPassword = ""
//	RedisDb       = 0

// Redis 项目基础配置
type Redis struct {
	RedisAddress  string `json:"address" yaml:"address"`
	RedisPassword string `json:"password" yaml:"password"`
	RedisDb       int    `json:"db" yaml:"db"`
}
