const { Telegraf } = require("telegraf");
const TOKEN = "7306678663:AAHgR5BSqbU3MOkVveizPOHlvC8TlhyxfZo";
const bot = new Telegraf(TOKEN);

const web_link = "http://localhost:3000/";

bot.start((ctx) =>
  ctx.reply("Добро пожаловать в TopStop", {
    reply_markup: {
      keyboard: [[{ text: "Запустить", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
