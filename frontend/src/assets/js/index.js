document.addEventListener('DOMContentLoaded', function () {
    // declaração de variáveis
    const resultSection = document.getElementById('result-section');
    const quizSection = document.getElementById('quiz-section');

    const questions = [{
        question: "Qual das seguintes opções NÃO é uma linguagem de programação?",
        answers: [
            
            { text: "Python", correct: false },
            { text: "HTML", correct: true },
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

            { text: "Executar a função indefinidamente", correct: false },
            { text: "Declarar uma nova variável", correct: false },
            { text: "Invocar outra função", correct: false },
            { text: "Finalizar a execução da função e retornar um valor", correct: true }
        ]
    },
    {
        question: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
        answers: [
            { text: "pop()", correct: false },
            { text: "push()", correct: true },
            { text: "shift()", correct: false },
            { text: "unshift()", correct: false }
        ]
    },
    {
        question: "O que significa 'null' em JavaScript?",
        answers: [
            { text: "Um valor indefinido", correct: false },
            { text: "Um erro de sintaxe", correct: false },
            { text: "Ausência intencional de valor", correct: true },
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

        currentlyQuestion.textContent = currentlyQuestionIndex + 1;

        questionText.textContent = question.question;
        question.answers.forEach((answer, index) => {
            const button = buttons[index];
            const answers = answerText[index];
            answers.textContent = answer.text;
            answers.dataset.correct = answer.correct;
           
   
            button.addEventListener("click", checkAnswer);
            button.removeEventListener("click", nextQuestion);
            button.addEventListener("click", nextQuestion)
        })
    };


    function nextQuestion() {
        if (currentlyQuestionIndex < questions.length - 1) {
            currentlyQuestionIndex += 1;
            showQuestion();
        }
        else {
            resultSection.style.display = "flex";

        }
    }

    function checkAnswer(event) {
        const selectedButton = event.target.closest('.answer');
        const selectedAnswer = selectedButton.querySelector('.answer-text').textContent;
        
        const questionAnswers = questions[currentlyQuestionIndex].answers;
        
        const correctAnswer = questionAnswers.find((answer) => answer.text === selectedAnswer);

        console.log(correctAnswer); // Verifique o que está sendo retornado

       if(correctAnswer.correct === true) {
        alert("acertou!");
       }
       else{
        alert("errou!");
       }
    }

    showQuestion();

    // console log para verificar se o index.js está funcionando
    console.log(`O index.js está funcionando!`);
    // console da variável questions
    console.log(`As perguntas são: ${questions}`);
    // console da pergunta atual
    console.log(`A pergunta atual é: ${currentlyQuestionIndex}`);
    console.log(`A pergunta ${currentlyQuestionIndex} é: ${questions[currentlyQuestionIndex]}`);
});
