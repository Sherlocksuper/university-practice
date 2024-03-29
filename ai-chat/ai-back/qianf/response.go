package qianf

import (
	"awesomeProject3/api"
	"encoding/json"
	"io/ioutil"
	"net/http"
	"strings"
)

func GenerateImage(accessToken string, resq ImageRequestBody) (string, error) {
	request := resq

	err := request.Validate()
	if err != nil {
		return "", err
	}

	js, _ := json.Marshal(request)

	resp, err := http.Post(api.DIFFUSSION_XL_BASEURL+"?access_token="+accessToken, "application/json", strings.NewReader(string(js)))
	//设置请求头
	resp.Header.Add("Content-Type", "application/json")
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	//读取返回的数据
	body, err := ioutil.ReadAll(resp.Body)
	return string(body), nil
}
