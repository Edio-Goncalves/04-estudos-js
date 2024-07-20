// COLEÇÕES
// arreys
const btn_soma = document.querySelector("#btn_soma");
const btn_subtracao = document.querySelector("#btn_subtracao");
const btn_multiplicacao = document.querySelector("#btn_multiplicacao");
const btn_divisão = document.querySelector("#btn_divisão");
const valor1 = document.querySelector("#valor1");
const valor2 = document.querySelector("#valor2");
const resultado = document.querySelector(".inputRes");

const resFunction = [
  () => {
    const soma = [valor1.value, valor2.value];
    const res = Number(soma[0]) + Number(soma[1]);
    resultado.value = res;
  },
  () => {
    const subtracao = [valor1.value, valor2.value];
    const res = Number(subtracao[0]) - Number(subtracao[1]);
    resultado.value = res;
  },
  () => {
    const multiplicacao = [valor1.value, valor2.value];
    const res = Number(multiplicacao[0]) * Number(multiplicacao[1]);
    resultado.value = res;
  },
  () => {
    const divisao = [valor1.value, valor2.value];
    const res = Number(divisao[0]) / Number(divisao[1]);
    resultado.value = res;
  },
];

btn_soma.addEventListener("click", resFunction[0]);
btn_subtracao.addEventListener("click", resFunction[1]);
btn_multiplicacao.addEventListener("click", resFunction[2]);
btn_divisão.addEventListener("click", resFunction[3]);

// map
{
  // Coleções do map é uma coleção chaves to valor
  // Se uma chave for repetida a ultima chave vai substituir o valor
  // É preciso instanciar a coleção, devemos usar "new" para reservar a memoria para poder se usada
  // <a href="https://www.youtube.com/watch?v=y9Tz0bjXBXs&list=PLx4x_zx8csUg_AxxbVWHEyAJ6cBdsYc0T&index=55"> YT COLEÇÃO MAP, Professor Bruno (CFB){" "} </a>;
  let recebeMapa = "";
  let mapa = new Map();

  mapa.set("casa", 2043);
  mapa.set("home", "home");
  mapa.set("150", 2043);
  mapa.set(180, 1999);
  console.log(mapa);

  //ex 01 - Buscando o valor da chave na coleção
  recebeMapa = mapa.get("casa"); // sempre que uma chave for buscada o retorno vai ser o valor
  console.log(recebeMapa);
  recebeMapa = mapa.get(180);
  console.log(recebeMapa);

  //ex 02 - Condicionando se existe ou nao na coleção
  if (mapa.has("leitura")) {
    console.log("A chave leitura está na coleção");
  } else {
    console.log("A chave leitura NÃO está na coleção");
  }

  //ex 03 - Deletando e Inteirando a coleção
  mapa.delete(180);

  mapa.forEach((el) => {
    console.log(el);
  });
}

// set
// É uma coleção que nao permite entrdas duplicadas de elementos
// É como a coleção map, devemos reservar memoria para a coleção ("new")
// <a href="https://www.youtube.com/watch?v=v24QAyoiAo0&list=PLx4x_zx8csUg_AxxbVWHEyAJ6cBdsYc0T&index=56"> YT COLEÇÃO SET, Professor Bruno (CFB){" "} </a>;

let colecaoSet = new Set(["musica", "musica boa", "musica ruim"]);
console.log(colecaoSet);

colecaoSet.add("Minhas músicas");
colecaoSet.add("musica"); // esse paramero nao adicionou
colecaoSet.add("musica"); // esse paramero nao adicionou
colecaoSet.add(385);
console.log(colecaoSet);

//ex01
for (m of colecaoSet) {
  console.log(m);
}

//ex02
colecaoSet.clear();
console.log(colecaoSet);
