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
    modo_preparo,
    ingredientes_receita
  );

  bd.gravar(receita);
  criarBloco(receita);
};

function criarBloco(receita) {
  let aplicacao = document.getElementById("aplicacao");
  let div = document.createElement("div");
  div.classList = "col-md-4";
  div.innerHTML = `<div class="card mb-3"> <img src="https://via.placeholder.com/320"  
          class="card-img-top" alt="IMG"/><div class="card-body"> <h5 class="card-title">${receita.nome}</h5>
           <p class="card-text">${receita.descricao}</p> <a href="#" class="btn-ver btn" data-toggle="modal" data-target="#exampleModal" >Ver</a>
           <a href="#" class="btn btn-secundarios">Editar</a><a href="#" class="btn btn-secundarios" id="receita_${receita.id}" onclick="remover(${receita.id})">Deletar</a></div></div>`;
  aplicacao.appendChild(div);
  limpar();
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
