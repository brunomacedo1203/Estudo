// KEYDOWN E KEYUP
//São eventos de tecla, keydown é quando a tecla desce e keyup é quando sobe

//EXEMPLO 1
/*Usando o keydown quero que no console me mostre informações osbre a tecla que apertei
OBS: a letra "e" ou"event" como argumento é usada para
disparar no conssole infomações sobre a tecla que bati*/

// document.addEventListener("keydown" , function(e){

//     console.log(e);
// });

// //EXEMPLO 2
// // Se quiser especificar, pode usar: e.informação desejada
// //NO exemplo a seguir ele vai mostrar no console qual tecla foi usada
// document.addEventListener("keydown" , function(event){

//     console.log(event.key);
// });


// //EXEMPLO 3
// // Se quiser pode usar statements para incrementar
// //No exemplo a seguir o console log vai aceitar somente se 
// //a trecla batida for Enter.
// document.addEventListener("keydown" , function(e){
   
//     if(e.key === "Enter"){
 
//         console.log("Apertou Enter");
//     }   
// });

//EXEMPLO 4
// Usar o keyup para reverter o keydown
document.addEventListener("keydown" , function(e){
   
    if(e.key === "Enter"){ 
        console.log("Apertou Enter");
    }
   
});

document.addEventListener("keyup" , function(e){

console.log("Soltou o enter");

});