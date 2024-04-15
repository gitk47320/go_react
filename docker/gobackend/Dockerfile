FROM golang:alpine
RUN apk update && apk add alpine-sdk
WORKDIR /app/go
COPY gobackend .
RUN go mod download
COPY *.go ./

