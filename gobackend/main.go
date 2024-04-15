package main

import (
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type message struct {
	Message string `json:"message"`
}

var ping = []message{
	{Message: "ping"},
}

var hello = []message{
	{Message: "hello"},
}

func getPing(c *gin.Context) {
	c.JSON(http.StatusOK, ping)
}

func getHello(c *gin.Context) {
	c.JSON(http.StatusOK, hello)
}

func setupRouter() *gin.Engine {
	r := gin.Default()
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"*"}
	r.Use(cors.New(config))
	r.GET("/ping", getPing)
	r.GET("/hello", getHello)
	return r
}

func main() {
	r := setupRouter()
	r.Run()
}
