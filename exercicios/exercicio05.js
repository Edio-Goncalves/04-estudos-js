const palco = document.querySelector("#palco");
const num_objetos = document.querySelector("#num_objetos");
const txt_qtde = document.querySelector("#txt_qtde");
const btn_add = document.querySelector("#btn_add");
const btn_remover = document.querySelector("#btn_remover");
const controles = document.querySelector("#controles");

let larguraPalco = palco.offsetWidth; //para pegar a largura da div palco
let alturaPalco = palco.offsetHeight; //para pegar a altura da div palco
let bolas = [];
let numBola = 0;

class Bola {
  constructor(arrayBolas, palco) {
    this.tam = Math.floor(Math.random() * 15) + 10;
    this.r = Math.floor(Math.random() * 256);
    this.g = Math.floor(Math.random() * 256);
    this.b = Math.floor(Math.random() * 256);
    this.px = Math.floor(Math.random() * (larguraPalco - this.tam));
    this.py = Math.floor(Math.random() * (alturaPalco - this.tam));
    this.velx = Math.floor(Math.random() * 4) + 0.5;
    this.vely = Math.floor(Math.random() * 3) + 0.5;
    this.dirx = Math.floor(Math.random() * 10) > 5 ? 1 : -1;
    this.diry = Math.floor(Math.random() * 10) > 5 ? 1 : -1; // Corrigido aqui
    this.palco = palco;
    this.arrayBolas = arrayBolas;
    this.id = Date.now() + "_" + Math.random();
    this.desenhar();
    this.controle = setInterval(this.controlar, 10);
    this.eu = document.getElementById(this.id);
    numBola++;
    num_objetos.innerHTML = numBola;
  }
  minhaPos = () => {
    return this.arrayBolas.indexOf(this);
  };
  remover = () => {
    clearInterval(this.controle);
    bolas = bolas.filter((b) => b.id != this.id);
    this.eu.remove();
    numBola--;
    num_objetos.innerHTML = numBola;
  };
  desenhar = () => {
    const div = document.createElement("div");
    div.setAttribute("id", this.id);
    div.setAttribute("class", "bola");
    div.setAttribute(
      "style",
      `left:${this.px}px;top:${this.py}px; width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b});`
    );
    this.palco.appendChild(div);
  };

  colisaoBordas = () => {
    if (this.px + this.tam >= larguraPalco) {
      this.dirx = -1;
    } else if (this.px <= 0) {
      this.dirx = 1;
    }
    if (this.py + this.tam >= alturaPalco) {
      this.diry = -1;
    } else if (this.py <= 0) {
      this.diry = 1;
    }
  };

  controlar = () => {
    this.colisaoBordas();
    this.px += this.dirx * this.velx; // Corrigido aqui
    this.py += this.diry * this.vely; // Corrigido aqui
    this.eu.setAttribute(
      "style",
      `left:${this.px}px;top:${this.py}px; width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b});`
    );
    if (this.px > larguraPalco || this.py > alturaPalco) {
      this.remover();
    }
  };
}

//pega a dimensão do palco
window.addEventListener("resize", (el) => {
  larguraPalco = palco.offsetWidth;
  alturaPalco = palco.offsetHeight;
  console.log(larguraPalco);
});

btn_add.addEventListener("click", (evt) => {
  const qtde = parseInt(txt_qtde.value, 10); // Corrigido aqui
  if (!isNaN(qtde)) {
    for (let i = 0; i < qtde; i++) {
      bolas.push(new Bola(bolas, palco));
    }
  }
});

btn_remover.addEventListener("click", (evt) => {
  bolas.forEach((b) => {
    b.remover();
  });
  bolas = [];
});
