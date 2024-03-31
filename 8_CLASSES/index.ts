
//iniciar sem valor ! necessário
class User { 
    name!: string
    age!:string
}

const yan = new User();
yan.name = "Yan"
console.log(yan);

// 2 - constructor

class NewUser {
    name
    age

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const yann = new NewUser("Yan", 20);


//3 campo readonly

class Car {
    name: string ;
    readonly wheels = 4;

    constructor(name: string) {
        this.name = name;
    }
}


const fusca = new Car("Fusca")
// fusca.wheels = 3;
console.log(fusca);


// 4- herança / super

class Machine {
    name
    constructor(name: string) {
        this.name = name;
    }
}

const trator = new Machine("trator");

class KillerMachine extends Machine {
    guns

    constructor(name: string, guns: number) {
        super(name)
        this.guns = guns;
    }
}

const destroyer = new KillerMachine("Destroyer", 70);
console.log(trator);
console.log(destroyer);


//5 metodos

class Dwraf {
    name
    constructor(name: string) {
        this.name = name
    }

    public greeating() {
        console.log('hey stranger');
        
    }
}

const jimmy = new Dwraf("jimmy");
jimmy.greeating();
console.log(jimmy);


//6 - this 

class Truck {
    model
    horsePower
    constructor(model: string, horsePower: number) {
        this.model = model;
        this.horsePower = horsePower
    }

    public showDetails() {
        console.log(`Caminhão do model ${this.model} que tem  ${this.horsePower} horsePower`);
    }
}

const volvo = new Truck("truck", 400);
const scania = new Truck("scania", 500);
volvo.showDetails(); 
scania.showDetails();       


//getters

class Person {
    private name
    surname
    constructor(name: string, surname: string) {
        this.name = name
        this.surname = surname;
    }

    get fullName() {
        return this.name + " " + this.surname
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
    x!: number
    y!: number
    especial: string;

    constructor(especial: string) {
        this.especial = especial
    }

    set fillX(x: number) {
        if(x === 0) {
            return
        }

        this.x = x;
        console.log('x alterado');   
    }

    set fillY(y: number) {
        if(y === 0) {
            return
        }
        this.y = y;
        console.log('y alterado');
        
    }

    private set setEspecial(especial: string) {
        this.especial = especial;
    }

    get getCoords() {
        return `X${this.x} y: ${this.y}`
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
mycords.especial = "Pernambuco"
console.log(mycords);

//9 - implements
interface showTitle {
    itemTitle(): string
}

class PostBlog implements showTitle{
    title
    constructor(title: string) {
        this.title = title
    }

    itemTitle(): string {
        return `O titulo ${this.title}`
    }
}


const post = new PostBlog("Meruem");

console.log(post.itemTitle());


class Book implements showTitle {
    title
    constructor(title: string) {
        this.title = title
    }

    itemTitle(): string {
        return `title: ${this.title}`
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
    someMethod(): void {
        console.log("Classe nova altera o metodo da classe Base");
        
    }
}

const myObject = new Nova();
myObject.someMethod();



//11 public

class C {
    public x = 10
}

const cInstance = new C();
console.log(cInstance.x + 10);


class D extends C {
    
}

const dInstance = new D();
console.log(dInstance.x);


// 12 protected 

class GameAvatar {
    protected dimas = 100;

    protected aumentarAtributos() {
        console.log('Metodo protegido');
    }
}

class Guilda extends GameAvatar {
    showDimas(): number {
        return this.dimas;
    }

    showAumentarAtributosMethod() {
        this.aumentarAtributos()
    }
}

const g1 = new Guilda();
// console.log(g1.dimas); protected so em gameAvatar conseguimos acessar diretamente, aq so por metodo.
console.log(g1.showDimas());
g1.showAumentarAtributosMethod();


//13 private

class PrivateClass {
    private name = "Yan"

    get showName() {
        return this.name;
    }

    private methodPrivate() {
        console.log('privado');
        
    }

    public getMethodPrivate() {
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
    private name = "Yan"

    private showBugs() {
        console.log(1 + '1');

    }
    protected acessarBug() {
        this.showBugs()
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
    static prop: number = 10;
    static async handle() {
        console.log('Passar para useCase');       
    }
}

//podemos usar apenas com a classe
ShowUserController.handle();
console.log(ShowUserController.prop);


// 15 - generic class

class Item<T, U> {
    amount
    price
    constructor(amount: T, price: U) {
        this.amount = amount;
        this.price = price
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
    constructor(public name: string, private qtd: number, private price: number) {
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

const myClass = class<T> {
    constructor(public name: string) {
        this.name = name;
    }
}

const pessoa = new myClass("Yan");
console.log(pessoa.name);


// 18 abstract class 
abstract class Animal {
    constructor(public raca: string) {
        this.raca = raca;
    }

    abstract emitirSom(): void;
}


class Dog extends Animal {
    emitirSom(){
        console.log('AU, Au!');
    }
}

const dog = new Dog("Vira-lata");
dog.emitirSom();

//19 relações entre classes(curiosidade)

class Dogg {
    name!: string;
}

class Cat {
    name!:string;
    
    public miar(){
        console.log('miar');
        
    }
}

//duas classes exatamente iguais em questões de atributos é possivel
const doguinho: Dogg = new Cat(); // o ts analisa o atributos o nome da classe n muda nada.
console.log(doguinho);







