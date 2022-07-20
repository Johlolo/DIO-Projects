"use strict";
const pessoa = {
    nome: 'Jhemila',
    idade: 27,
    profissao: 'Advogada'
};
pessoa.idade = 25;
const joao = {
    nome: 'João',
    idade: 24,
    profissao: 'pintor'
};
const paula = {
    nome: 'Paula',
    idade: 25,
    profissao: 'advogada'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Advogada"] = 2] = "Advogada";
    Profissao[Profissao["Desenvolvedora"] = 3] = "Desenvolvedora";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const maria = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const jessica = {
    nome: 'Jessica',
    idade: 27,
    profissao: Profissao.Advogada,
    materias: ['Direito previdenciário', 'Direito criminal']
};
const monica = {
    nome: 'Monica',
    idade: 23,
    materias: ['Direito previdenciário', 'Direito criminal']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materias);
