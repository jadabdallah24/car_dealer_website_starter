class PrimeAIChat {
  constructor() {
    this.toggleBtn = document.getElementById("aiChatToggle");
    this.closeBtn = document.getElementById("aiChatClose");
    this.chatBox = document.getElementById("aiChatBox");
    this.messagesBox = document.getElementById("aiChatMessages");
    this.input = document.getElementById("aiChatInput");
    this.sendBtn = document.getElementById("aiChatSend");
    this.suggestionButtons = document.querySelectorAll(".ai-suggestion");

    if (!this.toggleBtn || !this.chatBox) return;

    this.addEvents();
  }

  addEvents() {
    this.toggleBtn.addEventListener("click", () => {
      this.chatBox.classList.toggle("hidden");
    });

    this.closeBtn.addEventListener("click", () => {
      this.chatBox.classList.add("hidden");
    });

    this.sendBtn.addEventListener("click", () => this.sendMessage());

    this.input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        this.sendMessage();
      }
    });

    this.suggestionButtons.forEach((button) => {
      button.addEventListener("click", () => {
        this.input.value = button.textContent;
        this.sendMessage();
      });
    });
  }

  addMessage(text, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("ai-message");

    sender.split(" ").forEach((className) => {
      messageDiv.classList.add(className);
    });

    messageDiv.textContent = text;
    this.messagesBox.appendChild(messageDiv);
    this.messagesBox.scrollTop = this.messagesBox.scrollHeight;

    return messageDiv;
  }

  async sendMessage() {
    const message = this.input.value.trim();

    if (!message) return;

    this.addMessage(message, "user");
    this.input.value = "";

    const loadingMessage = this.addMessage("Thinking...", "bot loading");

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
      });

      const data = await response.json();

      loadingMessage.remove();

      if (!response.ok) {
        this.addMessage(data.error || "AI assistant error.", "bot");
        return;
      }

      this.addMessage(data.reply, "bot");
    } catch (error) {
      loadingMessage.remove();
      this.addMessage("Server error. Make sure node server.js is running.", "bot");
      console.error(error);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new PrimeAIChat();
});