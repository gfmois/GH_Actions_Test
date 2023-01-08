const TelegramBot = require('node-telegram-bot-api')
const core = require("@actions/core")

const token = core.getInput("telegram_token")
const chatID = core.getInput("telegram_id_user")

const bot = new TelegramBot(token, { polling: true });

try {
    const name = core.getInput("name");
    const message = `Workflow ejecutado correctamente tras el último commit. Saludos ${name}`;

    bot.sendMessage(chatID, message)
    core.setOutput('msg', "Mensaje enviado correctamente")
} catch (e) {
    core.setFailed(e.message)
}