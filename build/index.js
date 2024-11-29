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
function printaObjeto(pessoa) {
    console.log(pessoa);
}
printaObjeto({
    name: "bruce wayne",
    vulgo: "batman"
});
console.log("olá mundo");
let ligado = false;
let nome = "Arthur";
let idade = 30;
let altura = 1.9;
let nulo = null;
let indefinido = undefined;
let retorno;
let algum = 11;
let produto = {
    name: "arthur",
    cidade: "sp",
};
let meuProduto = {
    nome: "Tenis",
    preco: 89.99,
    unidades: 5,
};
let dados = ["arthur", "ana"];
let dados2 = ["arthur", "ana"];
let infos = ["arthur", 45, "Ana"];
let boleto = ["agua conta", 199.9, 21223324];
dados.map;
dados.reduce;
dados.pop;
dados.filter;
let aniversario = new Date("2024-09-23 05:00");
console.log(aniversario.toString());
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(2, 7);
function addToHello(name) {
    return `Hello ${name}`;
}
console.log(addToHello("Arthur"));
function CallToPhone(phone) {
    return phone;
}
console.log(CallToPhone(1131331111));
function getDataBase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Arthur";
    });
}
const bot1 = {
    id: 1,
    name: "megaman",
};
const bot2 = {
    id: 1,
    name: "megaman",
    sayHello: function () {
        throw new Error("Function not implemented.");
    },
};
console.log(bot1);
console.log(bot2);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello i'm ${this.name}`;
    }
}
const p = new Pessoa(1, "ninguem");
console.log(p.sayHello());
class Character {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strength} points`);
    }
}
class Magician extends Character {
    constructor(name, strength, skill, magicPoints) {
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}
const p1 = new Character("Megaman", 10, 98);
const p2 = new Magician("Aladin", 10, 40, 100);
p1.attack();
console.log(p1);
console.log(p2);
function concatArray(...itens) {
    return new Array().concat(...itens);
}
;
const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(["Arthur", 1], ["Batman"]);
console.log(numArray);
console.log(stgArray);
