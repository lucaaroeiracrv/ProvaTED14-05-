"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const metodosFila = __importStar(require("../ts/fila"));
const alunos = [
    {
        nome: "João",
    },
    {
        nome: "Felipe",
    },
    {
        nome: "Maria",
    },
    {
        nome: "José",
    },
    {
        nome: "Ana",
    },
];
// Cada fileira pode ter NO MÁXIMO 5 alunos
const fileiras = [
    {
        nomeFileira: 'A',
        numero: 1,
        alunos: metodosFila.create(5),
        length: 5
    },
    {
        nomeFileira: 'B',
        numero: 2,
        alunos: metodosFila.create(5),
        length: 5
    },
    {
        nomeFileira: 'C',
        numero: 3,
        alunos: metodosFila.create(5),
        length: 5
    },
    {
        nomeFileira: 'D',
        numero: 4,
        alunos: metodosFila.create(5),
        length: 5
    },
    {
        nomeFileira: 'E',
        numero: 5,
        alunos: metodosFila.create(5),
        length: 5
    },
];
//colando na fileira
function colocar(alunos, fileiras) {
    fileiras.forEach(a => {
        for (let i = 0; i < a.length; i++) {
            if (alunos[0] !== undefined) {
                a.alunos[i] = alunos[0];
                metodosFila.dequeue(alunos);
            }
        }
    });
}
colocar(alunos, fileiras);
//tirar da fileira
function tirar(fileiras) {
    fileiras.forEach(a => {
        for (let i = 0; i < a.length; ++i) {
            if (a.alunos[0] !== undefined) {
                console.log(`tchau ${a.alunos[0].nome}!`);
                metodosFila.dequeue(a.alunos);
            }
        }
    });
}
tirar(fileiras);
