let quizData = [
    {question: "What does HTML stand for? ",
    a: "Hyperlinks Markup Language",
    b: "HyperText Marking Language ",
    c: "HomeTools Marking Language ",
    d: "HyperText Markup Language",
    correct: "d"},
    {
    question: "Choose the correct HTML element for the largest heading:",
    a: "<head>",
    b: "<h1>",
    c: "<h6>",
    d: "<heading>",
    correct: "b"
    },
    {
    question: "What does CSS stand for?",
    a: "Creative Style Sheets",
    b: "Colorful Style Sheets",
    c: "Cascading Style Sheets",
    d: "Computer Style Sheets",
    correct: "c"
    },
    {
    question: "Inside which HTML element do we put the JavaScript?",
    a: "<script>",
    b: "<javascript>",
    c: "<scripting>",
    d: "<js>",
    correct: "a"
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEL = document.getElementById("Question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("submit");
const prev = document.getElementById("prevbtn");
const next = document.getElementById("nextbtn");

let currentQuiz = 0;
let score = 0;
let userAnswers = new Array(quizData.length).fill(null); 

loadQuiz();

function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionEL.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    if (userAnswers[currentQuiz]) {
        document.getElementById(userAnswers[currentQuiz]).checked = true; 
    }
}

function deselectAnswer() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submit.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        userAnswers[currentQuiz] = answer; 
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly.</h2>`;
        }
    }
});

document.getElementById("prevbtn").addEventListener("click", () => {
    if (currentQuiz > 0) {
        currentQuiz--;
        loadQuiz();
    }
});

document.getElementById("nextbtn").addEventListener("click", () => {
    if (currentQuiz < quizData.length - 1) {
        currentQuiz++;
        loadQuiz();
    }
});

let timeLeft = 1 * 60; 

const timerInterval = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('timer').textContent = `${minutes}:${seconds}`;
    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(timerInterval);
        document.getElementById('timer').textContent = "Time's up!";
        document.getElementById("submit").style.display = "none";
        quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly.</h2>`;
    }
}, 1000);

