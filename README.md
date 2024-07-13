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
const n1 = 10,
    n2 = 2,
    n3 = 11;

  var soma = n1 + n2;
  console.log(soma);

  var subtracao = n1 - n2;
  console.log(subtracao);

  var divisao = n1 / n2;
  console.log(divisao + " divisão /");

  var multiplicacao = n1 * n2;
  console.log(multiplicacao);

  var mod = n3 % n2;
  console.log(mod);

  var incremento = n1;
  incremento++;
  console.log(incremento);

  var decremento = n1;
  decremento--;
  console.log(decremento);

  var operadores = n1;
  operadores += 5;
  console.log(operadores);

```

- Soma "+"

```
var soma = n1 + n2;
```

- Subtração "-"

```
var subtracao = n1 - n2;
```

#

### LINKS E IMAGENS

<a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks">Documentação Hiperlinks AQUI</a> <br />  
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img">Documentação de Imagens AQUI</a>

- `<a href="../localArquivo">` Link para um arquivo, como para um outro index.html
- `<img src="https://linkdaimagemonline.com" alt="identificadorDaImagem" width="400px" />` Para pegar um link online, onde identificamos um nome se para ele caso não carregue e também já damos um tamanho como opção
- `<img src="../localArquivo" alt="id" width="250px"/>` Buscar imagem dentro de um local no projeto
- `<a href="https://linkDoLocalOnline.com"> <img src="../localArquivo" alt="sorvete" width="250px"> </a>` Vamos pegar um link online e agregar a um arquivo que estamos usando no projeto
- Para criar um link ancora:

```
    <a href="#ancora" id="ancora02"> clique aqui 01 </a>

    <a href="#ancora02"> <img id="ancora" src="../localDaImagem"/> clique aqui 02 </a>

<!-- Quando clicamos no link "clique aqui 01" vamos ser jogados diretamente ao "id='ancora'" e quando clicarmos no
"clique aqui 02" vamos ser levamos até o " id='ancora02'"-->
```

#

### TRABALHANDO COM LISTAS

<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol">Documentação de Listas AQUI</a>

#### Lista não ordenada

```
Exemplo de construção:

    <ul>
      <li>arroz</li>
      <li>feijão</li>
      <li>agua</li>
    </ul>

<!-- Na lista não ordenada vamos ter uma bolinha na frente -->
```

#### Lista ordenada de um ranking

```
Exemplo de construção:

    <ol>
      <li>João</li>
      <li>Julia</li>
      <li>Matheus</li>
    </ol>

<!-- Na lista ordenada vamos ter uma numeração na frente -->
```
