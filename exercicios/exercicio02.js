const firstBox = document.querySelector("#firstBox");
const secondBox = document.querySelector("#secondBox");
const cursos = ["Javascript", "PHP", "React", "CSS", "JAVA", "C#"];
const btnCursoSelecionado = document.querySelector(".cursoSelecionado");
const btnRemoveCurso = document.querySelector(".removerCurso");

/* adicionando div para cursos */

cursos.map((e) => {
  const div = document.createElement("div");
  div.setAttribute("id", "c1");
  div.setAttribute("class", "curso");
  secondBox.appendChild(div);
  div.innerHTML = e;

  const inputRadio = document.createElement("input");
  inputRadio.setAttribute("type", "radio");
  inputRadio.setAttribute("name", "InputRadio");
  div.appendChild(inputRadio);
});

/* function que checa os radios e retorna o selecionado */
function radiosSelecionados() {
  const radios = [...document.querySelectorAll("input[type=radio]")];
  let radioChecked = radios.filter((e) => {
    return e.checked;
  });
  return radioChecked[0];
}

/* executa function e imprime valor no alert */
btnCursoSelecionado.addEventListener("click", () => {
  const fnChecked = radiosSelecionados();
  try {
    const cursoSelecionado = fnChecked.parentNode.textContent;
    alert("Curso selecionado: " + cursoSelecionado);
  } catch (ex) {
    alert("Selecione um curso");
  }
});

/* executa function e deleta div */
btnRemoveCurso.addEventListener("click", () => {
  const fnChecked = radiosSelecionados();
  try {
    const cursoSelecionado = fnChecked.parentNode;
    cursoSelecionado.remove();
  } catch (ex) {
    alert("Selecione um curso");
  }
});
