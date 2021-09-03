const list1 = [
    100,
    200,
    300,
    500,
    400000,
];

const middleList1 = list1.length / 2;

function calcMediana(list) {
    if (list.length % 2 === 0) {
        const median = (list[(list.length / 2) - 1] + list[list.length / 2]) / 2;
        console.log(`Lista es impar y su mediana es ${median}`);
    } else {
        //const middleList = (list.length - 1) / 2;
        //console.log(`Lista es impar y su mediana es ${list[middleList]}`);
        const middleList = parseInt( list.length / 2);
        console.log(`Lista es impar y su mediana es ${list[middleList]}`);
    }
}
