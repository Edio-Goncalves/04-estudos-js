# 04-estudos-js

### ÍNDICE

- [VARIAVEIS](#variaveis)
- [OPERADORES](#operadores)
- [TYPEOF](#typeof)
- [SPREAD](#spread)
- [CONDIÇÕES](#condições)
- [SWITCH CASE](#switch-case)
- [LOOPS](#loops)
- [FUNCTIONS](#function)
- [DOM](#dom)
- [MANIPULAÇÃO DE ELEMENTOS NO DOM](#manipulação-de-elementos-no-dom)
- [STOP PROPAGATION](#stop-propagation)
- [STRING](#string)
- [METODOS DO ARRAY](#metodos-do-array)
- [COLEÇÕES](#coleções)
- [OBJETOS](#objetos)
- [OBJETOS LITERAIS](#objetos-literais)
- [CONCEITO DE HERANÇA](#conceito-de-herança)
- [JSON](#json)
- [POLIMORFISMO](#polimorfismo)
- [PROTOTYPE](#prototype)
- [PROMISE](#promise)
- [MATH](#math)
- [SYMBOL](#symbol)

### LINKS DE VÍDEOS CURSOS E DOCUMENTAÇÃO

- <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">MDN | Javascript </a>
- <a href="https://www.youtube.com/watch?v=E4DBTqgxHGM&list=PLx4x_zx8csUg_AxxbVWHEyAJ6cBdsYc0T">Javascript Referência em Vídeo do Professor Bruno (CFB) </a>
- <a href="https://hcode.com.br/cursos/javascript">HCODE Curso Javascript </a>

#

### CONSOLE

`Console.log()` // Para imprimir no console, vamos usar para debugar

#

### VARIAVEIS

Variáveis var, let e const (declaração de variáveis e escopo de uso)
`var nome = "Edio";` // "var" Escopo global e pode ser alterada  
`let sobrenome = "Gonçalves";` // "let" Escopo de bloco e pode ser alterada  
`const agnome = "Junior";` // "const" Escopo de bloco e NÃO pode ser alterada

#

### OPERADORES

- Operadores matemáticos (+, -, /, \*, %, ++, --)

```
var soma = n1 + n2; // SOMA

var subtracao = n1 - n2; // SUBTRAÇÃO

var divisao = n1 / n2; // DIVISÃO

var multiplicacao = n1 * n2; // MULTIPLICAÇÃO

var mod = n3 % n2; // MOD

var incremento = n1; // INCREMENTO
incremento++;

var decremento = n1; // DECREMENTO
decremento--;

var operadores = n1; //
operadores += 5;

```

#

- Operadores de comparação (<, >, >=, >=, ==, ===)

```
{
  const n1 = 10,
    n2 = 2,
    n3 = 10;

  console.log((n1 > n2) + " (> maior que)");
  console.log((n1 < n2) + " (< menor que)");
  console.log((n1 >= n2) + " (>= maior ou igual)");
  console.log((n1 <= n3) + " (<= menor ou igual)");
  console.log(
    (n1 == n3) + " (== comparação, apenas = é operador de atribuição)"
  );
  console.log((n1 != n3) + " (!= significa diferente, no caso n1 é igual n3)");
  console.log(
    !(n1 == n3) +
      " (! negação, se for true ele entrega false, pois inverte a operação)"
  );
}
```

#

- Operadores lógicos (&& , | | )

```
AND (e)     OR (ou)
V + V = V   V + V = V
V + F = F   V + F = V
F + V = F   F + V = V
F + F = F   F + F = F

AND= só vai ser true se todas forem verdadeiras
OR= só vai ser false se todas forem falsa
```

```
{
  let n1, n2, n3;
  n1 = 10;
  n2 = 2;
  n3 = 10;

  console.log(n1 > n2 && n1 > n3); // false (V+F=F)
  console.log(n1 > n2 || n1 > n3); // true (V+F=V)
}
```

#

- Operadores de PÓS e PRE incremento e decremento (++, --)

PÓS incremento:

```
  console.log(n1++);
  console.log(n1);
  /* Primeiro usa o valor e depois incrementa,
  vai usar o valor original e imprimir a alteração após usá-lo,
  ou seja, a alteração só vai aparecer na próxima vez que for requisitado */
```

PRÉ incremento:

```
console.log(++n2);
  console.log(n2);
  /* Primeiro incrementa o valor e depois usa, ou seja a alteração aparece de imediato */
```

#

- Operação Ternária (?)

Sintaxe:  
(teste logico ? se verdadeiro (true) : se falso (false))

```
let num = 11;
  res = !(num % 2) ? "é par" : "é impar";
  console.log(res); // se o resultado da operação logica for true ele retorna a 1° opção se false a 2°
/* Foi utilizada (!) a negação porque o resultado "0" significa false e "1" significa true.
   O resto (%) de um número par sempre vai ser "0". */
```

#

### TYPEOF

<a href="www.youtube.com/watch?v=_qgObfmqokw&list=PLx4x_zx8csUg_AxxbVWHEyAJ6cBdsYc0T&index=13">LINK Youtube Typeof</a>

Usado para identificar o tipo de dado

```
{
  let v1 = 10;
  let v2 = "10";
  let v3 = v1 === v2;
  let v4 = { nome: "Edio" };

  console.log(typeof v1); // number
  console.log(typeof v2); // string
  console.log(typeof v3); // boolean
  console.log(typeof v4); // object
}
```

#

### SPREAD

(...) operador para quebrar um conjunto de elementos e devolver elemento à elemento  
Transformar elementos HTML em um array de elementos HTML e conseguir usar todas funções de array em elementos HTML

```
{
  const objs1 = document.getElementsByTagName("div");
  const objs2 = [...document.getElementsByTagName("div")];

  console.log(objs1); // aqui vou ter uma HTML collection
  console.log(objs2); // aqui vou ter todas funções de um array, vou conseguir manipular os elementos
}
```

#

### CONDIÇÕES

<p class="separador">Condições (if, else if, else (se, senão, então))</p>

Ex: 01 (um bloco de comando)

```
  let n = 10;
  if (n > 5) {
    console.log("Verdadeiro");
  }
```

Ex: 02 (doi blocos de comando)

```
  let n = 10;
  if (n >= 20) {
    console.log("verdadeiro");
  } else {
    console.log("falso");
  }
```

Ex: 03 (três blocos de comando)

```
  let n = 10;
  if (n >= 20) {
    console.log("é maior que 20");
  } else if (n >= 11) {
    console.log("é maior que 11");
  } else {
    console.log("é menor ou igual a 10");
  }
```

Ex: 04 (operações condicionais)

```
  let clima = "sol";
  let energia = 70;

  if (clima == "sol" && energia >= 90) {
    console.log("Vou a praia");
  } else if (clima == "sol" && energia >= 70) {
    console.log("Vou ao cinema");
  } else {
    console.log("Vou ficar em casa");
  }
```

#

### SWITCH CASE

Avalia uma expressão e se algum caso tiver correspondência ele executa o seu bloco de comandos se nenhum caso tem correspondência ele executa o default

```
{
  let colocacao = 10;

  switch (colocacao) {
    case 1:
      console.log("Primeiro lugar");
      break;
    case 2:
      console.log("Segundo lugar");
      break;
    case 3:
      console.log("Terceiro lugar");
      break;
    case 4:
    case 5:
    case 6:
      console.log("Premio de participação");
      break;
    default:
      console.log("Não pegou pódium");
      break;
  }
}
```

#

### LOOPS

Cada repetição que o looping executar é uma interação que ele está executando;  
Loops podem ser definidos (for) e indefinidos (while, do while);  
empre que sabemos a quantidade de interações que vamos ter usamos o "for()";  
Quando não sabemos a quantidade exata de interação que precisamos usamos "while()";

#

- For( )

Sintaxe:  
 for(inicialização; condição; controle)  
 OBS: enquanto não retorar false ele não vai parar

Ex: 01

```
for (let i = 0; i < 5; i++) {
  console.log("valor do i = " + i);
}
```

Ex: 02

```
let arraypar = [];
let arrayimpar = [];
for (let i = 0; i < 100; i++) {
 if (i % 2 == 0) {
   arraypar.push(i);
 } else {
   arrayimpar.push(i);
 }
}
console.log("Arrey par -> " + arraypar);
console.log("Arrey impar -> " + arrayimpar);
```

#

- For(in)

Basicamente entrega o index length

```
let anum = [10, 20, 30, 40, 50];

for (let i = 0; i < anum.length; i++) {
    console.log(i);
}
for (n in anum) {
    console.log(n);
// percorre o index posicional do elemento (length)
}
```

#

- For(of)

Entrega o conteúdo de cada index da coleção

Ex: 01

```
for (let i = 0; i < anum.length; i++) {
    console.log(anum[i]);
}
for (n of anum) {
    console.log(n);
// percorre diretamente o conteudo do elemento
}
```

Ex: 02

```

const objts = document.getElementsByTagName("div");

for (o in objts) {
    console.log((objts[o].innerHTML = "Teste do in"));
}
for (o of objts) {
    console.log((o.innerHTML = "Teste do of"));
}

```

#

- While

Enquanto a condição for verdadeira

```
let n = 5;
let fatorial = 1;
while (n > 1) {
fatorial \*= n;
n--;
}
console.log(fatorial);
```

#

- Do While

Ele garante que ao menos uma vez o bloco de comando será executado

Ex: 01

```
let g = 10;
while (g < 10) {
    console.log("While executado");
g++;
}
console.log("While Pulou do bloco de comando");
```

Ex:02

```
let c = 10;
do {
    console.log("While executado");
c++;
} while (c < 10);
    console.log("While Pulou do bloco de comando");
```

#

### FUNCTION

É um bloco de comandos que vai executar em um momento oportuno

- Conceito de return

OBS: Sempre que uma function lê um "return" a função encerra-se

```
{
let n = 1;
let arrayNome = [];

function nome() {
    return "Edio";
}

for (let i = 0; i < 10; i++) {
    arrayNome.push(nome() + n);
    n++;
}

console.log(arrayNome);
}
```

#

- Funções parametrizadas

Funções que recebem paramentros  
Podemos colocar valores padrões para cada parametro caso ele não seja chamado (como o "p4" no exemplo abaixo)

```
{
const vlp = 0;

function soma(p1 = vlp, p2 = vlp, p3 = vlp, p4 = vlp) {
    return p1 + " " + p2 + p3 + " nascido em " + (p4 - p2);
}

let resultado = soma("Edio", 37, "anos", 2024);

console.log(resultado);
}
```

#

- Funções parametrizadas "rest"

É uma forma de passagem de parametro onde não é preciso especificar efetivamente a quantidade de parametros dentro da função

```
{
function soma(...valores) {
    let res = 0;
    for (let v of valores) {
    res += v;
}
return res;
}

console.log(soma(10, 20, 30, 40));
}
```

#

- Funções anonimas

Funções criadas em tempo de execução, ela não precisa de um nome para ela o que deixa ela fora do armazenamento da memoria  
Por obrigação é preciso associar a funçaõ a alguma variavel

Ex: 01 Function

```
{
const f = function (v1, v2) {
    return v1 \* v2;
};

console.log(f(10, 5));
}
```

Ex: 02 Função construtora

```
{
const f = new Function("v1", "v2", "v3", "return v1 + v2 + v3");

console.log(f(5, 7, 11));
}
```

Ex: 03 Arrow Function

```
{
const soma = (v1, v2) => {
    return v1 \* v2;
};

console.log(soma(2, 3));
}
```

#

- Função Geradora

<a href="https://www.youtube.com/watch?v=3j9Ikmm2ieA&list=PLx4x_zx8csUg_AxxbVWHEyAJ6cBdsYc0T&index=28">YT Função Geradora, Professor Bruno (CFB) </a>

Ela tem o seu retorno adiado até que for preciso o seu retorno, a propria função tem o controle de sua execução  
Temos que usar a palavra "function"

Ex: 01

```
{

  function* cores() {
    yield "vermelho";
    yield "verde";
    yield "azul";
  }
  const itc = cores();
  console.log(itc.next().value);
  console.log(itc.next().value);
}
```

Ex: 02

```
{
  function* perguntas() {
    const nome = yield "Qual seu nome?";
    const esporte = yield "Qual seu esporte favorito?";
    return "Meu nome é " + nome + " e meu esporte favorito é " + esporte;
  }
  const itc = perguntas();
  console.log(itc.next().value);
  console.log(itc.next("Edio").value);
  console.log(itc.next("Futebol").value);
}
```

Ex: 03

```
{
  function* contador() {
    let i = 0;
    while (true) {
      yield i++;
      if (i > 10) break;
    }
  }
  const itc = contador();
  for (let v of itc) {
    console.log(v);
  }
}
```

#

### DOM

- getElementById

```
{
  const dc1 = document.getElementById("d1");
  console.log(dc1);
  console.log(dc1.id);
  console.log(dc1.innerHTML);

  dc1.innerHTML = "Edio Gonçalves";
  console.log(dc1.innerHTML);
}
```

#

- getElementByTagName

```
{
  let dc2 = document.getElementsByTagName("section");
  console.log(dc2); /* aqui tenho uma HTML collection */

  dc2 = [...dc2]; /* aqui mudo HTML collection para array */
  console.log(dc2);

  dc2.map((e) => {
    /* percorro o array */
    console.log(e.innerHTML);
  });
}
```

#

- getElementByClassName

```
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
```

- querySelector and querySelectorAll

QuerySelector é mais genérico, ele vai pegar o elemento que for especificado

```
{
const divAll = [...document.getElementsByTagName("div")];
console.log(divAll);

const divQuery = document.querySelector("div"); /*  Vai pegar só a primeira div */
const divQueryAll = [...document.querySelectorAll("div")]; /*  Pega todas div e posso */  transformar em array
const divQueryAllCursos = [...document.querySelectorAll(".curso")];/*  Pegango todas classes curso */
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
```

#

### MANIPULAÇÃO DE ELEMENTOS NO DOM

- Adição de elementos

```
  const adicao = document.querySelector("#adicao");
  const arrayElementos = ["HTML5", "CSS3", "React Native", "JS", "MongoBD"];

  const newDiv = document.createElement("div"); /* cria-se uma vid na memoria */
  adicao.appendChild(newDiv); /* coloca o item da memoria como filho */
  newDiv.setAttribute("id", "newDivId"); /* cria um atributo ID */
  newDiv.setAttribute("class", "newDivClass"); /* cria um atributo class */

  arrayElementos.map((e, i) => {
    <!-- no map() o 1° parametro é o elemento e o segundo é o index do elemento */
    const newElement = document.createElement("div"); /* criar a div na memoria */
    newElement.setAttribute("id", "n" + (i + 1)); /* seta atributo da div que esta na memoria memoria -->
    newElement.setAttribute("class", "newClass alt" + (i + 1));
    newElement.innerHTML = e; /* adiciona um iner HTML na div, baseado no conteudo do array */
    newDiv.appendChild(newElement); /* insere a div criada como filho de outro elemento */
  });

```

#

- Remoção de elementos

```
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
```

#

### EVENTS

<a href="https://www.youtube.com/watch?v=4vCBmu3z5FY&list=PLx4x_zx8csUg_AxxbVWHEyAJ6cBdsYc0T&index=35">YT ENVENT LIST, Professor Bruno (CFB) </a>

Ex:01 - Adicionando um evento de click

```
{
  const buttonHtml = document.querySelector(".html");
  console.log(buttonHtml);
  buttonHtml.addEventListener("click", () => {
    alert("Hello");
  });
}
```

Ex:02 - Encontrando o target para adicionar eventos

```
{
  const buttonCss = document.querySelector(".css");
  console.log(buttonCss);
  buttonCss.addEventListener("click", (evt) => {
    const buttonCssTarget = evt.target;
    console.log(evt.target);
    buttonCssTarget.classList.add("addViaTarget");
  });
}
```

#

### STOP PROPAGATION

Parar a propogação de um evento

```
  const mainBox = document.querySelector("main");
  const cursos = [...document.querySelectorAll("main .curso")];
  console.log(cursos);

/*  Apenas dessa forma o evento será propagado aos filhos */
  mainBox.addEventListener("click", () => {
    console.log("Clicado");

    mainBox.chi;
  });

/*  Adicionamos um stop propagation para encerrar o evento propagado */
  cursos.map((e) => {
    e.addEventListener("click", (element) => {
      element.stopPropagation();
      element.preventDefault();
    });
  });
```

#

### STRING

<a href="https://www.youtube.com/watch?v=lv4hFkirhps&list=PLx4x_zx8csUg_AxxbVWHEyAJ6cBdsYc0T&index=102">YT Funções par atrabalhar com string, Professor Bruno (CFB) </a>;

- Funções para trabalhar com string

```
{
  let nome = new String("Edio");
  let nome2 = new String("Edio");
  let sobrenome = new String("Gonçalves");
  console.log(nome);
  console.log(typeof nome);
  console.log(nome.charAt(3)); // mostra o caractere de acordo com a posição
  console.log(nome.charCodeAt(2)); // Retorna o código do caractere
  console.log(nome.concat(` ${sobrenome}`)); // Ela retorna o valor concatenado mas nao altera o valor
  let newNome = nome.concat(` ${sobrenome}`);
  console.log(newNome);
  console.log(nome.indexOf("d")); // Busca a posição da primeira sentença que está pesquisando, senao tiver retorna -1
  console.log(newNome.lastIndexOf("o")); // Busca posição do ultimo caractere
  console.log(nome.localeCompare(nome2)); // Retorno 0 significa que são iguais, retorno -1 significa que a primeira string é maior e se for 1 a segunda string é maior
  console.log(nome.replace("Ed", "Ted")); // Substitui o primeiro caractere
  console.log(sobrenome.slice(1, 6)); // Retorna apenas o corte indicado
  console.log(newNome.split(" ")); // Ele recorta onde indicado e faz um array com o restante
  console.log(newNome.substring(0, 5)); // Retorna o que está dentro das posições indicadas
  console.log(newNome.substr(5, 8)); // Marca a posição inicial e configura a quantidade de posiçõe subsequentes
  console.log(nome.toUpperCase()); // Coloca em caixa alta
  console.log(nome.toLocaleLowerCase()); // coloca toda em minusculo
  console.log(nome.valueOf()); // Retorna apenas o valor do objeto, valor primitivo(Real)
  let num = 10;
  num = num.toString();
  console.log(num); // Transforma o valor em string
  console.log(newNome.startsWith("L")); // Verifica o inicio da strin e retorna true or false
  console.log(nome.endsWith("io")); // Verifica o termino e retorna true or false
  console.log(newNome.includes("çal")); // Verifica se em alguma parte da string possui os caracteres
  console.log(nome.repeat(4)); // Para repetir a string de acordo com a quantidade desejada
}
```

#

- Templete string

```
const template = "templete";
const teste = "teste";

console.log("este é um " + teste + " de " + template + " string");
console.log(`este é um ${teste} de ${template} string`);
```

Ex01

```
const carros = ["Corola", "Golf", "Astra", "fusca"];

let ol = `<ol>`;
carros.map((element) => {
ol += `<li>${element}</li>`;
});
ol += `</ol>`;

console.log(ol);
```

#

### METODOS DO ARRAY

- filter()

Ele vai percorrer o array e vai retornar apenas os elementos selecionados  
Filter(valor, posição, array)=>{}

```
{
  const idades = [15, 16, 17, 18, 19, 20, 21, 22, 23];
  console.log(idades);

  const maior = idades.filter((val) => {
    if (val >= 20) {
      return val;
    }
  });
  console.log(maior);
}
```

#

- find()

Tem por finalidade percorrer um grupo de dados e entrontrar a compatibilidade da pesquisa  
Sempre que ele encontrar um valor vai retornar true e quando não vai retornar undefined

```
var arrayNumeros = [1, 2, 5, 7, 32, 41, 57, 59, 84];

{
  const p_array = document.querySelector(".arrayInner");
  const buttonPesquisa = document.querySelector(".pesquisaFind");
  const resultado = document.querySelector(".recebeResultado");
  const inputPesquisa = document.querySelector("input[name=campoFind]");

  p_array.innerHTML = "[ " + arrayNumeros + " ]";

  buttonPesquisa.addEventListener("click", () => {
    arrayNumeros.find((e, i) => {
      resultado.innerHTML = "Nenhum resultado compativel encontrado";
      if (e == inputPesquisa.value) {
        resultado.innerHTML = "Valor pesquisado " + e + " na posição " + i;
        return e;
      }
    });
  });
}
```

#

- every()

Ele vai passar de elemento em elemento e vai verificar a equivalencia dos detodos os dados de acordo com a regra especificada  
Se todos elementos equivalerem ele vai retornar true, se não false

```
{
const buttonVerificar = document.querySelector(".verificarEvery");
const resultado = document.querySelector(".recebeResultado");
const inputPesquisa = document.querySelector("input[name=campoEvery]");

buttonVerificar.addEventListener("click", () => {
const valorPesquisa = Number(inputPesquisa.value);

if (isNaN(valorPesquisa)) {
resultado.innerHTML = "Por favor, insira um número.";
return;
}

    const ret = arrayNumeros.every((e, i) => {
      if (e > valorPesquisa) {
        resultado.innerHTML = "Array não conforme na posição " + (i + 1);
        return false;
      }
      return true;
    });

    if (ret) {
      resultado.innerHTML =
        "OK, no array não contém números maiores que " + valorPesquisa;
    }
});
}
```

#

- some()

Ele vai passar de elemento em elemento e vai verificar se pelo menos um dos elementos é compativel com a busca  
Se ao menos um elemento equivaler ele retorna true, se não false

```
{
const buttonVerificar = document.querySelector(".verificarSome");
const resultado = document.querySelector(".recebeResultado");
const inputPesquisa2 = document.querySelector("input[name=campoSome]");

buttonVerificar.addEventListener("click", () => {
const valorPesquisa = Number(inputPesquisa2.value);

    if (isNaN(valorPesquisa)) {
      resultado.innerHTML = "Por favor, insira um número.";
      return;
    }

    let encontrado = false;

    arrayNumeros.some((element, i) => {
      if (element == valorPesquisa) {
        resultado.innerHTML =
          "SIM, o elemento da posição " + (i + 1) + " está de acordo";
        encontrado = true;
        return true;
      }
      return false;
    });

    if (!encontrado) {
      resultado.innerHTML = "NÃO, nenhum elemento corresponde";
    }

});
}
```

#

- reduce()

Tem a funcionalidade de reduzir um array de acordo com a operação exigida

```
{
  const buttonVerificar = document.querySelector(".verificarReduce");
  const resultado = document.querySelector(".recebeResultado");
  const checkSoma = document.querySelector(".somaInp input");
  const checkMedia = document.querySelector(".mediaInp input");

  /* verifica se o array contem valores */
  buttonVerificar.addEventListener("click", () => {
    if (!arrayNumeros.length) {
      resultado.innerHTML = "O array está vazio";
      return;
    }

    /* executa o reduce */
    const soma = arrayNumeros.reduce(
      (anterior, element) => anterior + element,
      0
    );

    const media = soma / arrayNumeros.length;

    if (checkSoma.checked) {
      resultado.innerHTML = "A soma deu o total de " + soma;
    } else if (checkMedia.checked) {
      resultado.innerHTML = "A média deu o valor de " + media;
    } else {
      resultado.innerHTML = "Selecione uma das opções";
    }
  });
}
```

#

### COLEÇÕES

- arreys

```
const btn_soma = document.querySelector("#btn_soma");
const btn_subtracao = document.querySelector("#btn_subtracao");
const btn_multiplicacao = document.querySelector("#btn_multiplicacao");
const btn_divisão = document.querySelector("#btn_divisão");
const valor1 = document.querySelector("#valor1");
const valor2 = document.querySelector("#valor2");
const resultado = document.querySelector(".inputRes");

const resFunction = [
() => {
const soma = [valor1.value, valor2.value];
const res = Number(soma[0]) + Number(soma[1]);
resultado.value = res;
},
() => {
const subtracao = [valor1.value, valor2.value];
const res = Number(subtracao[0]) - Number(subtracao[1]);
resultado.value = res;
},
() => {
const multiplicacao = [valor1.value, valor2.value];
const res = Number(multiplicacao[0]) \* Number(multiplicacao[1]);
resultado.value = res;
},
() => {
const divisao = [valor1.value, valor2.value];
const res = Number(divisao[0]) / Number(divisao[1]);
resultado.value = res;
},
];

btn_soma.addEventListener("click", resFunction[0]);
btn_subtracao.addEventListener("click", resFunction[1]);
btn_multiplicacao.addEventListener("click", resFunction[2]);
btn_divisão.addEventListener("click", resFunction[3]);
```

#

- map

<a href="https://www.youtube.com/watch?v=y9Tz0bjXBXs&list=PLx4x_zx8csUg_AxxbVWHEyAJ6cBdsYc0T&index=55"> YT COLEÇÃO MAP, Professor Bruno (CFB){" "} </a>;

Coleções do map é uma coleção chaves to valor  
 Se uma chave for repetida a ultima chave vai substituir o valor  
 É preciso instanciar a coleção, devemos usar "new" para reservar a memoria para poder se usada

```
let recebeMapa = "";
let mapa = new Map();

mapa.set("casa", 2043);
mapa.set("home", "home");
mapa.set("150", 2043);
mapa.set(180, 1999);
console.log(mapa);
```

Ex 01 - Buscando o valor da chave na coleção

```
recebeMapa = mapa.get("casa"); // sempre que uma chave for buscada o retorno vai ser o valor
console.log(recebeMapa);
recebeMapa = mapa.get(180);
console.log(recebeMapa);
```

Ex 02 - Condicionando se existe ou nao na coleção

```
  if (mapa.has("leitura")) {
    console.log("A chave leitura está na coleção");
  } else {
    console.log("A chave leitura NÃO está na coleção");
  }
```

Eex 03 - Deletando e Inteirando a coleção

```
  mapa.delete(180);
  mapa.forEach((el) => {
    console.log(el);
  });

```

#

- set

<a href="https://www.youtube.com/watch?v=v24QAyoiAo0&list=PLx4x_zx8csUg_AxxbVWHEyAJ6cBdsYc0T&index=56"> YT COLEÇÃO SET, Professor Bruno (CFB)</a>;

É uma coleção que nao permite entrdas duplicadas de elementos  
É como a coleção map, devemos reservar memoria para a coleção ("new")

```
let colecaoSet = new Set(["musica", "musica boa", "musica ruim"]);
console.log(colecaoSet);

colecaoSet.add("Minhas músicas");
colecaoSet.add("musica"); // esse paramero nao adicionou
colecaoSet.add("musica"); // esse paramero nao adicionou
colecaoSet.add(385);
console.log(colecaoSet);
```

Ex01

```
for (m of colecaoSet) {
  console.log(m);
}
```

Ex02

```
colecaoSet.clear();
console.log(colecaoSet);
```

#

### OBJETOS

- Class + Construtor

class - é a base, é a instrução, é onde deve ficar tudo que o objeto contempla (metodos e propriedas)  
Cada objeto é independente do outro, se um objeto for mudado não vai interfirir no outro da mesma classe

Ex01 - metodo contrutor tradicional

```
{
  class Pessoa {
    // Se o construtor não receber nenhum parametro ao estanciar a class também não passamos
    constructor(pname) {
      this.name = pname;
    }
  }
  // Aqui estanciamos a class
  let p1 = new Pessoa("Edio"); // o parenteses faz uma conexão direta com o parenteses do contrutor da class
  let p2 = new Pessoa("Gonçalves");
  let p3 = new Pessoa("Junior");

  console.log(p1.name);
  console.log(p2.name);
  console.log(p3.name);
}
```

Ex02

```
{
  class Carros {
    constructor(pname, ptipo) {
      this.name = pname;
      if (ptipo == 1) {
        this.tipo = "Esportivo";
        this.velmax = 300;
      } else if (ptipo == 2) {
        this.tipo = "Passeio";
        this.velmax = 150;
      } else {
        this.tipo = "Luxo";
        this.velmax = 190;
      }
    }
    getName() {
      return this.name;
    }
    getTipo() {
      return this.tipo;
    }
    getVelmax() {
      return this.velmax;
    }
    getInfo() {
      return [this.name, this.tipo, this.velmax];
    }

    info() {
      console.log(`Nome: ${this.name}`);
      console.log(`tipo: ${this.tipo}`);
      console.log(`velmax: ${this.velmax}`);
      console.log("-------------------------");
    }
  }

  let c1 = new Carros("Ferrari", 1);
  let c2 = new Carros("Mercedez-Benz Classe-A", 3);
  let c3 = new Carros("HB20", 2);

  console.log(c1.name, c1.tipo, c1.velmax);
  console.log(c2.name, c2.tipo, c2.velmax);

  c1.info();
  c3.info();

  console.log(c2.getName());
  console.log(c2.getInfo()[2]);
}
```

#

- Método com functions

Via ter o mesmo resultado com uma sintaxe diferente, sendo mais próxima dos objetos literais  
Vamos retirar a class e o construto e adicionar functions anonimas e o "this." nos métodos e propriedades

```
{
  function Carros2(pname, ptipo) {
    this.name = pname;
    if (ptipo == 1) {
      this.tipo = "Esportivo";
      this.velmax = 300;
    } else if (ptipo == 2) {
      this.tipo = "Passeio";
      this.velmax = 150;
    } else {
      this.tipo = "Luxo";
      this.velmax = 190;
    }

    this.getName = function () {
      return this.name;
    };

    this.getTipo = function () {
      return this.tipo;
    };

    this.getVelmax = function () {
      return this.velmax;
    };

    this.getInfo = function () {
      return [this.name, this.tipo, this.velmax];
    };

    this.info = function () {
      console.log(`Nome: ${this.name}`);
      console.log(`Tipo: ${this.tipo}`);
      console.log(`Velocidade Máxima: ${this.velmax}`);
      console.log("-------------------------");
    };
  }

  let ca1 = new Carros2("Ferrari", 1);
  let ca2 = new Carros2("Mercedez-Benz Classe-A", 3);
  let ca3 = new Carros2("HB20", 2);

  console.log(ca1.name, ca1.tipo, ca1.velmax);
  console.log(ca2.name, ca2.tipo, ca2.velmax);

  ca1.info();
  ca3.info();

  console.log(ca2.getName());
  console.log(ca2.getInfo()[2]);
}
```

#

### OBJETOS LITERAIS

No conceito de objetos literais nao temos mais os objetos independetes como nos objetos construtores  
Todos objetos da mesma classe vao ter o mesmo endereço de memoria  
A classe é um objeto único referenciado na memoria e não objetos independentes

```
{
  const humano = {
    nome: "Edio",
    getNome: function () {
      return this.nome;
    },
    setNome: function (nome) {
      this.nome = nome;
    },
  };
  const p2 = humano;
  const p3 = humano;
  // p2 e p3 em objeto literal não irá instanciar 2 objetos distintos e sim fazer alterações no mesmo objeto

  p2.nome = "Outro Edio";
  p2["nome"] = "Outro Edio Novamente";
  humano.setNome("Edio pelo setNome");

  console.log(humano.nome);
  console.log(p2.getNome());
  console.log(p3.nome);
}
```

- Objeto literal simples

```
const computador = {
  cpu: "i9",
  ram: "64gb",
  hd: "2tb",
  info: function () {
    // Cria um método
    console.log(`CPU: ${this.cpu}`);
    console.log(`RAM: ${this.ram}`);
    console.log(`HD: ${this.hd}`);
    console.log(`VIDEO: ${this.video}`);
    console.log(`MONITOR: ${this.monitor}`);
  },
};

computador.video = "nVidea"; // Adiciona por.name
computador["monitor"] = '24"'; // Adiciona por ["name"]

computador.info(); // Chama o método, tem que estar abaixo das novas adições ou será undefined

console.log(computador); // imprime todo objeto
console.log(computador.cpu); // imprime valor do "cpu:"
console.log(computador["hd"]); // Imprime valor do "hd:"
```

- Objeto com array

```
const computadores = [
  {
    cpu: "i8",
    ram: "32gb",
    hd: "3tb",
  },
  {
    cpu: "i9",
    ram: "64gb",
    hd: "2tb",
  },
  {
    cpu: "i7",
    ram: "16gb",
    hd: "1tb",
  },
];

console.log(computadores[0]); // Imprime o objeto na posição [0]
console.log(computadores[2].cpu); // Imprime o cpu: do objet na posição [2]
console.log(computadores[1]["hd"]); // Imprime o hd: do objet na posição [1]
```

- Object interface

```
const obj1 = {
  obj1: 1,
  tst1: "objeto 01",
};
const obj2 = {
  obj2: 2,
  tst2: "objeto 02",
};
const obj3 = {
  obj3: 2,
  tst1: "objeto 03", //tst1 se repete, em um merge ele substitui pelo ultimo valor da propriedade
};

const clone = Object.assign({}, obj1);
console.log(clone);

const merge = Object.assign(obj1, obj2, obj3);
console.log(merge); // Cada objeto tem de ter propriedades diferentes ou ele vai substituir o valor
```

#

### CONCEITO DE HERANÇA

<a href="https://www.youtube.com/watch?v=-fOCg39SBzc&list=PLx4x_zx8csUg_AxxbVWHEyAJ6cBdsYc0T&index=63">YT Função Geradora, Professor Bruno (CFB) </a>

É basicamente uma classe que herda outra classe
Podemos ter uma classe pai que vai ceder metodos e propriedades para classes filho
Tudo que está implementado na classe pai vale para a classe filho

```

{
class Modelocarro {
// Class PAI
constructor(nome, portas) {
this.nome = nome;
this.portas = portas;
this.ligado = false;
this.vel = 0;
this.cor = undefined;
}
ligar = function () {
this.ligado = true;
};
desligar = function () {
this.ligado = false;
};
setCor = function (cor) {
this.cor = cor;
};
}

const c1 = new Modelocarro("Passeio", 4);
c1.ligar();
c1.setCor("Preto");

console.log(`--------------------------`);
console.log(`Nome: ${c1.nome}`);
console.log(`Portas: ${c1.portas}`);
console.log(`Ligado: ${c1.ligado ? "sim" : "Não"}`);
console.log(`Velocidade: ${c1.vel}`);
console.log(`Cor: ${c1.cor}`);

class Militar extends Modelocarro {
// class filho, preciso criar o construtor para o filho
constructor(nome, portas, blindagem, municao) {
super(nome, portas);
this.blindagem = blindagem;
this.municao = municao;
this.setCor("verde");
}
atirar = function () {
if (this.municao > 0) {
this.municao--;
}
};
}

const c2 = new Militar("Lutador", 1, "Pesada", 20);
c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();

console.log(`--------------------------`);
console.log(`Nome: ${c2.nome}`);
console.log(`Portas: ${c2.portas}`);
console.log(`Velocidade: ${c2.blindagem}`);
console.log(`Munição: ${c2.municao}`);
console.log(`Cor: ${c2.cor}`);
}

```

#

### JSON

- Conversão de dados

```


const pessoa = {
nome: "Edio",
idade: 37,
estudos: {
curso01: "Javascript",
curso02: "NodeJS",
curso03: "HTML",
curso04: "CSS",
},
};
const string_pessoa =
'{"nome":"Edio","idade":37,"estudos":{"curso01":"Javascript","curso02":"NodeJS","curso03":"HTML","curso04":"CSS"}';

/_ converte um objeto em uma string JSON _/
const s_json = JSON.stringify(pessoa);

/_ converte um JSON em um objeto _/
const o_json = JSON.parse(string_pessoa);

console.log(s _ json); /_ Imprime o JSON vindo de um objeto _/
console.log(o_json); /_ Imprime o objeto vindo de um JSON \*/

}

```

#

### PROTOTYPE

Serve basicamente para adicionar uma propriedade ou um método a um objeto, principalmente a objetos de função

```

{
const Nave = function (energia) {
this.energia = energia;
this.disparos = disparos = 100;
};
const n1 = new Nave(100);

Nave.prototype.vidas = 3;
Nave.prototype.disparar = function () {
if (this.disparos > 0) {
this.disparos--;
}
};

n1.disparar();
n1.disparar();
n1.disparar();
n1.disparar();
n1.disparar();

console.log(Nave);
console.log(n1);
console.log(n1.vidas);
console.log(n1.disparos);
}

```

#

### POLIMORFISMO

É a capacidade de um mesmo método ter comportamentos diferentes, funcionalidades diferentes.
Funções com o mesmo nome mas que desempenham papéis diferentes.

```

{
class Carross {
constructor(tipo, estagio) {
this.turbo = new Turbo(estagio);
if (tipo == 1) {
this.velMax = 120;
this.nome = "Normal";
} else if (tipo == 2) {
this.velMax = 160;
this.nome = "Esportivo";
} else if (tipo == 3) {
this.velMax = 200;
this.nome = "Super Esportivo";
}
this.velMax += this.turbo.pot;
}
info() {
console.log(this.nome);
console.log(this.velMax);
console.log(this.turbo);
console.log("----------------");
}
}
}
class Turbo {
constructor(e) {
if (e == 0) {
this.pot = 0;
} else if (e == 1) {
this.pot = 50;
} else if (e == 2) {
this.pot = 75;
} else if (e == 3) {
this.pot = 100;
}
}
}

class CarroEspecial extends Carross {
constructor(estagio) {
super(4, estagio);
this.tipoInfo = 0;
this.velMax = 300 + this.turbo.pot;
this.nome = "Carro especial";
}
info() {
if (this.tipoInfo == 1) {
super.info();
} else {
console.log(`Nome...:${this.nome}`);
console.log(`Vel.Max:${this.velMax}`);
console.log(`Turbo..:${this.turbo.pot}`);
console.log(`-------------------------`);
}
}
}

const c1 = new Carross(1, 0);
const c2 = new Carross(1, 1);
const c3 = new CarroEspecial(3);

c1.info();
c2.info();
c3.info();

```

#

### PROMISE

É usado para resolver o problema do assíncrono.
Basicamente, a promise é uma promessa de execução; o JS segue o curso e, assim que a requisição da promise é concluída, ela é executada.
Perfeita para resolver problemas com API

```

{
const numero = document.querySelector("#numero01");

    // Se a promise for aceita, ela vai para o primeiro parâmetro; se rejeitada (erro), ela vai para o segundo parâmetro.
    const promise = new Promise((resolve, reject) => {
      let resultado = true;
      let tempo = 3000;
      setTimeout(() => {
        if (resultado) {
          resolve("Deu tudo certo.");
        } else {
          reject("Deu tudo errado.");
        }
      }, tempo);
    });

    promise.then((retorno) => {
      /* Se deu certo entra no 'then' */
      numero.innerHTML = retorno;
      numero.classList.remove("error");
      numero.classList.add("ok");
    });
    promise.catch((retorno) => {
      /* Se deu errado entra no 'catch' */
      numero.innerHTML = retorno;
      numero.classList.add("error");
      numero.classList.remove("ok");
    });

    numero.innerHTML = "Processando...";

}

```

#

- promise na function

```

{
const btn_promise = document.querySelector("#btn_promise");
const numero = document.querySelector("#numero01");

    btn_promise.addEventListener("click", () => {
      numero.innerHTML = "Processando...";
      promessa()
        .then((retorno) => {
          /* Se deu certo entra no 'then' */
          numero.innerHTML = retorno;
          numero.classList.remove("error");
          numero.classList.add("ok");
        })
        .catch((retorno) => {
          /* Se deu errado entra no 'catch' */
          numero.innerHTML = retorno;
          numero.classList.add("error");
          numero.classList.remove("ok");
        });
    });

    const promessa = () => {
      let promises = new Promise((resolve, reject) => {
        let resultado = true;
        let tempo = 3000;
        setTimeout(() => {
          if (resultado) {
            resolve("Deu tudo certo NOVAMENTE.");
          } else {
            reject("Deu tudo errado.");
          }
        }, tempo);
      });
      return promises;
    };

    numero.innerHTML = "Esperando";

}

```

#

### MATH

<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math">MDN Math - Todas regras, constantes e funções matemáticas </a>  
<a href="https://www.youtube.com/watch?v=oSXBD3g3TeM">YT MATH, Professor Bruno (CFB) </a>

```
{
const mat1 = document.querySelector("#mat1");
const mat2 = document.querySelector("#mat2");
const mat3 = document.querySelector("#mat3");
const mat4 = document.querySelector("#mat4");

mat1.innerHTML = Math.PI;
mat2.innerHTML = Math.random();
mat3.innerHTML = Math.floor(Math.random() \* 10); //Arredonda para baixo
mat4.innerHTML = Math.pow(10, 2); // Elevado ao quadrado
}

```

#

### SYMBOL

Retorna um objeto do tipo symbol que tem um identificador único  
Sempre vai retornar um elemento do tipo symbol que tem um identificador único

```
{
  const s1 = Symbol();
  const s2 = Symbol();
  console.log(s1 == s2); // vai retornar false, cada symbol é unico

  const s3 = Symbol.for("Junior"); // Adiciona um identificador global
  const s4 = Symbol.for("Junior");
  const s5 = Symbol.for("Edio");
  console.log(s3 == s4); // Vai retornar true, por que quando tem identificador global ele compara
  console.log(Symbol.keyFor(s4)); // Quando tem identificador global conseguimos pegar seu identificador
  console.log(Symbol.keyFor(s5));
}
```

Ex01

```
{
  class Jogador {
    constructor(nome) {
      this.nome = nome;
      this.id = Symbol();
    }
  }
  let jogadores = [
    new Jogador("jog1"),
    new Jogador("jog2"),
    new Jogador("jog3"), // Podemos repetir o jogador mas ainda assim serão únicos
    new Jogador("jog3"), // Pois cada symbol é único
    new Jogador("jog3"),
    new Jogador("jog3"),
  ];

  let j1 = jogadores[0].id;

  // Deletar do array pelo id symbol
  jogadores = jogadores.filter((j) => {
    return j.id != j1;
  });

  console.log(jogadores);
}
```
