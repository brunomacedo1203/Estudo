// O clearTimeout é usado para cancelar a execução de um temporizador configurado com setTimeout. 

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