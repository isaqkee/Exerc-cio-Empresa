function verificarAcesso() {
    const cardNumberInput = document.getElementById('cardNumber');
    const resultElement = document.getElementById('result');
    const cardNumber = parseInt(cardNumberInput.value);
  
    if (cardNumber >= 1000 && cardNumber <= 1999) {
      resultElement.textContent = 'Acesso total concedido.';
      resultElement.style.color = 'green'
    } else if (cardNumber >= 2000 && cardNumber <= 2999) {
      resultElement.textContent = 'Acesso limitado concedido.';
      resultElement.style.color = 'blue'
    } else if (cardNumber >= 3000) {
      resultElement.textContent = 'Acesso negado.';
      resultElement.style.color = 'red'
    } else {
      resultElement.textContent = 'Número de cartão inválido.';
    }
  }