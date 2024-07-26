import { contatos } from "./exercicio-modulos/bd-modulo.js";
import contato from "./exercicio-modulos/modulo01.js";
const listContatos = document.querySelector("#listContatos");
const btn_gravar = document.querySelector("#btn_gravar");

btn_gravar.addEventListener("click", () => {
  const contt = {
    nome: document.getElementById("f_nome").value,
    telefone: document.getElementById("f_telefone").value,
    email: document.getElementById("f_email").value,
  };

  contato.addContato(contt, listContatos);
  console.log(contatos);
});
