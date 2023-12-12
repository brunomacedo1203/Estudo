//ADICIONAR CSS usando JS

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