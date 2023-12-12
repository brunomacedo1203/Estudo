/* setTimeout 
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

