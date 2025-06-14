const teddy = document.getElementById("teddy");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");

let score = 0;
let timeLeft = 30;

function moveTeddyRandomly() {
  const x = Math.random() * (window.innerWidth - 60);
  const y = Math.random() * (window.innerHeight - 150);
  teddy.style.left = `${x}px`;
  teddy.style.top = `${y}px`;
}

teddy.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
  moveTeddyRandomly();
});

const countdown = setInterval(() => {
  timeLeft--;
  timerDisplay.textContent = timeLeft;
  if (timeLeft <= 0) {
    clearInterval(countdown);
    teddy.style.display = "none";
    alert(`⏰ Time's up! You caught the teddy ${score} times! 🎉`);
  }
}, 1000);

moveTeddyRandomly();

