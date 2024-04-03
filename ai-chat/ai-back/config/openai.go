package config

// OpenAI 项目基础配置

// OPENAITOKEN          = "REDACTED"
// BASEURL              = "https://hk.xty.app/v1"
// MODEL                = openai.GPT3Dot5Turbo
// MAXTOKENS            = 2000
// DefaultSystemMessage = "你是我的ai助手，请帮助我解决问题"
type OpenAI struct {
	OpenAIToken          string `yaml:"openai_token"`
	BaseURL              string `yaml:"openai_baseurl"`
	Model                string `yaml:"model"`
	MaxTokens            int    `yaml:"max_tokens"`
	DefaultSystemMessage string `yaml:"default_system_message"`
}
