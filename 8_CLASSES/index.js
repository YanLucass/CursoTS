"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//iniciar sem valor ! necessário
class User {
}
const yan = new User();
yan.name = "Yan";
console.log(yan);
// 2 - constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const yann = new NewUser("Yan", 20);
//3 campo readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("Fusca");
// fusca.wheels = 3;
console.log(fusca);
// 4- herança / super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("trator");
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("Destroyer", 70);
console.log(trator);
console.log(destroyer);
//5 metodos
class Dwraf {
    constructor(name) {
        this.name = name;
    }
    greeating() {
        console.log('hey stranger');
    }
}
const jimmy = new Dwraf("jimmy");
jimmy.greeating();
console.log(jimmy);
//6 - this 
class Truck {
    constructor(model, horsePower) {
        this.model = model;
        this.horsePower = horsePower;
    }
    showDetails() {
        console.log(`Caminhão do model ${this.model} que tem  ${this.horsePower} horsePower`);
    }
}
const volvo = new Truck("truck", 400);
const scania = new Truck("scania", 500);
volvo.showDetails();
scania.showDetails();
//getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + " " + this.surname;
    }
    get namee() {
        return this.name;
    }
}
const yanF = new Person("Yan", "Ferreira");
// console.log(yanF.name); not possible
console.log(yanF.namee);
console.log(yanF.fullName);
//setters
class Coords {
    constructor(especial) {
        this.especial = especial;
    }
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log('x alterado');
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log('y alterado');
    }
    set setEspecial(especial) {
        this.especial = especial;
    }
    get getCoords() {
        return `X${this.x} y: ${this.y}`;
    }
}
const mycords = new Coords("Sp");
mycords.fillX = 15;
// mycords.fillY = 0 //not possible, fillY return. 
mycords.fillY = 10;
console.log(mycords);
//log coordernadas com get
console.log(mycords.getCoords);
//alterar especial com setter
mycords.especial = "Pernambuco";
console.log(mycords);
class PostBlog {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo ${this.title}`;
    }
}
const post = new PostBlog("Meruem");
console.log(post.itemTitle());
class Book {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `title: ${this.title}`;
    }
}
const book = new Book("Arquitetura limpa");
console.log(book.itemTitle());
//10 - override de metodos
class Base {
    someMethod() {
        console.log('Alguma coisa');
    }
}
class Nova extends Base {
    //basta escrever o memso nome do metodo para fazer override
    someMethod() {
        console.log("Classe nova altera o metodo da classe Base");
    }
}
const myObject = new Nova();
myObject.someMethod();
//11 public
class C {
    constructor() {
        this.x = 10;
    }
}
const cInstance = new C();
console.log(cInstance.x + 10);
class D extends C {
}
const dInstance = new D();
console.log(dInstance.x);
// 12 protected 
class GameAvatar {
    constructor() {
        this.dimas = 100;
    }
    aumentarAtributos() {
        console.log('Metodo protegido');
    }
}
class Guilda extends GameAvatar {
    showDimas() {
        return this.dimas;
    }
    showAumentarAtributosMethod() {
        this.aumentarAtributos();
    }
}
const g1 = new Guilda();
// console.log(g1.dimas); protected so em gameAvatar conseguimos acessar diretamente, aq so por metodo.
console.log(g1.showDimas());
g1.showAumentarAtributosMethod();
//13 private
class PrivateClass {
    constructor() {
        this.name = "Yan";
    }
    get showName() {
        return this.name;
    }
    methodPrivate() {
        console.log('privado');
    }
    getMethodPrivate() {
        this.methodPrivate();
    }
}
const pObj = new PrivateClass();
console.log(pObj.showName);
// pObj.methodPrivate(); é privado n pode ser acessado fora da classe
pObj.getMethodPrivate();
// class PrivateClass2 extends PrivateClass {
//     public tentarPegarMetodoPrivadoDaClassePai() {
//         this.methodPrivate();  // nao dá certo pq so a classe pode acessar um private
//     }
// }
// const pObjFilho = new PrivateClass2();
// pObjFilho.getMethodPrivate();
class Admin {
    constructor() {
        this.name = "Yan";
    }
    showBugs() {
        console.log(1 + '1');
    }
    acessarBug() {
        this.showBugs();
    }
}
class NewAdmin extends Admin {
    corrigirBug() {
        // this.showBugs() so a propria classe pode acessar esse método
        //temos que acessar o método 
        this.acessarBug();
        console.log(1 + Number('1'));
    }
}
const lucas = new NewAdmin();
lucas.corrigirBug();
//14 - static
class ShowUserController {
    static handle() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Passar para useCase');
        });
    }
}
ShowUserController.prop = 10;
//podemos usar apenas com a classe
ShowUserController.handle();
console.log(ShowUserController.prop);
// 15 - generic class
class Item {
    constructor(amount, price) {
        this.amount = amount;
        this.price = price;
    }
}
//criar classe com tipos genericos
const caixa1 = new Item("12", "20.99");
console.log(caixa1.amount);
console.log(typeof caixa1.amount);
const caixa2 = new Item(1, 100);
console.log(typeof caixa2.price);
//16 params properties
class Product {
    constructor(name, qtd, price) {
        this.name = name;
        this.qtd = qtd;
        this.price = price;
        this.name = name;
        this.qtd = qtd;
        this.price = price;
    }
    get getQtd() {
        return this.qtd;
    }
    get getPrice() {
        return this.price;
    }
}
const product = new Product("Camisa do ace", 2, 30);
console.log(`O nome do produto é ${product.name} o preço é ${product.getPrice} e a quantidade disponível é ${product.getQtd}`);
console.log(product);
// console.log(product.price);
// 17 class expressions
const myClass = class {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
};
const pessoa = new myClass("Yan");
console.log(pessoa.name);
// 18 abstract class 
class Animal {
    constructor(raca) {
        this.raca = raca;
        this.raca = raca;
    }
}
class Dog extends Animal {
    emitirSom() {
        console.log('AU, Au!');
    }
}
const dog = new Dog("Vira-lata");
dog.emitirSom();
//19 relações entre classes(curiosidade)
class Dogg {
}
class Cat {
    miar() {
        console.log('miar');
    }
}
//duas classes exatamente iguais em questões de atributos é possivel
const doguinho = new Cat(); // o ts analisa o atributos o nome da classe n muda nada.
console.log(doguinho);
