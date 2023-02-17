import Express from "express";
import { sendMessage } from "./chatgpt.js"

const app = Express();

const send = async (req, res) => {
    const controller = new AbortController();
    const signal = controller.signal;

    req.on("close", () => {
        console.log("Request closed");
        controller.abort();
    });

    req.on("error", (err) => {
        console.log("Request error");
        controller.abort();
    });

    const message = req.body?.message || req.query?.message;
    if (!message) {
        res.json({
            error: "No message provided",
        });
        return;
    }

    const conversationId = req.body?.conversationId || req.query?.conversationId;
    const parentMessageId = req.body?.parentMessageId || req.query?.parentMessageId;
    const messageId = req.body?.messageId || req.query?.messageId;

    console.log("Sending message", message, conversationId, parentMessageId, messageId);
    const response = await sendMessage(message, {
        abortSignal: signal,
        conversationId: conversationId,
        parentMessageId: parentMessageId,
        messageId: messageId,
    });

    res.json({
        engine: "ChatGPT",
        result: response,
    });
}

app.get("/", (req, res) => {
    res.json({
        message: "ChatGPT API",
    })
});

app.get("/send", send);
app.post("/send", send);

export default app;