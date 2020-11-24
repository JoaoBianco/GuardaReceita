let criarNovaReceita = () => {
  let nome_receita = document.getElementById("nome-receita").value;
  let descricao_receita = document.getElementById("descricao-receita").value;
  let modo_preparo = document.getElementById("modo-preparo-receita").value;
  let ingredientes_receita = document.getElementById("ingredientes-receita")
    .value;

  let receita = new Receita(
    bd.getProximoId(),
    nome_receita,
    descricao_receita,
    ingredientes_receita,
    modo_preparo
  );

  bd.gravar(receita);
  criarBloco(receita);
};

function criarBloco(receita) {
  let aplicacao = document.getElementById("aplicacao");
  let div = document.createElement("div");
  div.classList = "col-md-4";
  div.innerHTML = `<div class="card mb-3"> <div class="card-body"> <h5 class=" h2 pb-2 text-center border-bottom border-dark card-title">${receita.nome}</h5>
           <p class="card-text">${receita.descricao}</p> <a href="#" class="btn-ver btn" data-toggle="modal" data-target="#modal_apresentar" onclick="apresentarDetalhes(${receita.id})" >Ver</a>
           <a href="#" class="btn btn-secundarios" data-toggle='modal' data-target='#modal-editar' onclick="confirmarId(${receita.id})")">Editar</a> <a href="#" class="btn btn-secundarios" id="receita_${receita.id}" onclick="remover(${receita.id})">Deletar</a></div></div>`;
  aplicacao.appendChild(div);
  limpar();
}

function apresentarDetalhes(id) {
  let receita = localStorage.getItem(id);
  receita = JSON.parse(receita);

  document.getElementById("modal_apresentar_titulo").innerHTML = receita.nome;
  document.getElementById("modal_ingredientes").innerHTML =
    receita.ingredientes;
  document.getElementById("modal_preparo").innerHTML = receita.modo_preparo;
}

function limpar() {
  document.getElementById("nome-receita").value = "";
  document.getElementById("descricao-receita").value = "";
  document.getElementById("modo-preparo-receita").value = "";
  document.getElementById("ingredientes-receita").value = "";
}

function limparBlocos() {
  document.getElementById("aplicacao").innerHTML = "";
}

let listar = () => {
  limparBlocos();
  let receitas = bd.recuperarTodosRegistros();
  receitas.forEach((e) => {
    criarBloco(e);
  });
};

function remover(id) {
  bd.remover(id);
  listar();
}

function confirmarId(id) {
  document
    .getElementById("confirmar-editar-receita")
    .setAttribute("onclick", `editarReceita(${id})`);
  carregarDadosEditar(id);
}

function carregarDadosEditar(id) {
  let receita = JSON.parse(localStorage.getItem(id));
  document.getElementById("nome-editar-receita").value = receita.nome;
  document.getElementById("descricao-editar-receita").value = receita.descricao;
  document.getElementById("modo-preparo-editar-receita").value =
    receita.modo_preparo;
  document.getElementById("ingredientes-editar-receita").value =
    receita.ingredientes;
}

function editarReceita(id) {
  let receita = JSON.parse(localStorage.getItem(id));
  receita.nome = document.getElementById("nome-editar-receita").value;
  receita.descricao = document.getElementById("descricao-editar-receita").value;
  receita.modo_preparo = document.getElementById(
    "modo-preparo-editar-receita"
  ).value;
  receita.ingredientes = document.getElementById(
    "ingredientes-editar-receita"
  ).value;

  localStorage.setItem(id, JSON.stringify(receita));
  listar();
}
