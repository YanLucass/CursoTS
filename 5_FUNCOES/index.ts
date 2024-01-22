//1 void

function whithoutReturn(): void {
    console.log('Essa função retorna nada');
    // return 1; não funciona
}

whithoutReturn();


//2 callback como argumento

function greeting(name: string): string {
    return `Olá ${name}`
}

function preGreeting(f: (name: string) => string, userName: string) {
    console.log('Preperando para saudar');
    const greet = f(userName);
    return greet;
}

console.log(preGreeting(greeting, "Yan Lucas"));


//3 generics functions

function returnFirstIndex<T>(arr: T[]) :T {
    return arr[0];
}
 
console.log(returnFirstIndex([1, 2, 3, 4]));
returnFirstIndex(["Lua", "Superior", "6"]);
returnFirstIndex([true, false, 3, "F", 1]);

//unir objetos no geral
function mergeObject<T, U>(obj1: T, obj2: U) {
    return {
        ...obj1,
        ...obj2
    }
}

//podemos passar vários objetos com propiedades de tipos difentes
console.log(mergeObject({name: "Yan Lucas"}, {age: true, job: "Programmer"})); //true aprovado pois é generico.
console.log(mergeObject({campeanato: 1}, {vencedor: 3}));


//já aqui temos que definir exatamente como o dado vem, no caso como o objeto irá chegar. 
function mergeObjectWhithoutGenerics(obj1: {name: string}, obj2: {age: number}) {

    const mergedObject = {
        ...obj1,
        ...obj2
    }
    
    return mergedObject;

}

console.log(mergeObjectWhithoutGenerics({name: "Meruem"}, {age: 30}));

// sem o generics qualquer objeto que fuja os tipos definidos será negado. 
// console.log(mergeObjectWhithoutGenerics({name: "Meruem"}, {age: "Negado! Não é genérico"}));

//4 constrains em generics functions

function biggesNumbers<T extends number | string>(a: T, b: T): T{
    let bigNumber: T;
    +a > +b ? bigNumber = a : bigNumber = b;
    return bigNumber;
}

console.log(biggesNumbers(2, 3));
console.log(biggesNumbers("5", "12"));
// console.log(biggesNumbers(5, true));
1

// 5 - especificar tipo de argumento

function mergeArrays<T>(arr1: T[], arr2: T[]) {
    return arr1.concat(arr2);
}

console.log(mergeArrays<number | string>([1,2,3], ["teste", "doido"]));



//6 - parametros opcionais
function modernGreetring(name: string, greet?: string) {
    if(greet) {
        return `Olá ${greet} ${name} tudo bem?`        
    }

    return `Olá ${name}`
}

console.log(modernGreetring("Pedro"));
console.log(modernGreetring("Alane", "Dr."));


//7- parametros default/
function somaDefault(n: number, m: number = 10): number {
    return n + m;
}

console.log(somaDefault(10));
console.log(somaDefault(15, 20));

// 8 - unknow

function doSomething(x: unknown) {
    // 
    if(Array.isArray(x)) {
        console.log(x[0]);
    }
}

console.log(doSomething(1));
console.log([1, 2, 3]);


//9 - never 
function showMsgError(msg: string): never {
    throw new Error(msg);
}

// showMsgError('Vc n tá autorizado');


//10 rest operator

function sumAll(...n: number[]) {
    return n.reduce((number, sum) => sum + number);
}

console.log(sumAll(1,2,3));
console.log(sumAll(1, 3, 4, 5, 6,7, 7, 8, 8, 9));


//11 destructing parametros
function showProductsDetails({name, price}: {name: string, price: number}) {
    return `o nome do produto é ${name} e seu preço é ${price}`
}

const shirt = { name: "Camisa ace", price: 34};
console.log(showProductsDetails(shirt));
// console.log(showProductsDetails(3, "kfdkfk"));
// console.log(showProductsDetails({roda: "Mancer", price: 30}));




    




