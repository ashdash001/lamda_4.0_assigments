import { Context, Telegraf } from "telegraf";
import { Update } from "telegraf/typings/core/types/typegram"

export interface Bot extends Telegraf<Context<Update>> {}

export interface AlgorithmType {
  cmd_text: string;
  desc: string;
  code: string;
  cmd: string;
}
