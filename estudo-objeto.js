// OBJETOS

//Class
//class - é a base, é a instrução, é onde deve ficar tudo que o objeto contempla (metodos e propriedas)
//Cada objeto é independente do outro, se um objeto for mudado não vai interfirir no outro da mesma classe

//ex01 - metodo contrutor tradicional instanciado
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

//ex02
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
