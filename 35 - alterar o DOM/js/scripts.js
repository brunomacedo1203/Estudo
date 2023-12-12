
//SÃO FORMAS DE PEGAR O CONTEÚDO DO HTML E JOGAR NO NAVEGADOR
//pegar pela tag

var titulo=document.getElementsByTagName("h1")[0];
console.log(titulo);


var lis =document.getElementsByTagName('li');
console.log(3);

//pegar pela id

var paragrafo=document.getElementById('paragrafo');
console.log(paragrafo);

//pegar pela classe

var intensDaLista =document.getElementsByClassName("item");
console.log(intensDaLista);