const reel1 = document.getElementById("reel1");
const reel2 = document.getElementById("reel2");
const reel3 = document.getElementById("reel3");
const spinButton = document.getElementById("spin-button");
const message = document.getElementById("message");

// Array of symbols
const symbols = ["🍒", "🍋", "🍉", "🍇", "🍊", "🍓", "⭐", "💎"];

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function spinReels() {
    reel1.textContent = getRandomSymbol();
    reel2.textContent = getRandomSymbol();
    reel3.textContent = getRandomSymbol();

    if (reel1.textContent === reel2.textContent && reel2.textContent === reel3.textContent) {
        message.textContent = "🎉 You Win!";
    } else {
        message.textContent = "Try Again. . ."
    }
}

function spinReels() {
    reel1.classList.add("spin");
    reel2.classList.add("spin");
    reel3.classList.add("spin");
    message.textContent = "Spinning...";

        setTimeout(() => {
        reel1.classList.remove("spin");
        reel2.classList.remove("spin");
        reel3.classList.remove("spin");

        reel1.textContent = getRandomSymbol();
        reel2.textContent = getRandomSymbol();
        reel3.textContent = getRandomSymbol();

        if (reel1.textContent === reel2.textContent && reel2.textContent === reel3.textContent) {
            message.textContent = "🎉 You Win!";
        } else {
            message.textContent = "Try Again..."
        }
    }, 1000);
}

spinButton.addEventListener("click", spinReels, true);