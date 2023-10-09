const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionButtons = document.querySelectorAll(".option");
const resultText = document.getElementById("result");
const nextButton = document.getElementById("next-button");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].textContent = currentQuestion.options[i];
        optionButtons[i].addEventListener("click", checkAnswer);
    }
}

function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.answer) {
        score++;
        resultText.textContent = "Correct!";
    } else {
        resultText.textContent = "Wrong!";
    }

    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].removeEventListener("click", checkAnswer);
    }

    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    resultText.textContent = "";
    nextButton.style.display = "none";

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    questionText.textContent = `Quiz Complete! Your Score: ${score}/${questions.length}`;
    optionButtons.forEach((button) => {
        button.style.display = "none";
    });
    nextButton.style.display = "none";
}

displayQuestion();
