"use strict";
//1 void
function whithoutReturn() {
    console.log('Essa função retorna nada');
    // return 1; não funciona
}
whithoutReturn();
//2 callback como argumento
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log('Preperando para saudar');
    const greet = f(userName);
    return greet;
}
console.log(preGreeting(greeting, "Yan Lucas"));
//3 generics functions
function returnFirstIndex(arr) {
    return arr[0];
}
console.log(returnFirstIndex([1, 2, 3, 4]));
returnFirstIndex(["Lua", "Superior", "6"]);
returnFirstIndex([true, false, 3, "F", 1]);
//unir objetos no geral
function mergeObject(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
//podemos passar vários objetos com propiedades de tipos difentes
console.log(mergeObject({ name: "Yan Lucas" }, { age: true, job: "Programmer" })); //true aprovado pois é generico.
console.log(mergeObject({ campeanato: 1 }, { vencedor: 3 }));
//já aqui temos que definir exatamente como o dado vem, no caso como o objeto irá chegar. 
function mergeObjectWhithoutGenerics(obj1, obj2) {
    const mergedObject = Object.assign(Object.assign({}, obj1), obj2);
    return mergedObject;
}
console.log(mergeObjectWhithoutGenerics({ name: "Meruem" }, { age: 30 }));
// sem o generics qualquer objeto que fuja os tipos definidos será negado. 
// console.log(mergeObjectWhithoutGenerics({name: "Meruem"}, {age: "Negado! Não é genérico"}));
//4 constrains em generics functions
function biggesNumbers(a, b) {
    let bigNumber;
    +a > +b ? bigNumber = a : bigNumber = b;
    return bigNumber;
}
console.log(biggesNumbers(2, 3));
console.log(biggesNumbers("5", "12"));
// console.log(biggesNumbers(5, true));
1;
// 5 - especificar tipo de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], ["teste", "doido"]));
//6 - parametros opcionais
function modernGreetring(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name} tudo bem?`;
    }
    return `Olá ${name}`;
}
console.log(modernGreetring("Pedro"));
console.log(modernGreetring("Alane", "Dr."));
//7- parametros default/
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(15, 20));
// 8 - unknow
function doSomething(x) {
    // 
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
}
console.log(doSomething(1));
console.log([1, 2, 3]);
//9 - never 
function showMsgError(msg) {
    throw new Error(msg);
}
// showMsgError('Vc n tá autorizado');
//10 rest operator
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3));
console.log(sumAll(1, 3, 4, 5, 6, 7, 7, 8, 8, 9));
//11 destructing parametros
function showProductsDetails({ name, price }) {
    return `o nome do produto é ${name} e seu preço é ${price}`;
}
const shirt = { name: "Camisa ace", price: 34 };
console.log(showProductsDetails(shirt));
// console.log(showProductsDetails(3, "kfdkfk"));
// console.log(showProductsDetails({roda: "Mancer", price: 30}));
