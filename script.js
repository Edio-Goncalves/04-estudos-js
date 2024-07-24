// JASON
// Conversão de dados
{
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
    '{"nome":"Edio","idade":37,"estudos":{"curso01":"Javascript","curso02":"NodeJS","curso03":"HTML","curso04":"CSS"}}';

  /* converte um objeto em uma string JSON */
  const s_json = JSON.stringify(pessoa);

  /* converte um JSON em um objeto  */
  const o_json = JSON.parse(string_pessoa);

  console.log(s_json); /* Imprime o JSON vindo de um objeto */
  console.log(o_json); /* Imprime o objeto vindo de um JSON */
}

// PROPTOTYPE
// Serve basicamente para adicionar uma propriedade ou um método a um objeto, principalmente a objetos de função
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

// POLIMORFISMO
// É a capacidade de um mesmo método ter comportamentos diferentes, funcionalidades diferentes.
// Funções com o mesmo nome mas que desempenham papéis diferentes.

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
      /* Conceito de polimorfismo, temos um info condicional, podemos ter o info original ou o novo modelo */
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
}

// PROMISE
// É usado para resolver o problema do assíncrono.
// Basicamente, a promise é uma promessa de execução; o JS segue o curso e, assim que a requisição da promise é concluída, ela é executada.{
// Perfeita para resolver problemas com API
{
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
  //promise na function
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
}

// MATH
{
  const mat1 = document.querySelector("#mat1");
  const mat2 = document.querySelector("#mat2");
  const mat3 = document.querySelector("#mat3");
  const mat4 = document.querySelector("#mat4");

  mat1.innerHTML = Math.PI;
  mat2.innerHTML = Math.random();
  mat3.innerHTML = Math.floor(Math.random() * 10); //Arredonda para baixo
  mat4.innerHTML = Math.pow(10, 2); // Elevado ao quadrado
}

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
