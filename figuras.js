// Código del cuadrado

console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado (lado) {
    return lado * 4;
};

// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado (lado) {
    return lado * lado
};

//console.log("El área del cuadrado es: " + areaCuadrado + " cm2");

console.groupEnd();

// Código del triángulo

console.group("Triángulos");
// 
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const ladoTriangulo3 = 4;
// const alturaTriangulo = 5.5;
// 
// console.log(
//     "Los lados del triángulo miden: " 
//     + ladoTriangulo1 
//     + "cm, "
//     + ladoTriangulo2
//     + "cm, "
//     + ladoTriangulo3 
//     + "cm, "
// );

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + lado3;
};

//console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm");

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}

// console.log("El área del triángulo es: " + areaTriangulo + " cm2");

console.groupEnd();

//Código del círculo

console.group("Círulos");

// const radioCirculo = 4;
// const diametroCirculo = radioCirculo * 2;
// const PI = Math.PI
// 
// console.log("El radio del círculo es: " + radioCirculo + "cm")
// console.log("El diámetro del círculo es: " + diametroCirculo + "cm")

function perimetroCirculo (radio) {
    return radio * 2 * Math.PI;
}
// console.log("El perímetro del círculo es: " + perimetroCirculo + "cm")

function areaCirculo (radio) {
    var a =  radio * radio * Math.PI;
    console.log(`El área del círculo es ${a}cm`)
}
// console.log("El área del círculo es: " + areaCirculo + "cm2")

console.groupEnd();

//Interacción con HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}


function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}