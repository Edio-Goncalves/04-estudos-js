/* Console.log() (para imprimir no console) */
console.log("Hello World");

/* var let const (declaração de variaveis e escopo de uso) */
var nome = "Edio"; // Escopo global e pode ser alterada
let sobrenome = "Gonçalves"; // Escopo de bloco e pode ser alterada
const agnome = "Junior"; // Escopo de bloco e NÃO pode ser alterada

/* Operadores (resposta matemática)*/ {
  const n1 = 10,
    n2 = 2,
    n3 = 11;

  var soma = n1 + n2;
  console.log(soma + " (soma +)");

  var subtracao = n1 - n2;
  console.log(subtracao + " (subtração -)");

  var divisao = n1 / n2;
  console.log(divisao + " divisão /");

  var multiplicacao = n1 * n2;
  console.log(multiplicacao + " multiplicação *");

  var mod = n3 % n2;
  console.log(mod + " mod (resto da divisão %)");

  var incremento = n1;
  incremento++;
  console.log(incremento + " incremento ++");

  var decremento = n1;
  decremento--;
  console.log(decremento + " decremento --");

  var operadores = n1;
  operadores += 5;
  console.log(operadores + " operadores");
}

/* Operadores de comparação (true or false)*/ {
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

/* Operadores lógicos (true or false) */
/* 
AND (e)     OR (ou)
V + V = V   V + V = V 
V + F = F   V + F = V 
F + V = F   F + V = V 
F + F = F   F + F = F 

AND= só vai ser true se todas forem verdadeiras
OR= só vai ser false se todas forem falsa
*/
{
  let n1, n2, n3, n4;
  n1 = 10;
  n2 = 2;
  n3 = 10;
  n4 = 15;

  console.log(n1 > n2 && n1 > n3);
  console.log(n1 > n2 || n1 > n3);
}

/* Operadores PÓS e PRE incremento e decremento */
{
  let n1, n2;
  n1 = 10;
  n2 = 5;

  /* PÓS incremento */
  console.log(n1++);
  console.log(n1);
  /* Primeiro usa o valor e depois incrementa, vai usar o valor original e imprimir a alteração após usar ele, ou seja só vai aparecer a alteração na proxima vez que for requisitado*/

  /* PRÉ incremento */
  console.log(++n2);
  console.log(n2);
  /* Primeiro incrementa o valor e depois usa, ou seja a alteração aparece de imediato */
}

/* Operações Ternarias  (? Operador Ternário)*/
{
  // teste logico ? se verdadeiro (true) : se falso (false)
  let num = 11;
  res = !(num % 2) ? "é par" : "é impar";
  console.log(res); // se o resultado da operação logica for true ele retorna a 1° opção se false a 2°

  // temos que utilizar ! negação por que o resultado "0" significa false e o "1" significa true, e o % de um numero par sempre vai ser "0"
}

/* Operador Typeof (typeof()) */
// usado para identificar o tipo de dado
//www.youtube.com/watch?v=_qgObfmqokw&list=PLx4x_zx8csUg_AxxbVWHEyAJ6cBdsYc0T&index=13

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

/* Operador spread (...) */
// operador para quebrar um conjunto de elementos e devolver elemento à elemento
// Transformar elementos HTML em um array de elementos HTML e conseguir usar todas funções de array em elementos HTML
{
  const objs1 = document.getElementsByTagName("div");
  const objs2 = [...document.getElementsByTagName("div")];

  console.log(objs1); // aqui vou ter uma HTML collection
  console.log(objs2); // aqui vou ter todas funções de um array, vou conseguir manipular os elementos
}

/* Condições (if, else if, else ) */
// se, senão, então

{
  let n = 10;

  //ex:01 (um bloco de comando)
  if (n > 5) {
    console.log("Verdadeiro");
  }

  //ex:02 (doi blocos de comando)
  if (n >= 20) {
    console.log("verdadeiro");
  } else {
    console.log("falso");
  }

  //ex:03 (três blocos de comando)
  if (n >= 20) {
    console.log("é maior que 20");
  } else if (n >= 11) {
    console.log("é maior que 11");
  } else {
    console.log("é menor ou igual a 10");
  }

  //ex:04 (operações condicionais)
  let clima = "sol";
  let energia = 70;

  if (clima == "sol" && energia >= 90) {
    console.log("Vou a praia");
  } else if (clima == "sol" && energia >= 70) {
    console.log("Vou ao cinema");
  } else {
    console.log("Vou ficar em casa");
  }
}
