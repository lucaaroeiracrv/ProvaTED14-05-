import { Aluno, Fileira } from "./types";
import * as metodosFila from "./fila";

const alunos: Aluno[] = [
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
]
// Cada fileira pode ter NO MÁXIMO 5 alunos
const fileiras: Fileira[] = [
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
]
//colando na fileira
function colocar(alunos: Aluno[], fileiras: Fileira[]) {
    fileiras.forEach(a => {
      for (let i = 0; i < a.length; i++) {
        if( a.alunos[i] === undefined && alunos[0] != undefined){
          a.alunos[i]= alunos[0]
          console.log("Olá " + alunos[0].nome + "! Você agora está na fileira " + a.nomeFileira + ".");
          metodosFila.dequeue(alunos);
        }
      }
    });
}
colocar(alunos, fileiras)

//tirar da fileira
function tirar(fileiras: Fileira[]){
  fileiras.forEach(a =>{
    for(let i = 0; i < a.length; ++i){
        if(a.alunos[0] !== undefined){
          console.log(`Até logo, ${a.alunos[0].nome}! Ainda restam ${a.alunos.length - 1} alunos na fileira ${a.nomeFileira}.`);
            metodosFila.dequeue(a.alunos)
          }
          
      }
  })
}

colocar(alunos, fileiras)
tirar(fileiras)
