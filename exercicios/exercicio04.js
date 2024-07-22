const c_nome = document.getElementById("c_nome");
const c_portas = document.getElementById("c_portas");
const c_blindagem = document.getElementById("c_blindagem");
const c_municao = document.getElementById("c_municao");
const c_tipoMilitar = document.getElementById("c_tipoMilitar");
const c_tipoCivil = document.getElementById("c_tipoCivil");
const btn_addCarro = document.getElementById("btn_addCarro");
const veiculos = document.getElementById("veiculos");

/* abilita ou desabilita o radio */
c_tipoCivil.addEventListener("click", () => {
  c_blindagem.value = 0;
  c_municao.value = 0;
  c_blindagem.setAttribute("disabled", "disabled");
  c_municao.setAttribute("disabled", "disabled");
});

c_tipoMilitar.addEventListener("click", () => {
  c_blindagem.removeAttribute("disabled");
  c_municao.removeAttribute("disabled");
});

/* cria a classe de veiculos */
class Veiculos {
  constructor(nome, portas) {
    this.nome = nome;
    this.portas = portas;
  }
}

/* cria veiculo militar */
class Militar extends Veiculos {
  constructor(nome, portas, blindagem, municao) {
    super(nome, portas);
    this.blindagem = blindagem;
    this.municao = municao;
  }
}

/* evento de click do botao */
btn_addCarro.addEventListener("click", () => {
  const divLista = document.createElement("div");
  divLista.setAttribute("class", "veiculoCadastrado");
  const lixeira = document.createElement("img");
  lixeira.setAttribute("src", "/img/lixo.png");
  lixeira.setAttribute("class", "lixeira");

  //   veiculos.appendChild(divLista);

  if (c_tipoCivil.checked) {
    const veiculoCivil = new Veiculos(c_nome.value, c_portas.value);
    divLista.innerHTML = `
      <ul>
      <li>Modelo: ${veiculoCivil.nome}</li>
      <li>Portas: ${veiculoCivil.portas}</li>
      </ul>`;
  } else if (c_tipoMilitar.checked) {
    const veiculoMilitar = new Militar(
      c_nome.value,
      c_portas.value,
      c_blindagem.value,
      c_municao.value
    );
    divLista.innerHTML = `
        <ul>
        <li>Modelo Militar: ${veiculoMilitar.nome}</li>
        <li>Portas: ${veiculoMilitar.portas}</li>
        <li>Blindagem: ${veiculoMilitar.blindagem} inch</li>
        <li>Munição: ${veiculoMilitar.municao}</li>
        </ul>`;
  } else alert(`Selecione um "tipo de veículo.`);

  divLista.appendChild(lixeira);
  veiculos.appendChild(divLista);

  lixeira.addEventListener("click", () => {
    veiculos.removeChild(divLista);
  });
});
