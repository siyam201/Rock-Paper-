let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// কম্পিউটারের পছন্দ তৈরি করার ফাংশন
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

// ড্র গেমের জন্য ফাংশন
const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
};

// বিজয়ী দেখানোর ফাংশন
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";

  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  
  }
};

// গেম খেলার ফাংশন
const playGame = (userChoice) => {
  // কম্পিউটারের পছন্দ তৈরি করা
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    // ড্র গেম
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // কাঁচি, কাগজ
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // পাথর, কাঁচি
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // পাথর, কাগজ
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

// প্রতিটি পছন্দের জন্য ক্লিক ইভেন্ট যোগ করা
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
