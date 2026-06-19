// ============================================================
// ai-chat.js – Prime AI Assistant frontend widget
//
// Flow:
//   1. User types a message or clicks a suggestion button
//   2. Message is POST-ed to /api/ai on the Express server
//   3. Server calls OpenAI (key stays in .env, never sent here)
//   4. Reply is shown in the chat window
//
// Error handling:
//   - 401  → invalid API key
//   - 429/503 → quota exceeded / unavailable
//   - network error → server not running
//   - Any other → generic error with the server's message
// ============================================================

class PrimeAIChat {
  constructor() {
    this.toggleBtn      = document.getElementById("aiChatToggle");
    this.closeBtn       = document.getElementById("aiChatClose");
    this.chatBox        = document.getElementById("aiChatBox");
    this.messagesBox    = document.getElementById("aiChatMessages");
    this.input          = document.getElementById("aiChatInput");
    this.sendBtn        = document.getElementById("aiChatSend");
    this.suggestions    = document.querySelectorAll(".ai-suggestion");

    // Widget HTML not present on this page — do nothing
    if (!this.toggleBtn || !this.chatBox) return;

    this.isSending = false;
    this._bindEvents();
  }

  // ── Event wiring ─────────────────────────────────────────
  _bindEvents() {
    // Open / close the chat box
    this.toggleBtn.addEventListener("click", () => {
      const isHidden = this.chatBox.classList.toggle("hidden");
      if (!isHidden) this.input.focus();
    });

    this.closeBtn.addEventListener("click", () => {
      this.chatBox.classList.add("hidden");
    });

    // Send button click
    this.sendBtn.addEventListener("click", () => this._send());

    // Enter key sends (Shift+Enter = new line)
    this.input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        this._send();
      }
    });

    // Quick suggestion buttons
    this.suggestions.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.input.value = btn.textContent.trim();
        this._send();
      });
    });
  }

  // ── Add a chat bubble ─────────────────────────────────────
  // type: "user" | "bot" | "bot loading"
  _addBubble(text, type) {
    const div = document.createElement("div");
    div.classList.add("ai-message");
    type.split(" ").forEach((c) => div.classList.add(c));
    div.textContent = text;
    this.messagesBox.appendChild(div);
    this.messagesBox.scrollTop = this.messagesBox.scrollHeight;
    return div;
  }

  // ── Toggle send button state ──────────────────────────────
  _setSending(active) {
    this.isSending        = active;
    this.sendBtn.disabled = active;
    this.input.disabled   = active;
    this.sendBtn.innerHTML = active
      ? '<i class="fa-solid fa-spinner fa-spin"></i>'
      : '<i class="fa-solid fa-paper-plane"></i>';
  }

  // ── Main send function ────────────────────────────────────
  async _send() {
    const message = this.input.value.trim();
    if (!message || this.isSending) return;

    this._addBubble(message, "user");
    this.input.value = "";

    // Show thinking indicator
    const thinking = this._addBubble("Thinking…", "bot loading");
    this._setSending(true);

    try {
      const res  = await fetch("/api/ai", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ message })
      });

      const data = await res.json();
      thinking.remove();

      if (!res.ok) {
        // Server returned a structured error — show it clearly
        this._addBubble(
          data.error || "Prime AI encountered an error. Please try again.",
          "bot"
        );
        return;
      }

      this._addBubble(data.reply, "bot");

    } catch (err) {
      // Network-level error — server is likely not running
      thinking.remove();
      this._addBubble(
        "⚠️ Cannot reach the server. Make sure you started it with: node server.js — then refresh the page.",
        "bot"
      );
      console.error("Prime AI fetch error:", err);
    } finally {
      this._setSending(false);
    }
  }
}

// Initialise when DOM is ready
document.addEventListener("DOMContentLoaded", () => new PrimeAIChat());
