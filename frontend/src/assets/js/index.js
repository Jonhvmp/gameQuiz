const questions = [  {
    question: "Qual das seguintes opções NÃO é uma linguagem de programação?",
    answers: [
        { text: "HTML", correct: true },
        { text: "Python", correct: false },
        { text: "Java", correct: false },
        { text: "Javascript", correct: false }
    ]
},
{
    question: "O que significa'OOP' no contexto da programação?",
    answers: [
        { text: "Object-Oriented Programming", correct: true },
        { text: "Overloaded Operational Parameters", correct: false },
        { text: "Organized Object Protocols", correct: false },
        { text: "Optimized Output Procedure", correct: false }
    ]
},
{
    question: "Qual a função do comando 'return' em uma função?",
    answers: [
        { text: "Finalizar a execução da função e retornar um valor", correct: true },
        { text: "Executar a função indefinidamente", correct: false },
        { text: "Declarar uma nova variável", correct: false },
        { text: "Invocar outra função", correct: false }
    ]
},
{
    question: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
    answers: [
        { text: "push()", correct: true },
        { text: "pop()", correct: false },
        { text: "shift()", correct: false },
        { text: "unshift()", correct: false }
    ]
},
{
question: "O que significa 'null' em JavaScript?",
answers: [
    { text: "Ausência intencional de valor", correct: true },
    { text: "Um valor indefinido", correct: false },
    { text: "Um erro de sintaxe", correct: false },
    { text: "Um valor numérico", correct: false }
]
},
]

//declaração com o query
let answerText = document.querySelectorAll('.answer-text');
let buttons = document.querySelectorAll('.answer');
let totalCurrentQuestion = document.querySelector('.totalCurrentQuestion')
let questionText = document.querySelector('.question-text');
let currentlyQuestion = document.querySelector('#currentQuestion');
let currentlyQuestionIndex = 0; 


function showQuestion() {

const question = questions[currentlyQuestionIndex]; //Perguntas separadas por index

currentlyQuestion.textContent = currentlyQuestionIndex  + 1;

questionText.textContent = question.question;
question.answers.forEach((answer, index ) => {
const button = buttons[index];
const answers = answerText[index];
answers.textContent = answer.text;
answers.dataset.correct = answer.correct;

button.removeEventListener("click", nextQuestion);

button.addEventListener("click", nextQuestion)
}) 
};


function nextQuestion() {
    if(currentlyQuestionIndex < questions.length - 1 ) {
        currentlyQuestionIndex += 1;
        showQuestion();
    }
    else{
totalCurrentQuestion.textContent = '';
totalCurrentQuestion.textContent = 'Sem Perguntas!';
questionText.textContent =   '';
questionText.textContent =   'Não há mais perguntas!';

for(i=0;i<=4;i++) { 
answerText[i].textContent ='';
}
}
    }


function checkAnswer() { 
    question.answers.forEach((answer, index ) => {
const answers = buttons[index];
if(answers.dataset.correct == "true") {

}
else {

}
 })
}

showQuestion();
