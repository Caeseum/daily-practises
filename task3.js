class Communication {
    constructor(question) {
        this.question = question.trim().toLowerCase();
    }

    reply() {
        if (this.question.includes("hello")) {
            return "Hey there!";
        }
        if (this.question.includes("how are you")) {
            return "I'm just a code running perfectly.";
        }
        if (this.question.includes("whats your name")) {
            return "My name is Javice, your first home-made AI.";
        }
        if (this.question.includes("whats your plan")) {
            return "My plan is to keep learning and make human life easier. If anything changes, I'll let you know.";
        }
        return "I don't understand yet... teach me.";
    }
}

// Continuous chat loop
while (true) {
    const input = prompt("Ask me something (or type 'exit' to quit):");
    if (!input || input.toLowerCase() === "exit") {
        alert("Goodbye!");
        break;
    }
    const chat = new Communication(input);
    alert(chat.reply());
}