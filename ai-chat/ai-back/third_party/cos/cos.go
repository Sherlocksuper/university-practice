package cos

import (
	"awesomeProject3/api"
	"context"
	"encoding/base64"
	"github.com/rs/zerolog/log"
	"github.com/tencentyun/cos-go-sdk-v5"
	"net/http"
	"net/url"
	"strings"
)

var u, _ = url.Parse(api.COS_BASEURL)
var b = &cos.BaseURL{BucketURL: u}

var c = cos.NewClient(b, &http.Client{
	Transport: &cos.AuthorizationTransport{
		SecretID:  api.COS_SECRETID,
		SecretKey: api.COS_SECRETKEY,
	},
})

func SaveImageByBase64(imageCode string, name string) (string, error) {
	decodeString, err := base64.StdEncoding.DecodeString(imageCode)

	if err != nil {
		log.Error().Str("step", "at decodeString").Msg(err.Error())
		return "", err
	}

	fd := strings.NewReader(string(decodeString))
	_, err = c.Object.Put(context.Background(), name, fd, nil)

	if err != nil {
		log.Error().Str("step", "at c.Object.Put").Msg(err.Error())
		panic(err)
	}
	log.Info().Str("step", "at c.Object.Put").Str("url", api.COS_BASEURL+"/"+name).Msg("success")
	//返回图片地址
	return api.COS_BASEURL + "/" + name, nil
}
