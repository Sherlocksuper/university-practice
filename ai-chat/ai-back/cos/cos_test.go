package cos

import (
	"os"
	"testing"
)

func TestSaveImage(t *testing.T) {
	SaveImage(imageCode)
}

func TestNewClient(t *testing.T) {
	NewClient(imageCode)
}

func TestHello(t *testing.T) {
	haha := os.Getenv("DOCKER")
	t.Log(haha)
}
