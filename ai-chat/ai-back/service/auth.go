package service

import (
	"awesomeProject3/api"
	"errors"
	"fmt"
	"github.com/rs/zerolog/log"
	"golang.org/x/crypto/bcrypt"
)

type AuthService interface {
	Login(user *api.User) error
	HasNameOrEmail(name string, email string) error
	Register(username, email, password string) error
	ResetPassword(email string, password string) error
}

type authService struct{}

func NewAuthService() AuthService {
	return &authService{}
}

func (auth authService) HasNameOrEmail(name string, email string) error {
	var user api.User

	api.Db.Where("name = ?", name).First(&user)
	if user.ID != 0 {
		return errors.New("用户名已存在")
	}

	api.Db.Where("email = ?", email).First(&user)
	if user.ID != 0 {
		return errors.New("邮箱已存在")
	}

	fmt.Println(user)

	return nil
}

func (auth authService) Register(username, email, password string) error {
	log.Info().Msg("用户名字:" + username + "密码:" + password + "  注册" + "location is :service/user.go  Register")
	err := auth.HasNameOrEmail(username, email)
	if err != nil {
		return err
	}

	//密码加密
	fromPassword, _ := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	api.Db.Create(&api.User{Name: username, Email: email, Password: string(fromPassword)})
	return nil
}

func (auth authService) ResetPassword(email string, password string) error {
	var user api.User
	api.Db.Where("email = ?", email).First(&user)
	if user.ID == 0 {
		return errors.New("用户不存在")
	}
	fromPassword, _ := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	api.Db.Model(&user).Update("password", string(fromPassword))
	return nil
}

func (auth authService) Login(user *api.User) error {
	log.Info().Msg("用户" + user.Email + "密码" + user.Password + "   登录")
	password := user.Password
	api.Db.Where("email = ?", user.Email).First(&user)
	if user.ID == 0 {
		return errors.New("用户不存在")
	}
	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password)); err != nil {
		return errors.New("密码错误")
	}
	return nil
}

func (auth authService) updateUser(user *api.User) error {
	return nil
}
