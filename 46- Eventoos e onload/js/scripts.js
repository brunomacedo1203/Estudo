//COMO CRIAR EVENTO DE CLICK

// CLICK AFETANDO O PRÓPRIO ELEMENTO CLICADO

//PASSO 1:Mapeie o botão e crie uma variavel
var btn = document.querySelector("#btn");
console.log(btn);

//PASSO 2: Use o método addEventeListener 
//Este método é usado quando esperamos que o usuário de um input par ao evento acontecer
//Usamos como argumento do método o tipo de evento e uma callback

//Ex 1: Fazer aparecer a mensagem "clicou" toda vez que o usuário clicar no botão
/*btn.addEventListener("click" , function(){

console.log("clicou");

});*/

//Ex 2: Fazer a cor do botão mudar quando o usuário clicar nele
btn.addEventListener("click" , function(){

this.style.color ="red";

});

/*OBS: O this neste contexto é usado para acessar 
o elemento botão. Depois escolhermos qual ação deve ocorrer
Neste exemplo foi uma mudança de estilo*/

// CLICK AFETANDO OUTROS ELEMENTOS



// click afetando outros elementos
var title = document.querySelector("#title");

title.addEventListener("click", function() {

  var subtitle = document.querySelector(".subtitle");

  subtitle.style.display = "none";

});


// double click
var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("dblclick", function() {

  console.log("click duplo!");

});