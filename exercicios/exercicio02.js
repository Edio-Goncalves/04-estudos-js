const firstBox = document.querySelector("#firstBox");
const secondBox = document.querySelector("#secondBox");

const cursos = ["Javascript", "PHP", "React", "CSS", "JAVA", "C#"];

/* cria div dos cursos */
cursos.map((e, i) => {
  const div = document.createElement("div");
  div.setAttribute("id", "curso" + (i + 1));
  div.setAttribute("class", "curso");
  div.innerHTML = e;
  secondBox.appendChild(div);

  const seletor = document.createElement("input");
  seletor.setAttribute("type", "radio");
  seletor.setAttribute("name", "seletor");
  div.appendChild(seletor);
});
