package cos

import (
	"os"
	"testing"
)

func TestSaveImage(t *testing.T) {
}

func TestNewClient(t *testing.T) {
}

func TestHello(t *testing.T) {
	haha := os.Getenv("DOCKER")
	t.Log(haha)
}
