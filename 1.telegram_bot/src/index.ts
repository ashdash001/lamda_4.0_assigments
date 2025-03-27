import "dotenv/config";
import express from "express";
import bot from "./config/configBot";
import { botInfo, LernCommand, undefinedCommand } from "./bot";
import { quizeCommand } from "./commands/quize";
import { _PORT, RENDER_EXTERNAL_URL, TELEBOT_KEY } from "./constants/getEnv";

const app = express();
app.use(express.json());

// Initialize bot commands
botInfo(bot);
LernCommand(bot);
quizeCommand(bot);
undefinedCommand(bot);

// Webhook route
app.post(`/webhook/${TELEBOT_KEY}`, (req, res) => {
  bot.handleUpdate(req.body);
  res.sendStatus(200);
});

// Set webhook dynamically
const WEBHOOK_URL = `https://${RENDER_EXTERNAL_URL}/webhook/${TELEBOT_KEY}`;
bot.telegram.setWebhook(WEBHOOK_URL);

// Keep Render happy
app.get("/", (req, res) => {
  res.send("Bot is running!");
});

// Start Express server
const PORT = _PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Graceful shutdown
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
