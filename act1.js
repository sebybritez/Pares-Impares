function pedirNumero() {
    return parseInt(prompt("Por favor, ingresa un número entero positivo:"));
  }
  
  function verificarNumeroPositivo(numero) {
    return numero > 0;
  }
  
  function obtenerNumeroPositivo() {
    let numero;
    do {
      numero = pedirNumero();
      if (!verificarNumeroPositivo(numero)) {
        alert("El número ingresado no es válido. Debe ser mayor que 0.");
      }
    } while (!verificarNumeroPositivo(numero));
   
    return numero;
  }
  
  function sumarNumerosPares(numero) {
    let suma = 0;
    for (let i = 2; i <= numero; i += 2) {
      suma += i;
    }
    return suma;
  }
  
  function mostrarNumerosPares(numero) {
    document.write("<h3>Numeros pares:</h3>");
    for (let i = 2; i <= numero; i += 2) {
      document.write("Los numeros pares son: " + i + "<br>");
    }
  }
  
  function mostrarNumerosImpares(numero) {
    document.write("<h3>Numeros impares:</h3>");
    for (let j = 1; j <= numero; j += 2) {
      document.write("Los numeros impares son: " + j + "<br>");
    }
  }
  
  function ejecutar() {
    let numero = obtenerNumeroPositivo();
    let sumaPares = sumarNumerosPares(numero);
    mostrarNumerosPares(numero);
    document.write("La suma de todos los numeros pares es de: " + sumaPares);
    mostrarNumerosImpares(numero);
  }
  
  ejecutar();
  