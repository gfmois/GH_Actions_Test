const TelegramBot = require('node-telegram-bot-api')
const core = require("@actions/core")

const token = core.getInput("telegram_token")
const chatID = core.getInput("telegram_id_user")

const bot = new TelegramBot(token, { polling: true });

async function run_bot() {
    try {
        const name = process.argv[2];
        const message = `Workflow ejecutado correctamente tras el último commit. Saludos ${name}`;

        await bot.sendMessage(chatID, message)
    } catch (e) {
        core.setFailed("Hubo un error")
    }
} 

run_bot().then(() => core.setOutput('msg', "Mensaje enviado correctamente"))