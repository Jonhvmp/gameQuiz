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

let answerText = Document.queryselector('.answer-text');
let buttonAnswer = Document.queryselector('.answers');
let questionText = Document.queryselector('.question-text');
let currentlyQuestionIndex = 0; 



function showQuestion () {
const question = questions[currentQuestionIndex];

questionText.textContent = question.question;

answerText.textContent = question.answers.foreach((answer, index ) => {
answer[index].textContent = text[index];
answer[index].addEventListener("click", selectAnswer);
}); 

currentQuestionIndex++;  
}

function nextQuestion() {
currentQuestionIndex++; 
if(currentlyQuestionIndex >= questions.length )  {
    questionText.textContent = "Acabaram as questões!"
}
else {
showQuestion();
}
}



questionText.textContent = ''; //Limpar preenchimento.
 answerText.textContent = ''; //Limpar preenchimento.
