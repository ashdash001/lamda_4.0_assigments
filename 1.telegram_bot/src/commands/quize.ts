import { getQuize } from "../constants/endPoint";
import { thirtySec } from "../constants/time";
import { Bot } from "../types/types";

const newQuize = async () => {
  const { question, correct_answers, explanation, answers } = await getQuize();

  // Find the correct answer's index
  const options = Object.values(answers).filter(Boolean) as string[];
  const correctAnswerIndex = Object.entries(correct_answers).findIndex(
    ([_, value]) => value === "true"
  );

  return {
    question,
    options,
    correctAnswerIndex,
    explanation: explanation || "",
  };
};

export const quizeCommand = async (bot: Bot) => {
  bot.command("quiz", async (ctx) => {
    const { question, options, correctAnswerIndex, explanation } =
      await newQuize();

    if (!options.length) {
      return ctx.reply("No valid answers available for this quiz.");
    }

    ctx.replyWithPoll(question, options, {
      is_anonymous: false,
      allows_multiple_answers: false,
      correct_option_id: correctAnswerIndex,
      explanation: explanation,
      close_date: 30,
      explanation_entities: explanation,
      open_period: 30,
      explanation_parse_mode: "Markdown",
    });

    setTimeout(() => {
      ctx.reply(
        `⏳ *Time's up!* \n\n✅ *Correct Answer:* ${
          options[correctAnswerIndex]
        } \n\n${
          explanation ? `💡 *Explanation:* ${explanation}` : "google it bro..."
        }`,
        { parse_mode: "Markdown" }
      );
    }, thirtySec);
  });
};
