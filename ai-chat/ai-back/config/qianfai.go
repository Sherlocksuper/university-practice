package config

//const (
//	DIFFUSSION_XL_BASEURL = "https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/text2image/sd_xl"
//	QFBASEURL             = "https://aip.baidubce.com"
//	QFTOKENURL            = "/oauth/2.0/token"
//	QFAPIKey              = "REDACTED"
//	QFAPISecretKey        = "REDACTED"
//)

// Qianfai 项目基础配置
type Qianfai struct {
	DiffussionXLBaseURL string `yaml:"diffussion_xl_baseurl"` // https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/text2image/sd_xl
	QFBaseURL           string `yaml:"qf_baseurl"`            // https://aip.baidubce.com
	QFTokenURL          string `yaml:"qf_tokenurl"`           // /oauth/2.0/token
	QFAPIKey            string `yaml:"qf_apikey"`             // REDACTED
	QFAPISecretKey      string `yaml:"qf_apisecretkey"`
}
