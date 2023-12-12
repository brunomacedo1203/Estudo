//ADICIONAR/REMOVER UM ATRIBUTO, ID, MUDAR SRC E ALT...

//ADICIONANDO UMA CLASSE COM NOVO ATRIBUTO

//PASSO 1: Mapeie o elemento 
//Ex: mapear o h1 que está com um id title e adicionar uma classe nele
var title = document.querySelector("#title");

//PASSO 2: Crie e adicione a classe e seu atributo
title.setAttribute("class","testando-atributo");
console.log(title);



//ADICIONANDO UMA ID COM NOVO ATRIBUTO

//PASSO 1: Mapeie o elemento 
//Ex: Mapear o h2 que está com um class subtitle e adicionar um id pra ele
var subtitle = document.querySelector(".subtitle");

//PASSO 2: Crie e adicione o id e seu atributo
subtitle.setAttribute("id" , "oi");
console.log(subtitle);


//REMOVER ATRIBUTO ou ID
//PASSO 1: Mapeie o elemento 
//Ex: Vou remover o id lista dentro do ul
var lista = document.querySelector("#lista");

//PASSO 2: Remova id e seu atributo
lista.removeAttribute("id");
console.log(lista);


