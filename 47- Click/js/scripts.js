/*onload é um evento JavaScript que permite que um trecho de código seja executado
somente quando todo o DOM foi completamente carregado no navegador.*/
window.onload = function() {

  console.log("Carregou o DOM");

  var title2 = document.querySelector("#title");

  console.log(title2);

}

console.log("Carregou o JS");

var title = document.querySelector("#title");

console.log(title);