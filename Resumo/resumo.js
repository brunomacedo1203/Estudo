
//1) ADICIONAR CSS usando JS

//ADICIONANDO UM ÚNICO ESTILO

//PASSO 1: Mapeie o elemento 
//Ex: Vou adicionar cor ao title
var title = document.querySelector("#title");

//PASSO 2: Adicione o estilo que desejar
title.style.color = "red"; 


//ADICIONANDO VÁRIOS ESTILOS AO MESMO TEMPO

// selecionar elemento
var subtitle = document.querySelector(".subtitle");

// adicionar vários estilos
subtitle.style.cssText = "color: blue; background-color: pink; font-size: 50px";
subtitle.style.color = "blue";
subtitle.style.backgroundColor = "pink";
subtitle.style.fontSize = "50px";



/* 2) ALTERAR CONTEÚDO DO HTML

Ex: Pegar o texto que tem a classe title, que é um h1 
e mudar seu conteúdo*/

const title = document.querySelector(".title");
title.textContent = "Novo conteúdo";
console.log(title);



// 3) CRIAR ELEMENTO (div, p, h1, span, li) 
// Método para criar elemento filho e colocar dentro do pai que já existe

// PASSO 1: Mapeie o local onde o elemento vai entrar (neste caso o body)
// Pode usar querySelector ou getElementById
const body = document.querySelector("body");

// PASSO 2: Crie o elemento (ex: criar um p)
const paragrafo = document.createElement("p");

// PASSO 3: Adicione o conteúdo no elemento usando textContent
paragrafo.textContent = "Este é o conteúdo do parágrafo";

// PASSO 4: Adicione o elemento no local mapeado (o body neste caso)
body.appendChild(paragrafo);
console.log(paragrafo);



// 4) Método para CRIAR e inserir CLASS/ID dentro de um elemento

// PASSO 1: De o comando para criar elemento (neste caso a div é o filho)
var el = document.createElement("div");

// PASSO 2: Crie a classe da div usando classList.add() ou className
el.classList.add("div-criada");
// ou
el.className = "div-criada";

// PASSO 2: Crie o ID da div usando a propriedade id ou setAttribute
el.id = "minha-div-id";
// ou
el.setAttribute("id", "minha-div-id");

// PASSO 3: Mapeie o elemento pai
var container = document.querySelector("#container");

// PASSO 4: Insira o elemento filho criado dentro do elemento pai
container.appendChild(el);
console.log(el);



// 5) REMOVER ELEMENTO (div, p, h1, span, li)

//MÉTODO PARA REMOVER ELEMENTO PAI
//Ex remover o h2

//PASSO 1: Mapeie o elemento
var subtitle = document.querySelector(".subtitle");

//PASSO 2: De o comando para remover o elemento
subtitle.remove();

//MÉTODO PARA REMOVER ELEMENTO FILHO

//PASSO 1: Mapeie a div (esse é o elemento pai)
var container = document.querySelector("#container");

//PASSO 2: Mapeie o elemento filho
var p = document.querySelector("#container p");

//PASSO 3: De o comando para remover o elemento
container.removeChild(p);



// 6) SUBSTITUIR UM ELEMENTO POR OUTRO 

//PASSO 1: De o comando para criar elemento 
var el = document.createElement("h3");

//PASSO 2: Crie uma classe 
el.classList = "testando-classe";

//PASSO 3: Adicione texto da classe
var texto = document.createTextNode("Este é o texto do h3");

//PASSO 4: Adicione texto no elemento criado
el.appendChild(texto);

//PASSO 5: Mapeie o elemento que deseja trocar
var title =document.querySelector("#title");
console.log(title);

//PASSO 6: Mapeie o pai do elemento que deseja trocarddddd
var pai = title.parentNode;

// trocar os elementos
pai.replaceChild(el, title);



// 7) ADICIONAR/REMOVER UM ATRIBUTO, ID, MUDAR SRC E ALT...

//ADICIONANDO UMA CLASSE COM NOVO ATRIBUTO

//PASSO 1: Mapeie o elemento 
//Ex: mapear o h1 que está com um id title e adicionar uma classe nele
var title = document.querySelector("#title");

//PASSO 2: Crie e adicione a classe e seu atributo
title.setAttribute("class","testando-atributo");

//ADICIONANDO UMA ID COM NOVO ATRIBUTO
//PASSO 1: Mapeie o elemento 
//Ex: Mapear o h2 que está com um class subtitle e adicionar um id pra ele
var subtitle = document.querySelector(".subtitle");

//PASSO 2: Crie e adicione o id e seu atributo
subtitle.setAttribute("id" , "oi");

//REMOVER ATRIBUTO ou ID
//PASSO 1: Mapeie o elemento 
//Ex: Vou remover o id lista dentro do ul
var lista = document.querySelector("#lista");

