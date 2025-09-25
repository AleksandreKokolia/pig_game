const newGameEl = document.querySelector(".new");
const rollEl = document.querySelector(".roll_El");
const holdEl = document.querySelector(".hold");
const imgEl = document.querySelector(".img");

const scoreEl1 = document.querySelector(".score1");
const scoreEl2 = document.querySelector(".score2");

const playerEl1 = document.querySelector(".player1");
const playerEl2 = document.querySelector(".player2");

const totalScoreEl1 = document.querySelector(".total_score1");
const totalScoreEl2 = document.querySelector(".total_score2");

let randomNumber;
let score1 = 0;
let score2 = 0;
let totalScore1 = 0;
let totalScore2 = 0;
let gameActive = true;

rollEl.addEventListener("click", () => {
  if (!gameActive) return;

  randomNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(randomNumber);

  imgEl.src = `dice${randomNumber}_n.png`;
  imgEl.classList.remove("hidden");

  if (randomNumber !== 1) {
    if (playerEl1.classList.contains("active")) {
      score1 += randomNumber;
      scoreEl1.textContent = score1;
    } else {
      score2 += randomNumber;
      scoreEl2.textContent = score2;
    }
  } else {
    if (playerEl1.classList.contains("active")) {
      score1 = 0;
      scoreEl1.textContent = 0;
    } else {
      score2 = 0;
      scoreEl2.textContent = 0;
    }
    playerEl1.classList.toggle("active");
    playerEl2.classList.toggle("active");
  }
});

holdEl.addEventListener("click", () => {
  if (!gameActive) return;

  if (playerEl1.classList.contains("active")) {
    totalScore1 += score1;
    totalScoreEl1.textContent = totalScore1;
    score1 = 0;
    scoreEl1.textContent = 0;

    if (totalScore1 >= 100) {
      playerEl1.classList.add("winner");
      playerEl1.classList.remove("active");
      playerEl2.classList.remove("active");
      gameActive = false;
      return;
    }
  } else {
    totalScore2 += score2;
    totalScoreEl2.textContent = totalScore2;
    score2 = 0;
    scoreEl2.textContent = 0;

    if (totalScore2 >= 100) {
      playerEl2.classList.add("winner");
      playerEl2.classList.remove("active");
      playerEl1.classList.remove("active");
      gameActive = false;
      return;
    }
  }

  playerEl1.classList.toggle("active");
  playerEl2.classList.toggle("active");
});

newGameEl.addEventListener("click", () => {
  console.log("clicked");

  score1 = 0;
  score2 = 0;
  totalScore1 = 0;
  totalScore2 = 0;
  gameActive = true;

  scoreEl1.textContent = 0;
  scoreEl2.textContent = 0;
  totalScoreEl1.textContent = 0;
  totalScoreEl2.textContent = 0;

  imgEl.classList.add("hidden");

  playerEl1.classList.add("active");
  playerEl2.classList.remove("active");

  playerEl1.classList.remove("winner");
  playerEl2.classList.remove("winner");
});
