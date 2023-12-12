// REMOVER ELEMENTO DE UMA DIV NO HTML USANDO JS


// MÉTODO PARA REMOVER ELEMENTO FILHO

//PASSO 1: Mapeie a div (esse é o elemento pai)
var container = document.querySelector("#container");

//PASSO 2: Mapeie o elemento filho
var p = document.querySelector("#container p");

//PASSO 3: De o comando para remover o elemento
container.removeChild(p);


// MÉTODO PARA REMOVER ELEMENTO PAI
//Ex remover o h2

//PASSO 1: Mapeie o elemento
var subtitle = document.querySelector(".subtitle");

//PASSO 2: De o comando para remover o elemento
subtitle.remove();



