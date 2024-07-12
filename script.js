/* Console.log() // para imprimir no console */
console.log("Hello World");

/* var let const // declaração de variaveis e escopo de uso*/
var nome = "Edio"; // Escopo global e pode ser alterada
let sobrenome = "Gonçalves"; // Escopo de bloco e pode ser alterada
const agnome = "Junior"; // Escopo de bloco e NÃO pode ser alterada

/* Operadores */ {
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

/* Operadores de comparação*/
const n1 = 10,
  n2 = 2,
  n3 = 10;

console.log((n1 > n2) + " (> maior que)");
console.log((n1 < n2) + " (< menor que)");
console.log((n1 >= n2) + " (>= maior ou igual)");
console.log((n1 <= n3) + " (<= menor ou igual)");
console.log((n1 == n3) + " (== comparação, apenas = é operador de atribuição)");
console.log(!(n1 == n3) + " (! negação, se for true ele entrega false)");
console.log((n1 != n3) + " (!= significa diferente, no caso n1 é igual n3)");
