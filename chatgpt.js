import { ChatGPTAPI } from 'chatgpt'
import fetch from 'node-fetch'

const apiKey = process.env.OPENAI_API_KEY
const api = new ChatGPTAPI({
    apiKey: apiKey,
    fetch: fetch,
})

const sendMessage = async (message, opts = {
    conversationId: undefined,
    parentMessageId: undefined,
    messageId: undefined,
    abortSignal: undefined,
}) => {
    return await api.sendMessage(message, {
        conversationId: opts.conversationId || undefined,
        parentMessageId: opts.parentMessageId || undefined,
        messageId: opts.messageId || undefined,
        abortSignal: opts.abortSignal || undefined,
    })
}

export {
    sendMessage,
}