//PASSO 2: Remova id e seu atributo
lista.removeAttribute("id");
console.log(lista);


/* 8) setTimeout 
Executa uma função depois de um tempo em milisegundos, ou seja de modo assincrono
Ela usa uma callback, qu eé uma função usada como argumento de outra função)
*/

setTimeout(function(){
    console.log("testando o setTimeout");
    
    },3000);
    
    
    /*setnterval
    Faz a mesma coisa que o setTime out só que na forma de lopp
    ou seja, vai ficar executando várias vezes o código até que vc mande parar
    Tbm usa callback*/
    
    setInterval(function(){
    console.log("testando");
    
    }, 2000);



// 9) O clearTimeout é usado para cancelar a execução de um temporizador configurado com setTimeout. 

/*No exemplo abaixo ele vai mostrar zero na página depois de 1500ms
pra usar o clearTimeout precisamos encapsular o setTimoutnuma vairável
neste caso, myTime que vai guardar o resultado x=0
veja que depois eu atribuir x=5 e usei um if para o código executar um 
clearTimeout para parar de exibir o resultado zero toda vez que x>5 */

var x = 0;

var myTimer = setTimeout(function() {
  console.log("O x é 0");
}, 1500);

x = 5;

if(x > 0) {
  clearTimeout(myTimer);
  console.log("O x passou de 0");
}

// clearInterval na prática
// É amesma ideia do clearTimeout
var myInterval = setInterval(function() {
  console.log("Imprimindo interval");
}, 500);

setTimeout(function() {

  console.log("Não precisamos mais repetir!");
  clearInterval(myInterval);

}, 5000);



//10) COMO CRIAR EVENTO DE CLICK

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


/* 11) onload é um evento JavaScript que permite que um trecho de código seja executado
somente quando todo o DOM foi completamente carregado no navegador.*/
window.onload = function() {

    console.log("Carregou o DOM");
  
    var title2 = document.querySelector("#title");
  
    console.log(title2);
  
  }
  
  console.log("Carregou o JS");
  
  var title = document.querySelector("#title");
  
  console.log(title);


  //MOUSEOVER

//Ex: Passar o mouse por cima do título e a cor de fundo fica amarela

//PASSO 1: Selecionar o elemento que vai ter um evento associado
var title = document.querySelector("#title");

//PASSO 2: Adicionar o evento pelo método addEventListener
title.addEventListener("mouseover" , function(){

this.style.backgroundColor = "yellow";

});

//MOUSEOUT

//Ex: Mudar a cor de backgoud para branco quando tirar o mouse

//PASSO 1: Selecionar o elemento que vai ter um evento associado
var title = document.querySelector("#title");

//PASSO 2: Adicionar o evento pelo método addEventListener
title.addEventListener("mouseout" , function(){

this.style.backgroundColor = "white";

});


//12) AFETAR OUTRO ELEMENTO COM O MOUSEOVER

/*Ex: Tem um elemnto p dentro do h1 que foi escondido usando css (hide)
Agora vamos usar mouseover para este p aparecer
Vamos fazer ele aparecer quando passar o mouse no subtitle
Vamos usar JS para remover a classe de hide dele*/


//PASSO 1: Selecionar o elemento que vai ter um evento associado
var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("mouseover", function() {

  var legenda = document.querySelector("#legenda");

  legenda.classList.remove("hide");

});

subtitle.addEventListener("mouseout", function() {

  var legenda = document.querySelector("#legenda");

  legenda.classList.add("hide");


  


// 13) KEYDOWN E KEYUP
//São eventos de tecla, keydown é quando a tecla desce e keyup é quando sobe

//EXEMPLO 1
/*Usando o keydown quero que no console me mostre informações osbre a tecla que apertei
OBS: a letra "e" ou"event" como argumento é usada para
disparar no conssole infomações sobre a tecla que bati*/

document.addEventListener("keydown" , function(e){

    console.log(e);
});

//EXEMPLO 2
// Se quiser especificar, pode usar: e.informação desejada
//NO exemplo a seguir ele vai mostrar no console qual tecla foi usada
document.addEventListener("keydown" , function(event){

    console.log(event.key);
});


//EXEMPLO 3
// Se quiser pode usar statements para incrementar
//No exemplo a seguir o console log vai aceitar somente se 
//a trecla batida for Enter.
document.addEventListener("keydown" , function(e){
   
    if(e.key === "Enter"){
 
        console.log("Apertou Enter");
    }   
});

//EXEMPLO 4
// Usar o keyup para reverter o keydown
document.addEventListener("keydown" , function(e){
   
    if(e.key === "Enter"){ 
        console.log("Apertou Enter");
    }
   
});

document.addEventListener("keyup" , function(e){

console.log("Soltou o enter");

});