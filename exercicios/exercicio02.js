const firstBox = document.querySelector("#firstBox");
const secondBox = document.querySelector("#secondBox");
const cursos = ["Javascript", "PHP", "React", "CSS", "JAVA", "C#"];
const btnCursoSelecionado = document.querySelector(".cursoSelecionado");

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

btnCursoSelecionado.addEventListener("click", () => {
  const inputs = [...document.querySelectorAll("input[type=radio]")];
  let inputFilter = inputs.filter((e) => {
    return e.checked;
  });
  inputFilter = inputFilter[0];
  const textInput = inputFilter.parentNode.firstChild.textContent;

  alert(textInput);
});
