import { contatos } from "./bd-modulo.js";

let contato = {
  getTodosContatos: function () {
    return contatos;
  },
  getContato: function (i) {
    return contatos[i];
  },
  addContato: function (newContact, destinoDOM) {
    const cont = {
      nome: newContact.nome,
      telefone: newContact.telefone,
      email: newContact.email,
    };
    contatos.push(cont);

    destinoDOM.innerHTML = "";

    contatos.forEach((element) => {
      const div = document.createElement("div");
      div.setAttribute("class", "contact");
      const p_nome = document.createElement("p");
      p_nome.innerHTML = `Nome....: ${element.nome}`;
      const p_telefone = document.createElement("p");
      p_telefone.innerHTML = `Telefone: ${element.telefone}`;
      const p_email = document.createElement("p");
      p_email.innerHTML = `E-mail...: ${element.email}`;

      div.appendChild(p_nome);
      div.appendChild(p_telefone);
      div.appendChild(p_email);

      destinoDOM.appendChild(div);
    });
  },
};

export default contato;
