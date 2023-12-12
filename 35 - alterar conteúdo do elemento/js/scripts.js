//OBS: Usamos #NOME para pegar um elemento por id
//OBS: Usamos .NOME para pegar um elemento por classe

// PASSO 1-selecionar o elemento cujo texto deseje alterar
var title = document.querySelector("#title");
console.log(title);

// PASSO 2-Altere o texto (via innerHTML ou textContent)

//innerHTML
//Aqui ele vai alterar o texto na página que inicialmente tem 
// a frase Título principal muda para: testando o texto alterado
title.innerHTML = "testanto o texto alterado"

//textContent (mais performático)
//vai fazer a mesma coisa que o innerHTML
var subtitle = document.querySelector(".subtitle");
console.log(subtitle);

subtitle.textContent = "Testanto o textContent";