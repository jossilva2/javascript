//Figura Cuadrado//

console.group("Cuadrado");
  const ladoCuadrado= 5;
  console.log("la medida de lado del cuadrado es " + ladoCuadrado + " cm" );
  const perimetroCuadrado = ladoCuadrado *4;
  console.log("El perimetro del cuadrado es: "+ perimetroCuadrado+" cm");
  const areaCuadrado = ladoCuadrado * ladoCuadrado;
  console.log("El área del cuadrado es: "+ areaCuadrado + " cm^2")
console.groupEnd();

console.group("Triangulo");
  const lado1= 6;
  const lado2=6;
  const base= 5;
  const altura= 7;
  console.log("La medida del lado1 del triángulo es: "+lado1+ " el lado 2 es igual a: "+lado2+" la base es igual a: "+base+" la altura es igual a: "+altura);
  const perimetroTriangulo= lado1 + lado2 + base;
  console.log("El perimetro del triangulo es igual a: "+perimetroTriangulo);
  const areaTriangulo= (base * altura )/2;
  console.log("El área del triángilo es: "+ areaTriangulo);

console.groupEnd();
