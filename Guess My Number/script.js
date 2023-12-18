let matchNumber = Math.trunc(Math.random() * 20) + 1;
console.log(matchNumber);
let score = 20;
let highScore = 0;
const resultMessage = (msg) => {
  document.querySelector(".message").textContent = msg;
};
const scoreResult = (inputScore) => {
  document.querySelector(".score").textContent = inputScore;
};
document.querySelector(".check").addEventListener(
  "click",
  (inputNumber = () => {
    const userInput = Number(document.querySelector(".guess").value);
    if (matchNumber === userInput) {
      document.querySelector(".number").innerHTML = matchNumber;
      resultMessage("🥇Correct Answer");
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
    } else if (!userInput) {
      resultMessage("🙏Please Enter a Number");
    } else if (matchNumber !== userInput) {
      if (score > 1) {
        resultMessage(
          matchNumber < userInput ? "📈Too High..." : "📉Too Low..."
        );

        score--;
        scoreResult(score);
      } else {
        scoreResult(0);
        resultMessage("💥You Lost");
      }
    }
  })
);

document.querySelector(".again").addEventListener("click", () => {
  matchNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  resultMessage("Start guessing...");
  document.querySelector(".number").innerHTML = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  scoreResult(score);
  document.querySelector(".guess").value = "";
});
