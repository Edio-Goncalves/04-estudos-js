/* FUNCTION */
// É um bloco de comandos que vai executar em um momento oportuno

// Conceito de return
// Sempre que uma function lê um "return" a função encerra-se
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

// funções parametrizadas
// funções que recebem paramentros
// Podemos colocar valores padrões para cada parametro caso ele não seja chamado (como o "p4" no exemplo abaixo)
{
  const vlp = 0;

  function soma(p1 = vlp, p2 = vlp, p3 = vlp, p4 = vlp) {
    return p1 + " " + p2 + p3 + " nascido em " + (p4 - p2);
  }
  let resultado = soma("Edio", 37, "anos", 2024);

  console.log(resultado);
}

// funções parametrizadas "rest"
// é uma forma de passagem de parametro onde não é preciso especificar efetivamente a quantidade de parametros dentro da função
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

// Funções anonimas
// Funções criadas em tempo de execução, ela não precisa de um nome para ela o que deixa ela fora do armazenamento da memoria
// Por obrigação é preciso associar a funçaõ a alguma variavel

//Ex: 01 Function
{
  const f = function (v1, v2) {
    return v1 * v2;
  };
  console.log(f(10, 5));
}

//Ex: 02 Função construtora
{
  const f = new Function("v1", "v2", "v3", "return v1 + v2 + v3");
  console.log(f(5, 7, 11));
}

// Ex: 03 Arrow Functiob
{
  const soma = (v1, v2) => {
    return v1 * v2;
  };
  console.log(soma(2, 3));
}

// Função Geradora
//<a href="https://www.youtube.com/watch?v=3j9Ikmm2ieA&list=PLx4x_zx8csUg_AxxbVWHEyAJ6cBdsYc0T&index=28">YT Função Geradora, Professor Bruno (CFB) </a>
// Ela tem o seu retorno adiado até que for preciso o seu retorno, a propria função tem o controle de sua execução
// Temos que usar a palavra "function*"
{
  `Ex: 01`;

  function* cores() {
    yield "vermelho";
    yield "verde";
    yield "azul";
  }
  const itc = cores();
  console.log(itc.next().value);
  console.log(itc.next().value);
}
{
  `Ex: 02`;

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
{
  `Ex: 03`;

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

// MAP
// <a href="https://www.youtube.com/watch?v=0M2ba5A6DHY&list=PLx4x_zx8csUg_AxxbVWHEyAJ6cBdsYc0T&index=29">YT MAP, Professor Bruno (CFB) </a>
// Ele vai interar toda a coleção sem a opção de parar no meio
// MAP pode receber 3 parametros, o elemento a posição do elemento e a propria coleção

//Ex:01
{
  const cursos = ["CSS", "HTML", "JS", "PHP", "PYTHON"];
  cursos.map((el, i) => {
    console.log(el, i);
    console.log("O curso " + el + " está na posição index " + i);
  });
}
//Ex:02
{
  let cursos = document.getElementsByTagName("section");
  cursos = [...cursos];

  const elementos = cursos.map((el, i) => {
    console.log(el.innerHTML, i);

    let elem = el.innerHTML;
    return elem;
  });
  console.log(elementos);
}

//Ex:03
{
  const cursos = document.getElementsByTagName("section");
  const val = Array.prototype.map.call(cursos, ({ innerHTML }) => innerHTML);
  console.log(val);
}

//Ex:04
{
  const converterInt = (ele) => parseInt(ele);
  let num = ["1", "2", "3", "4", "5"].map(converterInt);
  console.log(num);
}

// THIS
// Fora do escopo locais o this se refere ao objeto global
// Em objetos o this se refere a instancia (escopo) que ele está e pode acessar suas propriedades
// This dentro de objeto com metodo: se a function for tradicional ele ganha escopo no objeto, se for arrow ele nao ganha scopo no objeto

// <a href="https://www.youtube.com/watch?v=KGYHCnb95-Y">YT THIS, Roger Melo </a>
// <a href="https://www.youtube.com/watch?v=21U6gqefijo&list=PLx4x_zx8csUg_AxxbVWHEyAJ6cBdsYc0T&index=30">YT THIS, Professor Bruno (CFB) </a>
// <a href="https://www.youtube.com/watch?v=WsbMaN3PP9I">YT THIS, Matheus Battisti </a>

`Ex:01`; //caso queira ou precise usar uma variavel com o mesmo nome do parametro, pode-se usar o this
{
  function aluno(nome, nota) {
    this.nome = nome;
    this.nota = nota;
    return nome + " e " + nota;
  }

  console.log(aluno("Edio", 10));
}

`Ex:02`; // R:2024; Objeto método com função tradicional, acessando o objeto e retornando a propriedade
{
  const a = {
    prop: 2024,
    f: function () {
      return this.prop;
    },
  };
  console.log(a.f());
}

`Ex:03`; // R: undefined;Objeto método com arrow function faz o objeto perder o escopo e o this vai procurar no global (window)
{
  const a = {
    prop: 2024,
    f: () => {
      return this.prop;
    },
  };
  console.log(a.f());
}

`Ex:04`; //O this precisa de contexto para funcionar, ele precisa de escopo ou vai buscar o Global, se tentar pegar dados de outro contexto como em um "pai", devemos usar uma arrow function, porque ele usa o contexto do "pai"
{
  function aluno(nome, nota) {
    this.nome = nome;
    this.nota = nota;

    this.dados_alunos = function () {
      setTimeout(() => {
        console.log(this.nome);
        console.log(this.nota);
      }, 10);
    };
  }

  const al1 = new aluno("Edio", 100);
  al1.dados_alunos();
}
