"use strict";
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return parseFloat(a) + parseFloat(b);
    }
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return 'Impossivel fazer soma';
    }
}
console.log(sum("2", "5"));
console.log(sum(2, 3));
console.log(sum(2, '3'));
//2 - checando se valor existe 
function operations(arr, operation) {
    if (operation) {
        if (operation === "soma") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        // e assim vai
    }
    else {
        console.log("Por favor, defina uma operação");
    }
}
operations([1, 2, 3]); //resulta em um undefined
operations([1, 2, 3], "soma");
// 3 - instance of
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User("John");
const paul = new SuperUser("paul");
console.log(jhon);
console.log(paul);
function userGreeing(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá grande mestre superior ${user.name}, deseja ver os dados sistema`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}`);
    }
}
userGreeing(jhon);
userGreeing(paul);
// 4- operador in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const turca = new Dog("Sparken", "turca");
const bob = new Dog("bob", "pastor alemão");
const viraLata = new Dog("Caramelo");
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log(`O cachorro ${dog.name} é da raça ${dog.breed}`);
    }
    else {
        console.log(`O cachorro ${dog.name} é um SRD`);
    }
}
showDogDetails(turca);
showDogDetails(bob);
showDogDetails(viraLata);
//exercico
function showReview(nota) {
    typeof nota === "number" ? console.log(showMsgToNota(nota)) : console.log("Você não avaliou o produto!");
}
function showMsgToNota(nota) {
    let msg;
    switch (nota) {
        case 1:
            msg = 'Porque uma nota tão baixa?';
            break;
        case 2:
            msg = "Algum problema?";
            break;
        case 3:
            msg = "Obrigado";
            break;
        case 4:
            msg = "Agradeço :)";
            break;
        case 5:
            msg = "Você é demais!";
            break;
        default:
            msg = "nota inválida";
            break;
    }
    return msg;
}
showReview(1);
showReview(2);
showReview(3);
showReview(4);
showReview(5);
showReview(340);
showReview(true);
