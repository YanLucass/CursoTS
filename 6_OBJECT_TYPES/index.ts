//tipo de objeto para função com interface

 interface Product {
    name: string 
    price: number
    isAvailable: boolean
 }

 function showProductsDetails({name, price, isAvailable}: Product) {
    console.log(`O nome do produto é ${name} e seu preço é ${price}`);
    if(isAvailable) console.log("o produto está disponivel");    
    
 }

 const shirt: Product = {
    name: "Camisa", 
    price: 20.00,
    isAvailable: true
 }


 showProductsDetails(shirt);    
 showProductsDetails({name: "tenis", price: 1200, isAvailable: false});  



 //2- propiedade opcional em interface

 interface User {
    email: string;
    // role?: string;
 }

function showUserDetails(user: User) {
    console.log(`O usuario tem o email ${user.email}`);
    if(user.role) {
        console.log(`A função do usuario é: ${user.role}`);
    }
    
}


const u1: User = {
    email: "usernorma@gmail.com"
}

const u2: User = {
    email: "useradmin@gmail.com",
    role: "Adm"
}

showUserDetails(u1)
showUserDetails(u2)



//3 -readonly 
interface Car {
    brand: string
    readonly wheels: number; //propriedade apenas de leitura
}

const fusca: Car = {
    brand: "vw", 
    wheels: 4
}

// fusca.wheels = 5;
console.log(fusca);


interface User {
    email: string
    [index: string]: string
}

const user: User = {
    email: "userlouco@gmail.com",
    name: "osh?",
    1: "fsdfsdf"
}

console.log(user);


//extending interfaces
interface Human {
    name: string,
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[];
}

const yan: Human = {
    name: "Yan",
    age: 20
}

// type superMan = SuperHuman;

// const goku: superMan = {
//     name: "goku",
//     age: 30,
//     superpowers: ["ssj", "genki dama"]
// }


console.log(yan);

const luffy: SuperHuman = {
    name: "Luffy",
    age: 19,
    superpowers: ["Gear5", "Esticar"]
}

console.log(luffy);
console.log(luffy.superpowers[1]);


//6 - intersection types

interface Character {
    name: string
}

interface Gun {
    type: string;
    caliber: number;
}

type characterWithGun = Character & Gun; // como uma herança, mas no caso unimos em um tipo so.

const arnold: characterWithGun = {
    name: "Arnold",
    type: "shutgun",
    caliber: 12
}

console.log(arnold);
console.log(arnold.caliber);

// 7 readonly array
let myArray: ReadonlyArray<string> = ["Maça", "laranja", "Banana"];

myArray.forEach((fruta) => {
    console.log('Fruta', fruta);   
});

// Adicionar formato para 'fruta': 'Banana'. Aqui estamos retribuindo o array para um novo com os valores diferentes por causa do map
myArray = myArray.map((fruta) => {
    return `fruta: banana`
});

console.log(myArray);

//8 tuplas
type fiveNumbers = [number, number, number, number, number];
const myArrayNumber: fiveNumbers = [1, 2, 3, 4, 5,];
// const array: fiveNumbers = [1, 2, 3, 4, 5, 6];
// const mixedArray: fiveNumbers = [1, 2, true, 4, 5,];

type nameAndAge = [string, number];
const anotherUser: nameAndAge = ["Yan", 20];
console.log(anotherUser[0]);
// anotherUser[0] = 1; //not possible, 0 is a string


//9 tuplas com readonly
function showNumbers(numbers: readonly [number, number]): void {
    console.log(numbers[0]);
    console.log(numbers[1]);
    // numbers[0] = 3; not possible is readonly.

}








