document.addEventListener('DOMContentLoaded', function() {
    const questions = [{
        numero: "1",
        question: "Qual das seguintes opções NÃO é uma linguagem de programação?",
        answers: [
            { text: "HTML", correct: true },
            { text: "Python", correct: false },
            { text: "Java", correct: false },
            { text: "Javascript", correct: false }
        ]
    },
    {
        numero: "2",
        question: "O que significa 'OOP' no contexto da programação?",
        answers: [
            { text: "Object-Oriented Programming", correct: true },
            { text: "Overloaded Operational Parameters", correct: false },
            { text: "Organized Object Protocols", correct: false },
            { text: "Optimized Output Procedure", correct: false }
        ]
    },
    {
        numero: "3",
        question: "Qual a função do comando 'return' em uma função?",
        answers: [
            { text: "Finalizar a execução da função e retornar um valor", correct: true },
            { text: "Executar a função indefinidamente", correct: false },
            { text: "Declarar uma nova variável", correct: false },
            { text: "Invocar outra função", correct: false }
        ]
    },
    {
        numero: "4",
        question: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
        answers: [
            { text: "push()", correct: true },
            { text: "pop()", correct: false },
            { text: "shift()", correct: false },
            { text: "unshift()", correct: false }
        ]
    },
    {
        numero: "5",
        question: "O que significa 'null' em JavaScript?",
        answers: [
            { text: "Ausência intencional de valor", correct: true },
            { text: "Um valor indefinido", correct: false },
            { text: "Um erro de sintaxe", correct: false },
            { text: "Um valor numérico", correct: false }
        ]
    }];

    let buttons = document.querySelectorAll('.answer');
    let totalCurrentQuestion = document.querySelector('.totalCurrentQuestion');
    let questionText = document.querySelector('.question-text');
    let currentlyQuestion = document.querySelector('#currentQuestion');
    let currentlyQuestionIndex = 0;
    let totalScore = 0;

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function showQuestion() {
        const question = questions[currentlyQuestionIndex];
        currentlyQuestion.textContent = question.numero; // Atualiza o número da pergunta
        questionText.textContent = question.question;

        shuffle(question.answers);
        question.answers.forEach((answer, index) => {
            const button = buttons[index];
            const answerText = button.querySelector('.answer-text');
            answerText.textContent = answer.text;
            answerText.dataset.correct = answer.correct;

            button.classList.remove('correct', 'incorrect'); // Limpa as classes
            button.querySelector('.icon').style.display = 'none'; // Esconde os ícones
            button.removeEventListener("click", checkAnswer); // Remove eventos anteriores
            button.addEventListener("click", checkAnswer); // Adiciona evento
        });
    }

    // Lembre-se de chamar esta função para mostrar a primeira pergunta
    showQuestion();

    function nextQuestion() {
        if (currentlyQuestionIndex < questions.length - 1) {
            currentlyQuestionIndex += 1;
            showQuestion();
        } else {
            totalCurrentQuestion.textContent = 'Fim do Quiz!';
            questionText.textContent = 'Obrigado por jogar!';

            // Oculta as respostas
            document.querySelector('.answers').style.display = 'none';
            showResults(); // Chama a função para mostrar os resultados
        }
    }

    // Função para atualizar a barra de progresso
    function updateProgress(isCorrect) {
        const circles = document.querySelectorAll('.circle');
        // Marca o círculo correspondente com ícone
        if (currentlyQuestionIndex < circles.length) {
            circles[currentlyQuestionIndex].textContent = isCorrect ? '✅' : '❌'; // Atualiza com o ícone
        }
        circles.forEach((circle, index) => {
            if (index < currentlyQuestionIndex) {
                circle.classList.add('active'); // Marca a pergunta respondida
            }
        });
    }

    function checkAnswer(event) {
        let selectedButton = event.target.closest('.answer');
        const correct = selectedButton.querySelector('.answer-text').dataset.correct === "true";

        buttons.forEach(button => {
            button.classList.remove('correct', 'incorrect');
            button.querySelector('.icon').style.display = 'none';
        });

        if (correct) {
            selectedButton.classList.add('correct');
            totalScore += 20; // Adiciona 20 pontos
        } else {
            selectedButton.classList.add('incorrect');
        }

        updateProgress(correct); // Atualiza a barra de progresso

        setTimeout(() => {
            selectedButton.classList.remove('correct', 'incorrect');
            nextQuestion(); // Avança para a próxima pergunta
        }, 1000);
    }

    function showResults() {
        document.getElementById('finalScore').textContent = totalScore;
        document.getElementById('resultScreen').style.display = 'block'; // Exibe a tela de resultados
        document.querySelector('.question').style.display = 'none'; // Esconde as perguntas
        document.querySelector('.answers').style.display = 'none'; // Esconde as respostas
    }

    document.getElementById('restartButton').addEventListener('click', function() {
        window.location.reload(true);
    });

    // Renderiza a primeira pergunta
    showQuestion();
});
