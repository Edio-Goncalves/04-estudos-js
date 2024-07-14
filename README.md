# 04-estudos-js

### ÍNDICE

- [VARIAVEIS](#variaveis)
- [OPERADORES](#operadores)
- [TYPEOF](#typeof)
- [SPREAD](#spread)
- [CONDIÇÕES](#condições)
- [SWITCH CASE](#switch-case)
- [LOOPS](#loops)
- [FUNCTION](#function)

### LINKS DE VÍDEOS CURSOS E DOCUMENTAÇÃO

- <a href="https://www.youtube.com/watch?v=E4DBTqgxHGM&list=PLx4x_zx8csUg_AxxbVWHEyAJ6cBdsYc0T">Javascript Referência em Vídeo do Professor Bruno (CFB) </a>

#

### CONSOLE

`Console.log()` //para imprimir no console, vamos usar para debugar

#

### VARIAVEIS

Variaveis var, let e const (declaração de variáveis e escopo de uso)  
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
  /* Primeiro usa o valor e depois incrementa, vai usar o valor original e imprimir a alteração
  após usar ele, ou seja só vai aparecer a alteração na proxima vez que for requisitado*/
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
// Foi utilizado (!) negação por que o resultado "0" significa false e o "1" significa true, e o % de
um numero par sempre vai ser "0"
```

#

### TYPEOF

Usado para identificar o tipo de dado

<a href="www.youtube.com/watch?v=_qgObfmqokw&list=PLx4x_zx8csUg_AxxbVWHEyAJ6cBdsYc0T&index=13">LINK Youtube Typeof</a>

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
