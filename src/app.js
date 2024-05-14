import "./style.css";

document.addEventListener("DOMContentLoaded", function() {
  const suits = ["♦", "♥", "♠", "♣"];
  const numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  function generateRandomCard() {
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    return { suit: randomSuit, number: randomNumber };
  }

  function displayRandomCard() {
    const card = generateRandomCard();
    document.querySelector(".top-suit").textContent = card.suit;
    document.querySelector(".bottom-suit").textContent = card.suit;
    document.querySelector(".number").textContent = card.number;

    // Set color to red for heart and diamond suits
    if (card.suit === "♥" || card.suit === "♦") {
      document.querySelectorAll(".top-suit, .bottom-suit").forEach(element => {
        element.style.color = "red";
      });
    } else {
      document.querySelectorAll(".top-suit, .bottom-suit").forEach(element => {
        element.style.color = "black";
      });
    }
  }

  displayRandomCard();

  document.querySelector(".card").addEventListener("click", displayRandomCard);
});

window.onload = function() {
  console.log("");
};
