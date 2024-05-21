export interface Aluno { // Cada aluno é desse tipo
    nome: string;
}
export interface Fileira { // Cada fileira tem um nome/número na sala e tem os alunos que estão nela
    // Nome/Número da Fileira
    nomeFileira: string;
    numero: number;
    alunos: Aluno[];
    length: number;
}