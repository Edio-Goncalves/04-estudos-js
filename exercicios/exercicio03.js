class Pessoas {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  getNome() {
    return this.nome;
  }
  getIdade() {
    return this.idade;
  }
  setNome() {
    this.nome = nome;
  }
  setIdade() {
    this.idade = idade;
  }
  info() {
    console.log(`-----------------`);
    console.log(`Nome: ${this.nome}`);
    console.log(`Idade: ${this.idade}`);
  }
}

let pessoas = [];
const btn_add = document.querySelector("#btn_add");
const res = document.querySelector(".res");
const errorDiv = document.querySelector("#erro");

const addPessoa = () => {
  res.innerHTML = "";
  pessoas.map((p) => {
    const div = document.createElement("div");
    div.setAttribute("class", "pessoa");
    div.innerHTML = `Nome: ${p.getNome()}</br>Idade: ${p.getIdade()}</br>`;
    res.appendChild(div);
  });
};

btn_add.addEventListener("click", () => {
  const f_name = document.querySelector("#f_name");
  const f_idade = document.querySelector("#f_idade");

  // Verificação para nome
  const nameRegex = /^[A-Za-z\s]+$/;
  if (f_name.value.trim() === "" || !nameRegex.test(f_name.value)) {
    errorDiv.setAttribute("class", "error");
    errorDiv.textContent = "Por favor, insira um nome válido sem números.";
    return;
  }

  // Verificação para idade e campo em branco
  if (isNaN(f_idade.value) || f_idade.value.trim() === "") {
    errorDiv.setAttribute("class", "error");
    errorDiv.textContent = "Por favor, insira uma idade válida.";
    return;
  } else {
    errorDiv.textContent = ""; // Limpa a mensagem de erro se a idade for válida
    errorDiv.classList.remove("error");
  }

  const p = new Pessoas(f_name.value, f_idade.value);
  pessoas.push(p);
  f_name.value = "";
  f_idade.value = "";
  f_name.focus();
  addPessoa();
});
