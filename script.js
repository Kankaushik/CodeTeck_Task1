const quizData = [
  {
    question: "Which language is used for web apps?",
    options: ["Python", "Java", "C#", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "Which tag is used to link CSS in HTML?",
    options: ["<script>", "<style>", "<link>", "<css>"],
    answer: "<link>"
  },
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Display Object Management",
      "Digital Ordinance Model",
      "Desktop Oriented Mode"
    ],
    answer: "Document Object Model"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Mozilla", "Netscape", "Microsoft", "Oracle"],
    answer: "Netscape"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const scoreText = document.getElementById("score-text");

function loadQuestion() {
  clearState();
  let q = quizData[currentQuestion];
  questionEl.innerText = q.question;

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.addEventListener("click", () => selectAnswer(btn, q.answer));
    optionsEl.appendChild(btn);
  });
}

function selectAnswer(btn, correctAnswer) {
  const allButtons = optionsEl.querySelectorAll("button");
  allButtons.forEach(b => b.disabled = true);

  if (btn.innerText === correctAnswer) {
    btn.style.backgroundColor = "#70bf73";
    feedbackEl.innerText = "✅ Correct!";
    score++;
  } else {
    btn.style.backgroundColor = "#f6695e";
    feedbackEl.innerText = `❌ Incorrect! Correct answer: ${correctAnswer}`;
  }
  scoreText.innerText = `Score: ${score} / ${quizData.length}`;
}

function clearState() {
  optionsEl.innerHTML = "";
  feedbackEl.innerText = "";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    questionEl.innerText = " Quiz Completed!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    feedbackEl.innerText = "";
    scoreText.innerText = `Your final score is ${score} out of ${quizData.length}.`;
  }
});

loadQuestion();
