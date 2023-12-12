
//Neste método ele pega tudo que tem a classe item (lista 1 e 2)

var itensClasse = document.getElementsByClassName('item');
console.log(itensClasse);

//querySelectorAll
//Neste método conseguimos pegar só a lista que a gente quer (lista2)

var itensQuery = document.querySelectorAll('#lista2 li')
console.log(itensQuery);

//querySelector (esse é usado para pegar o primeiro elemento)
var lista =document.querySelector("#lista");
console.log(lista);