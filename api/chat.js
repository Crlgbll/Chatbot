import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({
  origin: "*",
  methods: ["POST"],
  credentials: true,
}));

const port = 3001;

import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
      max_tokens: 2000,
      temperature: 0.7,
    });

    const formattedMessage = formatMessage(
      response.data.choices[0].message.content
    );
    res.set("Content-Type", "text/html");
    res.send({ message: formattedMessage });
  } catch (error) {
    console.error("Failed to query the chat bot:", error);
    res.status(500).json({ error: "An error occurred while fetching the chat bot response." });
  }

  function formatMessage(message) {
  // replacing all \n escape sequence into an empty string
    return message.replace(/\n/g, " ");
  }
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
