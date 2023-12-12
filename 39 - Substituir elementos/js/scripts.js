//SUBSTITUIR UM ELEMENTO POR OUTRO HTML USANDO JS

        // PRIMEIRO CRIE O ELEMENTO

//INSERINDO ELEMENTO FILHO
//PASSO 1: De o comando para criar elemento 
var el = document.createElement("h3");

//PASSO 2: Crie uma classe 
el.classList = "testando-classe";

//PASSO 3: Adicione texto da classe
var texto = document.createTextNode("Este é o texto do h3");

//PASSO 4: Adicione texto no elemento criado
el.appendChild(texto);
console.log(el);

//PASSO 5: Mapeie o elemento que deseja trocar
var title =document.querySelector("#title");
console.log(title);

//PASSO 6: Mapeie o pai do elemento que deseja trocarddddd

var pai = title.parentNode;

// trocar os elementos
pai.replaceChild(el, title);




