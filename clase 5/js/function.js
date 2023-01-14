/*
console.log("Hola Mundo"); 


let numero1=3;
let numero2=4;

let resultado= numero1+numero2;

console.log("La suma de numero 1 y numero 2 es : " +resultado);

document.getElementById("boton").onclick=function() {
    console.log("Capturamos el Evento Click");
    document.getElementById("demo").innerHTML="Estamos provando nuestro primer evento en JS"
}

document.addEventListener('click',function(){
    console.log("Hola Mundo desde EventListener");
    document.getElementById("demo").innerHTML="Estamos provando nuestro primer evento en JS"


})
*/
document.getElementById('boton').addEventListener('click',function(){
    console.log("Hola Mundo desde EventListener");
    document.getElementById("demo").innerHTML="Estamos provando nuestro primer evento en JS"


})

document.getElementById('boton_color').addEventListener('click',function(){
    document.body.style.backgroundColor='red';
})

document.getElementById('boton_default').addEventListener('click',function(){
    document.body.style.backgroundColor='blue';
})

document.getElementById('boton_ocultar').addEventListener('click',function(){
    document.getElementById('demo').style.display='none';
})

const collection= document.getElementsByClassName('prueba');
for (let i = 0; i < collection.length; i++) {
   collection[i].style.backgroundColor="grey";
    
}