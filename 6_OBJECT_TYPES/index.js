"use strict";
//tipo de objeto para função com interface
function showProductsDetails({ name, price, isAvailable }) {
    console.log(`O nome do produto é ${name} e seu preço é ${price}`);
    if (isAvailable)
        console.log("o produto está disponivel");
}
const shirt = {
    name: "Camisa",
    price: 20.00,
    isAvailable: true
};
showProductsDetails(shirt);
showProductsDetails({ name: "tenis", price: 1200, isAvailable: false });
function showUserDetails(user) {
    console.log(`O usuario tem o email ${user.email}`);
    if (user.role) {
        console.log(`A função do usuario é: ${user.role}`);
    }
}
const u1 = {
    email: "usernorma@gmail.com"
};
const u2 = {
    email: "useradmin@gmail.com",
    role: "Adm"
};
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "vw",
    wheels: 4
};
// fusca.wheels = 5;
console.log(fusca);
const user = {
    email: "userlouco@gmail.com",
    name: "osh?",
    1: "fsdfsdf"
};
console.log(user);
const yan = {
    name: "Yan",
    age: 20
};
// type superMan = SuperHuman;
// const goku: superMan = {
//     name: "goku",
//     age: 30,
//     superpowers: ["ssj", "genki dama"]
// }
console.log(yan);
const luffy = {
    name: "Luffy",
    age: 19,
    superpowers: ["Gear5", "Esticar"]
};
console.log(luffy);
console.log(luffy.superpowers[1]);
const arnold = {
    name: "Arnold",
    type: "shutgun",
    caliber: 12
};
console.log(arnold);
console.log(arnold.caliber);
// 7 readonly array
let myArray = ["Maça", "laranja", "Banana"];
myArray.forEach((fruta) => {
    console.log('Fruta', fruta);
});
// Adicionar formato para 'fruta': 'Banana'. Aqui estamos retribuindo o array para um novo com os valores diferentes por causa do map
myArray = myArray.map((fruta) => {
    return `fruta: banana`;
});
console.log(myArray);
