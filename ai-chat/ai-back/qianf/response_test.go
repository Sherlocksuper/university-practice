package qianf

import (
	"awesomeProject3/api"
	"testing"
)

func TestGenerateImage(t *testing.T) {
	token, err := Token(api.QFAPIKey, api.QFAPISecretKey)
	if err != nil {
		t.Errorf("TestToken failed")
	}
	body := ImageRequestBody{
		Prompt: "A photo of a cat",
	}
	image, err := GenerateImage(token.AccessToken, body)
	if err != nil {
		t.Error("TestGenerateImage failed, err:", err)
		return
	}
	t.Log(image)
}
