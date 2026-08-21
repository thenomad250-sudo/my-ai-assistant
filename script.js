function sendMessage() {
  const input = document.getElementById("userInput");
  const chat = document.getElementById("chat");

  const message = input.value.trim();

  if (message === "") return;

  const userMessage = document.createElement("div");
  userMessage.className = "message user";
  userMessage.textContent = message;

  chat.appendChild(userMessage);

  input.value = "";

  const assistantMessage = document.createElement("div");
  assistantMessage.className = "message assistant";
  assistantMessage.textContent =
    "I'm ready! My AI brain will be connected in the next step. 🧠";

  chat.appendChild(assistantMessage);

  chat.scrollTop = chat.scrollHeight;
}