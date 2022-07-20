const pessoa = {
    nome: 'Jhemila',
    idade: 27,
    profissao: 'Advogada'
}

pessoa.idade = 25;

const joao: { nome: string, idade: number, profissao: string } = {
    nome: 'João',
    idade: 24,
    profissao: 'pintor'
}

const paula: { nome: string, idade: number, profissao: string } = {
    nome: 'Paula',
    idade: 25,
    profissao: 'advogada'
}

enum Profissao {
    Professora,
    Atriz,
    Advogada,
    Desenvolvedora
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 27,
    profissao: Profissao.Advogada,
    materias: ['Direito previdenciário', 'Direito criminal']
}

const monica: Estudante = {
    nome: 'Monica',
    idade: 23,
    materias: ['Direito previdenciário', 'Direito criminal']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item);
    }
}

listar(monica.materias);