/*
let app = () => {
  var app = document.getElementById("aplicacao");

  var div = document.createElement("div");
  div.classList = "col-md-4";
  div.innerHTML =
    '<div class="card mt-3"> <img src="https://via.placeholder.com/320"  class="card-img-top" alt="IMG"/><div class="card-body"> <h5 class="card-title">Comida</h5> <p class="card-text">Breve descricao.</p> <a href="#" class="btn-ver btn" data-toggle="modal" data-target="#exampleModal" >Ver</a><a href="#" class="btn btn-secundarios">Editar</a><a href="#" class="btn btn-secundarios">Deletar</a></div></div>';

  app.appendChild(div);
};
*/
var nome_receita;
var descricao_receita;
var modo_preparo;
var ingredientes_receita;

let app = () => {};

function app1() {
  nome_receita = document.getElementById("nome-receita").value;
  descricao_receita = document.getElementById("descricao-receita").value;
  modo_preparo = document.getElementById("modo-preparo-receita").value;
  ingredientes_receita = document.getElementById("ingredientes-receita").value;

  var aplicacao = document.getElementById("aplicacao");
  var div = document.createElement("div");
  div.classList = "col-md-4";
  div.innerHTML = `<div class="card mb-3"> <img src="https://via.placeholder.com/320"  
          class="card-img-top" alt="IMG"/><div class="card-body"> <h5 class="card-title">${nome_receita}</h5>
           <p class="card-text">${descricao_receita}</p> <a href="#" class="btn-ver btn" data-toggle="modal" data-target="#exampleModal" >Ver</a>
           <a href="#" class="btn btn-secundarios">Editar</a><a href="#" class="btn btn-secundarios">Deletar</a></div></div>`;
  aplicacao.appendChild(div);
  limpar();
}

function limpar() {
  document.getElementById("nome-receita").value = "";
  document.getElementById("descricao-receita").value = "";
  document.getElementById("modo-preparo-receita").value = "";
  document.getElementById("ingredientes-receita").value = "";
}
