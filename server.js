const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();

app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post("/chat", async (req, res) => {
  try {
    const response = await client.responses.create({
      model: "gpt-5.6",
      input: req.body.message
    });

    res.json({
      reply: response.output_text
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "AI connection failed."
    });
  }
});

app.get("/", (req, res) => {
  res.send("My AI Assistant is running!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});