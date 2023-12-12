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


//AFETAR OUTRO ELEMENTO COM O MOUSEOVER

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

});