const box1 = document.querySelector("#firstBox");
const box2 = document.querySelector("#secondBox");
const c1Elements = [...document.querySelectorAll(".c1")];
const btnTransfer = document.querySelector("#btnTransfer");
const btnRestart = document.querySelector("#btnRestart");

c1Elements.map((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("selecionado");
  });
});

function moveElements(a, b) {
  const selecionados = [...a.querySelectorAll(".selecionado")];
  selecionados.map((e) => {
    b.appendChild(e);
    e.classList.remove("selecionado");
  });
}

btnTransfer.addEventListener("click", () => {
  moveElements(box1, box2);
  moveElements(box2, box1);
});

btnRestart.addEventListener("click", () => {
  c1Elements.map((e) => {
    box1.appendChild(e);
    e.classList.remove("selecionado");
  });
});
