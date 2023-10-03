const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();


const token = process.env.token;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.on('message',(message)=>{
    console.log(message.text)
    // console.log(message.from.id);
    let chat_id = message.from.id;
    //Middleware
    //DialogFlow
    bot.sendMessage(chat_id,"Hello from nodejs")
})
