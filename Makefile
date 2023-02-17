# Variables
IMAGE_NAME := chatgpt-demo
CONTAINER_NAME := chatgpt-demo
PORT := 3000
OPENAI_API_KEY := $(shell cat .env | grep OPENAI_API_KEY | cut -d '=' -f 2)

# Build Docker container
build:
	docker build -t $(IMAGE_NAME) .

# Run Docker container
run:
	docker run --rm -p $(PORT):$(PORT) --name $(CONTAINER_NAME) -e OPENAI_API_KEY=$(OPENAI_API_KEY) $(IMAGE_NAME)

# Stop Docker container
stop:
	docker stop $(CONTAINER_NAME)

# Remove Docker container
clean:
	docker rm $(CONTAINER_NAME)

.PHONY: build run stop clean
