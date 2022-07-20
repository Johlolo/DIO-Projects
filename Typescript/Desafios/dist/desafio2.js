"use strict";
// Como podemos melhorar o esse código usando TS? 
// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"
// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";
// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };
// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }
// Resposta
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professor"] = 0] = "Professor";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Padeiro"] = 2] = "Padeiro";
    Profissao[Profissao["Desenvolvedora"] = 3] = "Desenvolvedora";
})(Profissao || (Profissao = {}));
let pessoa1 = {};
pessoa1.nome = "Maria";
pessoa1.idade = 29;
pessoa1.profissao = Profissao.Atriz;
let pessoa2 = {};
pessoa2.nome = "Roberto";
pessoa2.idade = 19;
pessoa2.profissao = Profissao.Padeiro;
let pessoa3 = {
    nome: "Laura",
    idade: 32,
    profissao: Profissao.Desenvolvedora
};
let pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.Professor
};
