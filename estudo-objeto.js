// OBJETOS

//Class + Construtor
//class - é a base, é a instrução, é onde deve ficar tudo que o objeto contempla (metodos e propriedas)
//Cada objeto é independente do outro, se um objeto for mudado não vai interfirir no outro da mesma classe

//ex01 - metodo contrutor tradicional
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

//ex02
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
// Método com functions
// Via ter o mesmo resultado com uma sintaxe diferente, sendo mais próxima dos objetos literais
//vamos retirar a class e o construto e adicionar functions anonimas e o "this." nos métodos e propriedades

//ex01
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
//OBJETOS LITERAIS
// No conceito de objetos literais nao temos mais os objetos independetes como nos objetos construtores
// Todos objetos da mesma classe vao ter o mesmo endereço de memoria
// A classe é um objeto único referenciado na memoria e não objetos independentes
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
  // p2 e p3 em objeto literal não irá instanciar 2 objetod distintos e sim fazer alterações no mesmo objeto

  p2.nome = "Outro Edio";
  p2["nome"] = "Outro Edio Novamente";
  humano.setNome("Edio pelo setNome");

  console.log(humano.nome);
  console.log(p2.getNome());
  console.log(p3.nome);
  //
}

// CONCEITO DE HERANÇA
// É basicamente uma classe que herda outra classe
// Podemos ter uma classe pai que vai ceder metodos e propriedades para classes filho
// Tudo que está implementado na classe pai vale para a classe filho
// <a href="https://www.youtube.com/watch?v=-fOCg39SBzc&list=PLx4x_zx8csUg_AxxbVWHEyAJ6cBdsYc0T&index=63">YT Função Geradora, Professor Bruno (CFB) </a>

//ex01
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
  // atirar();
  // atirar();
  // atirar();
  // atirar();
  // atirar();
  // atirar();
  // atirar();
  // atirar();

  console.log(`--------------------------`);
  console.log(`Nome: ${c2.nome}`);
  console.log(`Portas: ${c2.portas}`);
  console.log(`Velocidade: ${c2.blindagem}`);
  console.log(`Munição: ${c2.municao}`);
  console.log(`Cor: ${c2.cor}`);
}
