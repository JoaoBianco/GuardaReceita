class Bd {
  constructor() {
    let id = localStorage.getItem("id");

    if (id === null) {
      localStorage.setItem("id", 0);
    }
  }
  getProximoId() {
    let proximoId = localStorage.getItem("id");

    return parseInt(proximoId) + 1;
  }

  gravar(d) {
    let id = this.getProximoId();

    localStorage.setItem(id, JSON.stringify(d));

    localStorage.setItem("id", id);
  }

  recuperarTodosRegistros() {
    let receitas = [];

    let id = localStorage.getItem("id");

    for (let i = 1; i <= id; i++) {
      let receita = JSON.parse(localStorage.getItem(i));

      if (receita == null) {
        continue;
      }

      receita.id = i;

      receitas.push(receita);
    }
    return receitas;
  }
  remover(id) {
    localStorage.removeItem(id);
  }
}

var bd = new Bd();
