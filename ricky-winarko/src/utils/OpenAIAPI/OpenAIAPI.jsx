import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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", //process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const Davinci3API = async (prompt) => {
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0.6,
      max_tokens: 150,
    });

    return completion.data.choices[0].text;
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
    }
  }
};

const GPT3API = async (messages) => {
  // The main input is the messages parameter.
  // Messages must be an array of message objects,
  // where each object has a role (either "system", "user", or "assistant")
  // and content (the content of the message).

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
      temperature: 0.6,
      max_tokens: 150,
    });

    return completion.data.choices[0].message.content;
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
    }
  }
};

const ModerationAPI = async (prompt) => {
  try {
    const result = await openai.createModeration({
      model: "text-moderation-latest",
      input: prompt,
    });

    return result.data.results[0];
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
    }
  }
};

export { Davinci3API, ModerationAPI, GPT3API };
