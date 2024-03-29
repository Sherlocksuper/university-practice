package cos

import (
	"awesomeProject3/api"
	"context"
	"encoding/base64"
	"github.com/tencentyun/cos-go-sdk-v5"
	"io/ioutil"
	"net/http"
	"net/url"
	"os"
	"strings"
)

func NewClient(imageCode string) {
	var u, _ = url.Parse(api.COS_BASEURL)
	var b = &cos.BaseURL{BucketURL: u}

	var c = cos.NewClient(b, &http.Client{
		Transport: &cos.AuthorizationTransport{
			SecretID:  os.Getenv(api.COS_SECRETID),  // 用户的 SecretId，建议使用子账号密钥，授权遵循最小权限指引，降低使用风险。子账号密钥获取可参考 https://cloud.tencent.com/document/product/598/37140
			SecretKey: os.Getenv(api.COS_SECRETKEY), // 用户的 SecretKey，建议使用子账号密钥，授权遵循最小权限指引，降低使用风险。子账号密钥获取可参考 https://cloud.tencent.com/document/product/598/37140
		},
	})

	name := "test.png"

	decodeString, err := base64.StdEncoding.DecodeString(imageCode)
	if err != nil {
		return
	}

	fd := strings.NewReader(string(decodeString))

	_, err = c.Object.Put(context.Background(), name, fd, nil)
	if err != nil {
		panic(err)
	}
}

func SaveImage(imageCode string) {
	decodeString, err := base64.StdEncoding.DecodeString(imageCode)
	if err != nil {
		return
	}
	err = ioutil.WriteFile("test.png", decodeString, 0644)
	if err != nil {
		return
	}
}
