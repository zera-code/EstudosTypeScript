type heroi = {
    name: string;
    vulgo: string;
};

function printaObjeto(pessoa: heroi) {
     console.log(pessoa);
}

printaObjeto({
    name: "bruce wayne",
    vulgo: "batman"
});
//isso imprime algo
console.log ("olá mundo");


//tipos primitivos
let ligado: boolean = false;
let nome: String = "Arthur";
let idade: number = 30;
let altura: number = 1.9;


//tipos especiais
let nulo: null = null;
let indefinido: undefined = undefined;


//tipos abrangentes
let retorno: void
let algum: any = 11;

//objeto sem previsibilidade
let produto:object = {
    name: "arthur",
    cidade: "sp",
}

//objeto tipado com previsibilidade
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}
let meuProduto: ProdutoLoja = {
    nome: "Tenis",
    preco: 89.99,
    unidades: 5,
};

//arrays
let dados: string[] = ["arthur","ana"];
let dados2: Array<string> = ["arthur","ana"];

//array de dois tipos
let infos:(string | number)[] = ["arthur", 45, "Ana"];

//tuplas = vetor multitype porém com ordem definida
let boleto:[string, number,number] = ["agua conta", 199.9, 21223324];

//arrays metodos
dados.map;
dados.reduce;
dados.pop;
dados.filter;

//Datas
let aniversario: Date = new Date("2024-09-23 05:00");
console.log(aniversario.toString());


//funções
function addNumber(x:number, y:number): number {
    return x + y;
}
let soma: number = addNumber(2, 7);
//let soma2:string = addNumber(2, 7);   n funciona por causa do tipo

function addToHello(name: string) :string {
    return `Hello ${name}`;
}
console.log(addToHello("Arthur"));

//funções multitypes                       ou retornar um :any no retorno abaixo
function CallToPhone(phone: number | string) : number | string {
    return phone;
}
console.log(CallToPhone(1131331111));  //aceita apenas os dois tipos declarados

//funções assincronas          a promise tem que retornar o tipo esperado, nesse caso string
async function getDataBase(id: number) : Promise<string> {
    return "Arthur";
}

//interfaces (type x interface)
type robot = {
    readonly id: number | string;
    name: string;
};

interface robot2 {
    readonly id: number | string;
    name: string;
    sayHello(): string;
}

const bot1: robot = {
    id: 1,
    name: "megaman",
};
const bot2: robot2 = {
    id: 1,
    name: "megaman",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    },
};

//readonly não é alteravel
//type mais utilizado para tipar e interface mais utilizado com classe
//se for definir const ou variavel ussar o type, quando estiver utilizando uma classe usar a interface
console.log(bot1);
console.log(bot2);

class Pessoa implements robot2{
    id: number | string;
    name: string;

    constructor(id: number | string, name: string) {
        this.id = id;
        this.name = name;
    }

    sayHello(): string {
        return `Hello i'm ${this.name}`;
    }
}

const p = new Pessoa(1, "ninguem");
console.log(p.sayHello());

//classes

class Character {
    name: string;
    strength: number;
    skill: number;
    // ? apos o noime significa que esse parametro é opcional
    optional?: string;

    constructor (name: string, strength: number, skill: number) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }

    attack(): void{
        console.log(`Attack with ${this.strength} points`);
    }
}

class Magician extends Character {
    magicPoints: number;
    constructor(
        name: string,
        strength: number,
        skill: number,
        magicPoints: number
    ) {
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}

const p1 = new Character("Megaman", 10, 98);
const p2 = new Magician("Aladin", 10, 40, 100);
p1.attack();
console.log(p1);
console.log(p2);

//data modifiers - public: comportamento padrão - private: somente essa classe acessa a propriedade- protected: somente a classe e classes e subclasses acessam a propriedade

//generics
function concatArray<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
};

const numArray = concatArray<number[]>([1,5], [3]);
//quando o tipo é any ele aceita qualquer tipo
//adicionando o tipo com <tipo> apos o array delimita o tipo que vai retornar
const stgArray = concatArray<string[]>(["Arthur", "Megaman"], ["Batman"]);
console.log(numArray);
console.log(stgArray);

//ts-node-dev, installou e adicionou script no package.json

//decorators
//class decorator
function ExibirNome(target: any) {
    console.log(target);
};

@ExibirNome
class Funcionario {};

function apiVersion(version:string) {
    return (target: any) => {
        Object.assign(target.prototype, {__version: version, __name: "Arthur"});
    };
};

@apiVersion("1.10")
class Api {};

const api = new Api();
//console.log(api.__version); dá erro pois ele só fioca disponivel em tempo de compilação
//console.log(api.__name);


//attribute decorator
function minLength(length: number) {
    return (target: any, key: string) => {
        let _value = target[key];

        const getter = () => _value;
        const setter = (value: string) => {
            if (value.length < length) {
                throw new Error(`Tamanho menor do q ${length}{`);
            } else {
                _value = value;
            };
        };

        Object .defineProperty(target, key, {
            get: getter,
            set: setter,
        })
    };
};

class Api2 {
    @minLength(3)
    name: string;
    constructor(name: string) {
        this.name = name;
    }
};

const api2 = new Api2("usa");
console.log(api2.name);
