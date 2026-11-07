"use strict";

// EC02 - Funcionários, EXERCÍCIO 1: Cadastro e listagem de funcionários
// Este arquivo funciona sozinho, com o index.html desta pasta.

const formatarMoeda = (numero) => new Intl.NumberFormat('pt-BR', {
  style: 'currency', currency: 'BRL'
}).format(numero);

class Funcionario {
  constructor(id, nome, idade, cargo, salario) {
    this.id = id;
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
    this.salario = salario;
  }

  getId() { return this.id; }
  getNome() { return this.nome; }
  setNome(nome) { this.nome = nome; }
  getIdade() { return this.idade; }
  setIdade(idade) { this.idade = idade; }
  getCargo() { return this.cargo; }
  setCargo(cargo) { this.cargo = cargo; }
  getSalario() { return this.salario; }
  setSalario(salario) { this.salario = salario; }
  toString() { return `${this.nome} - ${this.cargo} - ${formatarMoeda(this.salario)}`; }
}

let funcionarios = [];
let proximoId = 1;

const formulario = document.getElementById('form-registro');
const tabela = document.getElementById('tabela-registros');
const mensagem = document.getElementById('mensagem');
const botaoSalvar = document.getElementById('btn-salvar');
const campoNome = document.getElementById('nome');
const campoIdade = document.getElementById('idade');
const campoCargo = document.getElementById('cargo');
const campoSalario = document.getElementById('salario');

function avisar(texto) {
  mensagem.textContent = texto;
  console.log(texto);
}

function lerFormulario() {
  return {
    nome: campoNome.value.trim(),
    idade: Number(campoIdade.value),
    cargo: campoCargo.value.trim(),
    salario: Number(campoSalario.value)
  };
}

function dadosValidos(dados) {
  return dados.nome.length > 0 &&
    Number.isInteger(dados.idade) && dados.idade >= 1 && dados.idade <= 120 &&
    dados.cargo.length > 0 && Number.isFinite(dados.salario) && dados.salario >= 0;
}

function criarCelula(linha, conteudo) {
  const td = document.createElement('td');
  td.textContent = String(conteudo); // Protege contra HTML digitado no formulário.
  linha.appendChild(td);
  return td;
}

function renderizarTabela() {
  tabela.replaceChildren();
  if (funcionarios.length === 0) {
    const linha = document.createElement('tr');
    criarCelula(linha, 'Nenhum funcionário cadastrado.').colSpan = 5;
    tabela.appendChild(linha);
    return;
  }

  funcionarios.forEach((funcionario) => {
    const linha = document.createElement('tr');
    criarCelula(linha, funcionario.getId());
    criarCelula(linha, funcionario.getNome());
    criarCelula(linha, funcionario.getIdade());
    criarCelula(linha, funcionario.getCargo());
    criarCelula(linha, formatarMoeda(funcionario.getSalario()));
    tabela.appendChild(linha);
  });
}

function atualizarTela() {
  renderizarTabela();
}

// Evento do formulário: usa função anônima.
formulario.onsubmit = function (evento) {
  evento.preventDefault();
  const dados = lerFormulario();
  if (!dadosValidos(dados)) {
    avisar('Dados inválidos. Confira todos os campos.');
    return;
  }

  const funcionario = new Funcionario(proximoId++, dados.nome, dados.idade, dados.cargo, dados.salario);
  funcionarios.push(funcionario);
  avisar('Funcionário cadastrado com sucesso.');
  formulario.reset();
  atualizarTela();
};

atualizarTela();
