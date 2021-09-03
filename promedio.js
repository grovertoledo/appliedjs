// const lista1 = [
//     100,
//     200,
//     300,
//     500,
// ];
// 
// let sumaLista1 = 0;
// 
// for (let i = 0; i < lista1.length; i++) {
//     sumaLista1 = sumaLista1 + lista1[i];
// }
// 
// const promLista1 = sumaLista1 / lista1.length

function calcAritMedia(list) {
    // let sumaList = 0;
    // for (let i = 0; i < list.length; i++) {
    //     sumaList = sumaList + list[i];
    // };
    const sumaList = list.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promList = sumaList / list.length;
    return promList;
}
