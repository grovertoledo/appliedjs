const list1 = [
    100,
    200,
    300,
    500,
    400000,
    100,
    100,
    200,
];

const list1Count = {};

list1.map(
    function(elemento) {
        if (list1Count[elemento]) {
            // list1Count[elemento] = list1Count[elemento] + 1;
            list1Count[elemento] += 1;
            // list1Count["hola"] = 1;
        } else {
            list1Count[elemento] = 1;
        }
    }
);

const list1Array = Object.entries(list1Count).sort(
    function (valorAcumulado, nuevoValor) {
        return valorAcumulado[1] - nuevoValor[1];
    }
);

const moda = list1Array[list1Array.length - 1]

// const moda = list1Array[list1Array.length - 1]
// 
// const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];
// 
// function mode(arr){
//     return arr.sort((a,b) =>
//           arr.filter(v => v===a).length
//         - arr.filter(v => v===b).length
//     ).pop();
// }

function mode(lista) {
    const listaConteo = {};
    lista.map(function(elemento) {
        if (listaConteo[elemento]) {
            listaConteo[elemento] += 1;
        } else {
            listaConteo[elemento] = 1;
        }
    });
    const listaArray = Object.entries(listaConteo).sort(
        function (op1, op2) {
            return op2[1] - op1[1];
        }
    );
    const resultado = listaArray[0][0]
    console.log(`La moda de tu arreglo es ${resultado}`);
}