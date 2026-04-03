APP_NAME=server

.PHONY: fmt lint run build

fmt:
	go fmt ./...
lint:
	go vet ./...
run:
	go run main.go
build:
	go build -o ${APP_NAME}
