package config

// Cos 项目基础配置

// Cos 项目基础配置
// Bucket      = "sherlock-1314462060"
// REGION    = "ap-nanjing"
// SECRETID  = "REDACTED" //永久密钥 secretId
// SECRETKEY = "REDACTED"     //永久密钥 secretKey
// BASEURL = "https://sherlock-1314462060.cos.ap-nanjing.myqcloud.com"
type Cos struct {
	Bucket    string `yaml:"bucket"`    // sherlock-1314462060
	Region    string `yaml:"region"`    // ap-nanjing
	SecretID  string `yaml:"secretid"`  // REDACTED
	SecretKey string `yaml:"secretkey"` // REDACTED
	BaseURL   string `yaml:"baseurl"`   // https://sherlock-1314462060.cos.ap-nanjing.myqcloud.com
}
