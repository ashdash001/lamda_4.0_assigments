import {
  aboutText,
  basicText,
  helpText,
  moreText,
  undefinedText,
  welcomeText,
} from "./data/info";
import { Algorithms } from "./data/dsa_algos";
import { AlgorithmType, Bot } from "./types/types";

export const botInfo = (bot: Bot) => {
  bot.start((ctx) => ctx.reply(welcomeText));
  bot.help((ctx) => ctx.reply(helpText));
  bot.command("about", (ctx) =>
    ctx.reply(aboutText, { parse_mode: "Markdown" })
  );
  bot.command("more", (ctx) => ctx.reply(moreText));
  bot.hears(["hi", "hello", "hey"], async (ctx) => {
    await ctx.reply(basicText, { parse_mode: "Markdown" });
  });
};

const dsaCmd = () => {
  return Algorithms.map(
    (algo: AlgorithmType) => `/${algo.cmd} - _${algo.desc}_ \n`
  );
};

const dsaCmdOnly = () => {
  return Algorithms.map((algo: AlgorithmType) => `/${algo.cmd}`);
};
export const LernCommand = (bot: Bot) => {
  bot.command("learn", (ctx) => {
    ctx.reply(dsaCmd().join(`\n`) + "\nType /learn to go back !", {
      parse_mode: "Markdown",
    });
  });

  Algorithms.map((algo: AlgorithmType) =>
    bot.command(algo.cmd, (ctx) =>
      ctx.reply(
        `*${algo.cmd_text}*\n\n_${algo.desc}_\n\n\`\`\`cpp\n${algo.code}\n\`\`\``,
        {
          parse_mode: "Markdown",
        }
      )
    )
  );
};

export const undefinedCommand = (bot: Bot) => {
  bot.on("text", async (ctx) => {
    const userMessage = ctx.message.text;
    // List of valid commands
    const validCommands = [
      "/start",
      "/quiz",
      "/help",
      "/more",
      ...dsaCmdOnly(),
    ];

    if (!validCommands.includes(userMessage)) {
      await ctx.reply(undefinedText, { parse_mode: "Markdown" });
    }
  });
};
