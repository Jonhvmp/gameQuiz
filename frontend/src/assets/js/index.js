window.onload = function() {
  let userName = prompt('Qual é o seu nome?');

  while (!userName || !isNaN(userName) || userName.length < 3 || userName.trim() === '') {
    userName = prompt('Por favor, informe um nome válido! Com no mínimo 3 caracteres.');
  }

  // retornando uma saudação ao usuario via alert
  alert(`Olá, ${userName}! Bem-vindo ao Game Quiz! Clique em Jogar para começar!`);
};
