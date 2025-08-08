// 🎯 PART 1: JavaScript Basics

let userName = prompt("What's your name?");
const output = document.getElementById("output");

if (userName && userName.trim() !== "") {
  console.log("User entered name:", userName);
  output.innerText = `Hello, ${userName}!`;
} else {
  userName = "Guest";
  console.log("No name entered, using default.");
  output.innerText = `Hello, ${userName}!`;
}

// PART 2: Functions

function calculateTotal(price, taxRate) {
  return price + (price * taxRate);
}

function formatName(name) {
  return name.trim().toUpperCase();
}

// Example usage
console.log("Total with tax:", calculateTotal(150, 0.18));
console.log("Formatted name:", formatName(userName));

// 🔁 PART 3: Loops

// Loop 1: List even numbers 1–10
console.log("Even Numbers 1 to 10:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) console.log(i);
}

// Loop 2: Countdown using a button
function startCountdown() {
  let count = 5;
  const interval = setInterval(() => {
    output.innerText = `Countdown: ${count}`;
    count--;
    if (count < 0) {
      clearInterval(interval);
      output.innerText = "Countdown Complete!";
    }
  }, 1000);
}
document.getElementById("countdownBtn").addEventListener("click", startCountdown);

// PART 4: DOM Manipulation

// 1. Greeting Button
document.getElementById("greetBtn").addEventListener("click", () => {
  alert(`Hi, ${userName}! Hope you're enjoying JavaScript.`);
});

// 2. Toggle Theme
document.getElementById("toggleThemeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

// 3. Add items to list using loop
const items = ["HTML", "CSS", "JavaScript"];
const itemList = document.getElementById("itemList");

items.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  itemList.appendChild(li);
});