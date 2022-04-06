//Figura Cuadrado//

function perimetroCuadrado(lado){
  return lado*4;
}

function areaCuadrado(lado){
  return lado * lado;
}

//Figura Triángulo

function perimetroTriangulo(lado1,lado2,base){
  return lado1+lado2+base;
}

function areaTriangulo(base, altura){
  return (base * altura) / 2;
}

//Figura Circulo

function perimetroCirculo(radio){
   return Math.PI * (radio * 2);
}

function areaCirculo(radio){
  return (radio * radio) * Math.PI;
}

//Integración con html
// Calculando área y perimetro del cuadrado
function calcularArea(){
  var input = document.getElementById("valor").value;
  alert("El área es: "+ areaCuadrado(input));
}

function calcularPerimetro(){
  var input= document.getElementById("valor").value;
  alert("El perimetro es: " + perimetroCuadrado(input));
}

//Calculando área y perimetro del triángulo



function calcularPerimetroTriangulo(){
  var base= document.getElementById("base").value;
  var ladoA= document.getElementById("lado1").value;
  var ladoB= document.getElementById("lado2").value;  
  var resultado= perimetroTriangulo(parseInt(ladoA), parseInt(ladoB), parseInt(base));
  alert("El perimetro del triángulo " + resultado);
   console.log(typeof(resultado));

}

function calcularAreaTriangulo(){
  var base= document.getElementById("base").value;
  var altura= document.getElementById("altura").value;
  alert("El área del triángulo es: " + areaTriangulo(base,altura));
}

//Calculando área y perimetro del Circulo


function calcularPerimetroCirculo(){
  var radio= document.getElementById("radio").value;
  alert("El Perimetro del Circulo es: " + perimetroCirculo(radio));
}

function calcularAreaCirculo(){
  var radio= document.getElementById("radio").value;
  alert("El área del Circulo es: " + areaCirculo(radio));
}

function alturaIsoseles(lado,base){
  return Math.sqrt((lado*lado)-((base*base)/4));
}
