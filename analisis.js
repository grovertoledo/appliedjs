const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (a, b) {
        return a - b;
    }
);

function medianaSalarios (lista) {
    if ((lista.length % 2) === 0) {
        const mitad = parseInt(lista.length / 2);
        const a = lista[mitad - 1];
        const b = lista[mitad];
        const median = (a + b) / 2;
        return median;
    } else {
        const median = lista[parseInt(lista.length / 2)]
        return median;
    }
};

const medianaGeneralCol = medianaSalarios(salariosColSorted)

const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length -spliceStart;


const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount
);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col
})