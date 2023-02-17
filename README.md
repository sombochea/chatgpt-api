# ChatGPT API using Express + Nodejs

-   Send Message (Support context with `parentMessageId`)

### Usages

-   Send the message

```shell
curl http://localhost:3000/send?message=hello
```

Response

```json
{
    "engine": "ChatGPT",
    "result": {
        "role": "assistant",
        "id": "cmpl-xxx",
        "parentMessageId": "f1e68214-xxx",
        "conversationId": "d50e1830-xxx",
        "text": "Hello there! How can I help you today?",
        "detail": {
            "id": "cmpl-xxx",
            "object": "text_completion",
            "created": 1676600857,
            "model": "text-davinci-003",
            "choices": [
                {
                    "text": "\nHello there! How can I help you today?",
                    "index": 0,
                    "logprobs": null,
                    "finish_reason": "stop"
                }
            ],
            "usage": {
                "prompt_tokens": 57,
                "completion_tokens": 11,
                "total_tokens": 68
            }
        }
    }
}
```

-   Parameters

```
- message: The message to send
- parentMessageId: Parse the prevoius context to current conversation
- conversationId: Message conversation Id
- messageId: Message Id
```

### Contributors

-   Sambo Chea <sombochea@cubetiqs.com>
