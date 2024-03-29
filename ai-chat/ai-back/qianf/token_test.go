package qianf

import (
	"fmt"
	"testing"
)

func TestToken(t *testing.T) {
	token, err := Token("REDACTED", "REDACTED")
	fmt.Println(token.AccessToken)
	if err != nil {
		t.Errorf("TestToken failed")
	}
}
