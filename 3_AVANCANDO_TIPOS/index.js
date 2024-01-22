"use strict";
// 1 - arrays
let numbers = [1, 2, 3];
numbers.push();
console.log(numbers[2]);
const names = ["Yan"];
names.push("Alane");
//2 outra sintax array
const nums = [100, 200];
nums.push(300);
console.log(nums[2]);
console.log(nums);
// 3 any 
const arr1 = [1, "fkskdfksdf", true, [], { nome: "wht" }];
console.log(arr1);
arr1.push({ nome: "louco" });
// 4- parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
//retorno de função
function greating(name) {
    return `Olá ${name}`;
}
console.log(greating("Yan"));
// console.log(greating(1)); inferencia, se recebe uma string como paramtro logo o tipo de retorno é string
//6- função anonima
setTimeout(function () {
    const salary = 1000;
    // console.log(parseFloat(salary));
}, 2000);
// 7 - tipos de objeto 
function passCordinates(coord) {
    console.log("X" + coord.x);
    console.log("X" + coord.y);
}
// passCordinates(1, 1);
// passCordinates([1, 2]);
// passCordinates({nome: 1, sobrenome: 10});
//8 - props opcionais
function showNumbers(a, b, c) {
    console.log('a', a);
    console.log('b', b);
    if (c) {
        console.log('c', c); //comum verificar quanto os tipos são opcionais
    }
}
showNumbers(1, 2);
showNumbers(1, 2, 3);
// showNumbers(6)
//9 validando argumento opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return (`Olá ${firstName} ${lastName}, tudo bem?`);
    }
    return (`Olá ${firstName}`);
}
console.log(advancedGreeting("Yan", "Ferreira"));
console.log(advancedGreeting("Yan"));
//10- union types
function showBalance(balance) {
    console.log(`O saldo da contra é R%${balance}`);
}
showBalance(100);
showBalance("500");
// showBalance(true);
const arr2 = [1, "testeee", true, 23, 343, 434];
console.log(arr2);
const arr3 = ['Um forcinha', 1, false, 3232, true, 'não'];
console.log(arr3);
//11 - avançando em union types
//Um banco de dados retorna se o usuário tá aprovado (alguma string como: admin, editor) ou não está (false). Não pode vir true porque o backend tá programado para guardar false no bd.
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado"; // não está aprovado no bd
    }
    return `A função do usuário é ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
console.log(showUserRole("Dono"));
function showId(id) {
    console.log(`O id é ${id}`);
}
showId(1);
showId('200');
showId('400');
function showCords(obj) {
    console.log(`X ${obj.x} y ${obj.y} z ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 5
};
showCords(coordObj);
const somePerson = {
    name: "Yan", age: 20
};
console.log(somePerson);
//15 literal type
let test; //testando é LITERALMENTE um tipo.
// test = 1;
function showDirection(direction) {
    return `Direção escolhida ${direction}`;
}
console.log(showDirection("center"));
// console.log(showDirection("doida")); não aceita esse tipo. 
let maiorGata;
// 16 null assetion operator
const p = document.getElementById("some-p");
console.log(p.innerText);
const h2 = document.querySelector(".teste");
console.log(h2.innerHTML);
//17 bigint 
let n;
// n = 1
n = 1000n;
console.log(n, typeof n, n + 1000n);
//18 symbol
let symbolA = Symbol("Alane");
let symbolB = Symbol("Alane");
console.log(symbolA === symbolB);
