# 04-estudos-js

### ÍNDICE

- [VARIAVEIS](#variaveis)
- [OPERADORES](#operadores)

### LINKS DE VÍDEOS CURSOS E DOCUMENTAÇÃO

- <a href="https://www.youtube.com/watch?v=E4DBTqgxHGM&list=PLx4x_zx8csUg_AxxbVWHEyAJ6cBdsYc0T">Javascript Referência em Vídeo do Professor Bruno (CFB) </a>

#

### CONSOLE

- `Console.log()` //para imprimir no console, vamos usar para debugar

#

### VARIAVEIS

Variaveis var, let e const (declaração de variáveis e escopo de uso)  
`var nome = "Edio";` // "var" Escopo global e pode ser alterada  
`let sobrenome = "Gonçalves";` // "let" Escopo de bloco e pode ser alterada  
`const agnome = "Junior";` // "const" Escopo de bloco e NÃO pode ser alterada

#

### OPERADORES

<p class="separador">Operadores matemáticos (+, -, /, *, %, ++, --)</p>

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

<p class="separador">Operadores de comparação (<, >, >=, >=, ==, ===)</p>

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

<p class="separador">Operadores lógicos (&&, ||)</p>

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

<p class="separador">Operadores de PÓS e PRE incremento e decremento (++, --)</p>

PÓS incremento:

```
  console.log(n1++);
  console.log(n1);
  /* Primeiro usa o valor e depois incrementa, vai usar o valor original e imprimir a alteração após usar ele, ou seja só vai aparecer a alteração na proxima vez que for requisitado*/
```

PRÉ incremento:

```
console.log(++n2);
  console.log(n2);
  /* Primeiro incrementa o valor e depois usa, ou seja a alteração aparece de imediato */
```

<p class="separador">Operação Ternária (?)</p>
Sintaxe:  
(teste logico ? se verdadeiro (true) : se falso (false))

```
let num = 11;
  res = !(num % 2) ? "é par" : "é impar";
  console.log(res); // se o resultado da operação logica for true ele retorna a 1° opção se false a 2°
// Foi utilizado (!) negação por que o resultado "0" significa false e o "1" significa true, e o % de um numero par sempre vai ser "0"
```
