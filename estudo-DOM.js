// DOM - getElelement
// getElementById
{
  const dc1 = document.getElementById("d1");
  console.log(dc1);
  console.log(dc1.id);
  console.log(dc1.innerHTML);

  dc1.innerHTML = "Edio Gonçalves";
  console.log(dc1.innerHTML);
}

// getElementByTagName

{
  let dc2 = document.getElementsByTagName("section");
  console.log(dc2); // aqui tenho uma HTML collection

  dc2 = [...dc2]; // aqui mudo HTML collection para array
  console.log(dc2);

  dc2.map((e) => {
    // percorro o array
    console.log(e.innerHTML);
  });
}

// getElementByTagName
{
  let todosCursos = [...document.getElementsByClassName("curso")];
  let cursosc1 = [...document.getElementsByClassName("c1")];
  let cursosc2 = [...document.getElementsByClassName("c2")];
  console.log(todosCursos);
  console.log(cursosc1);
  console.log(cursosc2);

  todosCursos.map((e) => {
    e.classList.add("fundo");
  });
}

// DOM querySelector and querySelectorAll
// querySlector é mais genérico, ele vai pegar o elemento que for especificado
{
  const divAll = [...document.getElementsByTagName("div")];
  console.log(divAll);

  const divQuery = document.querySelector("div"); // Vai pegar só a primeira div
  const divQueryAll = [...document.querySelectorAll("div")]; // Pega todas div e posso transformar em array
  const divQueryAllCursos = [...document.querySelectorAll(".curso")]; // Pegango todas classes curso
  const divQueryAllDoiElementos = [
    ...document.querySelectorAll("div, section"),
  ];
  const divQueryAllPorPosicao = document.querySelectorAll(".curso")[2];
  console.log(divQuery);
  console.log(divQueryAll);
  console.log(divQueryAllCursos);
  console.log(divQueryAllDoiElementos);
  console.log(divQueryAllPorPosicao);
}

// EVENTS
// <a href="https://www.youtube.com/watch?v=4vCBmu3z5FY&list=PLx4x_zx8csUg_AxxbVWHEyAJ6cBdsYc0T&index=35">YT ENVENT LIST, Professor Bruno (CFB) </a>

`Ex:01`; // Adicionando um evento de click
{
  const buttonHtml = document.querySelector(".html");
  console.log(buttonHtml);
  buttonHtml.addEventListener("click", () => {
    alert("Hello");
  });
}

`Ex:02`; // Encontrando o target para adicionar eventos
{
  const buttonCss = document.querySelector(".css");
  console.log(buttonCss);
  buttonCss.addEventListener("click", (evt) => {
    const buttonCssTarget = evt.target;
    console.log(evt.target);
    buttonCssTarget.classList.add("addViaTarget");
  });
}

// STOP PROPAGATION
// Parar a propogação de um evento

{
  const mainBox = document.querySelector("main");
  const cursos = [...document.querySelectorAll("main .curso")];
  console.log(cursos);

  // Apenas dessa forma o evento será propagado aos filhos
  mainBox.addEventListener("click", () => {
    console.log("Clicado");

    mainBox.chi;
  });

  // Adicionamos um stop propagation para encerrar o evento propagado
  cursos.map((e) => {
    e.addEventListener("click", (element) => {
      element.stopPropagation();
      element.preventDefault();
    });
  });
}
// ADIÇÃO E REMOÇÃO DE ELEMENTOS NO DOM

// Adição de elementos
{
  const adicao = document.querySelector("#adicao");
  const arrayElementos = ["HTML5", "CSS3", "React Native", "JS", "MongoBD"];

  const newDiv = document.createElement("div"); // cria-se uma vid na memoria
  adicao.appendChild(newDiv); // coloca o item da memoria como filho
  newDiv.setAttribute("id", "newDivId"); // cria um atributo ID
  newDiv.setAttribute("class", "newDivClass"); // cria um atributo class

  arrayElementos.map((e, i) => {
    //no map() o 1° parametro é o elemento e o segundo é o index do elemento
    const newElement = document.createElement("div"); // criar a div na memoria
    newElement.setAttribute("id", "n" + (i + 1)); // seta atributo da div que esta na memoria memoria
    newElement.setAttribute("class", "newClass alt" + (i + 1));
    newElement.innerHTML = e; // adiciona um iner HTML na div, baseado no conteudo do array
    newDiv.appendChild(newElement); // insere a div criada como filho de outro elemento
  });
}

// Remoção de elementos
{
  {
    const newDiv = [...document.querySelectorAll("#newDivId div")];
    const newClass = [...document.querySelectorAll(".newClass")];
    newDiv.map((e) => {
      const img = document.createElement("img");
      e.appendChild(img);
      img.setAttribute("src", "./img/lixo.png");
      const newDive = document.querySelector("#newDivId");
      img.addEventListener("click", (evt) => {
        newDive.removeChild(evt.target.parentNode);
      });
    });
  }
}
