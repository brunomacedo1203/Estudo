//CRIAR ELEMENTOS HTML USANDO JS

//INSERINDO ELEMENTO FILHO

//Ex: criar uma div com classe (filho) dentro de outra div (pai)
//PASSO 1: De o comando para criar elemento (neste caso a div é o filho)
var el = document.createElement("div");

//PASSO 2: Crie e classe da div
el.classList = "div-criada";


//PASSO 3: Insira a div criada dentro do body
// PASSO 3.1:Mapeie o elemento pai 
var container = document.querySelector("#container");

//PASSO 3.2: insira o elemento filho criado
container.appendChild(el);
console.log(el);



