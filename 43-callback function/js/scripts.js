/*
Callback, é uma função usada como argumento de outra função)

Você entendeu muito bem! Seu código é um ótimo exemplo de como os 
callbacks funcionam em JavaScript. Vamos resumir o que está acontecendo no seu código:

Você tem três funções: exibir, soma, e multiplicacao.

A função exibir é responsável por mostrar o resultado de uma operação.

As funções soma e multiplicacao recebem dois números e uma função de callback como parâmetros.

Dentro de soma e multiplicacao, você realiza as operações matemáticas (adição e multiplicação, respectivamente) e, em seguida, chama a função de callback (callback ou cb) passando o resultado como argumento.

Você chama soma com os argumentos 2 e 2, e multiplicacao com os argumentos 2 e 4. Ambas as chamadas incluem a função exibir como callback.

Quando as operações são concluídas dentro de soma e multiplicacao, as funções de callback (exibir) são chamadas com os resultados.*/

function exibir(num) {
    console.log("A operação resultou em: " + num);
  }
  
  function soma(a, b, callback) {
    var op = a + b;
    callback(op);
  }
//OBS: a palavra callback pode ser abreviada por cb

  function multiplicacao(a, b, cb) {
    var op = a * b;
    cb(op);
  }
  
  soma(2, 2, exibir);
  
  multiplicacao(2, 4, exibir);