import { Telegraf } from "telegraf";
import { TELEBOT_KEY } from "../constants/getEnv";

const bot = new Telegraf(TELEBOT_KEY);

export default bot;
