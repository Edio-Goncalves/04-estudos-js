const firstBox = document.querySelector("#firstBox");
const secondBox = document.querySelector("#secondBox");
const cursos = ["Javascript", "PHP", "React", "CSS", "JAVA", "C#"];
const btnCursoSelecionado = document.querySelector(".cursoSelecionado");
const btnRemoveCurso = document.querySelector(".removerCurso");
const btnAddAntes = document.querySelector(".adicionar.-antes");
const btnAddDepois = document.querySelector(".adicionar.-depois");
const inputNovoCurso = document.querySelector("#inputCurso");
const btnReset = document.querySelector(".reset");
let indice = 0;

/* function cria div do curso */
function newCurso(curso, indice) {
  const criaDiv = document.createElement("div");
  criaDiv.setAttribute("id", "curso" + (indice + 1));
  criaDiv.setAttribute("class", "curso");
  criaDiv.innerHTML = curso;

  const criaInput = document.createElement("input");
  criaInput.setAttribute("type", "radio");
  criaInput.setAttribute("name", "inputRadio");
  criaDiv.appendChild(criaInput);

  indice++;
  return criaDiv;
}

/* map que chama o curso */
cursos.map((curso, indice) => {
  const fnNewCurso = newCurso(curso, indice);
  secondBox.appendChild(fnNewCurso);
});

/* function para selecionar radio checked */
function selectRadio() {
  const checkRadio = [...document.querySelectorAll("input[type=radio]")];
  const checkedRadio = checkRadio.filter((e) => {
    return e.checked;
  });
  return checkedRadio[0];
}

/* Curso selecionado */
btnCursoSelecionado.addEventListener("click", () => {
  checkedRadio = selectRadio();
  try {
    const cr = checkedRadio.previousSibling.textContent;
    alert("Curso selecionado: " + cr);
  } catch (ex) {
    alert("Selecione um curso");
  }
});

/* Curso removido */
btnRemoveCurso.addEventListener("click", () => {
  checkedRadio = selectRadio();
  try {
    const cr = checkedRadio.parentNode;
    cr.remove();
  } catch (ex) {
    alert("Selecione um curso");
  }
});

/* adicionar novo curso antes do selecionado */
btnAddAntes.addEventListener("click", () => {
  checkedRadio = selectRadio();
  try {
    if (inputNovoCurso.value != "") {
      indice = secondBox.children.length;
      const valueinput = inputNovoCurso.value;
      const cr = checkedRadio.parentNode;
      const nc = newCurso(valueinput, indice);
      secondBox.insertBefore(nc, cr);
    } else {
      alert("Digite um curso");
    }
  } catch (ex) {
    alert("Selecione um curso");
  }
});
/* adicionar novo curso antes do selecionado */
btnAddDepois.addEventListener("click", () => {
  checkedRadio = selectRadio();
  try {
    if (inputNovoCurso.value != "") {
      indice = secondBox.children.length;
      const valueinput = inputNovoCurso.value;
      const cr = checkedRadio.parentNode;
      const nc = newCurso(valueinput, indice);
      secondBox.insertBefore(nc, cr.nextSibling);
    } else {
      alert("Digite um curso");
    }
  } catch (ex) {
    alert("Selecione um curso");
  }
});

btnReset.addEventListener("click", () => {
  location.reload();
});
