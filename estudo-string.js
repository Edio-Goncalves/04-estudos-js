// STRING
// Funções para trabalhar com string
/* <a href="https://www.youtube.com/watch?v=lv4hFkirhps&list=PLx4x_zx8csUg_AxxbVWHEyAJ6cBdsYc0T&index=102">
  YT Funções par atrabalhar com string, Professor Bruno (CFB){" "} </a>; */

{
  let nome = new String("Edio");
  let nome2 = new String("Edio");
  let sobrenome = new String("Gonçalves");
  console.log(nome);
  console.log(typeof nome);
  console.log(nome.charAt(3)); // mostra o caractere de acordo com a posição
  console.log(nome.charCodeAt(2)); // Retorna o código do caractere
  console.log(nome.concat(` ${sobrenome}`)); // Ela retorna o valor concatenado mas nao altera o valor
  let newNome = nome.concat(` ${sobrenome}`);
  console.log(newNome);
  console.log(nome.indexOf("d")); // Busca a posição da primeira sentença que está pesquisando, senao tiver retorna -1
  console.log(newNome.lastIndexOf("o")); // Busca posição do ultimo caractere
  console.log(nome.localeCompare(nome2)); // Retorno 0 significa que são iguais, retorno -1 significa que a primeira string é maior e se for 1 a segunda string é maior
  console.log(nome.replace("Ed", "Ted")); // Substitui o primeiro caractere
  console.log(sobrenome.slice(1, 6)); // Retorna apenas o corte indicado
  console.log(newNome.split(" ")); // Ele recorta onde indicado e faz um array com o restante
  console.log(newNome.substring(0, 5)); // Retorna o que está dentro das posições indicadas
  console.log(newNome.substr(5, 8)); // Marca a posição inicial e configura a quantidade de posiçõe subsequentes
  console.log(nome.toUpperCase()); // Coloca em caixa alta
  console.log(nome.toLocaleLowerCase()); // coloca toda em minusculo
  console.log(nome.valueOf()); // Retorna apenas o valor do objeto, valor primitivo(Real)
  let num = 10;
  num = num.toString();
  console.log(num); // Transforma o valor em string
  console.log(newNome.startsWith("L")); // Verifica o inicio da strin e retorna true or false
  console.log(nome.endsWith("io")); // Verifica o termino e retorna true or false
  console.log(newNome.includes("çal")); // Verifica se em alguma parte da string possui os caracteres
  console.log(nome.repeat(4)); // Para repetir a string de acordo com a quantidade desejada
}

// TAMPLETE STRINGS
const template = "templete";
const teste = "teste";

console.log("este é um " + teste + " de " + template + " string");
console.log(`este é um ${teste} de ${template} string`);

//ex01

const carros = ["Corola", "Golf", "Astra", "fusca"];

let ol = `<ol>`;
carros.map((element) => {
  ol += `<li>${element}</li>`;
});
ol += `</ol>`;

console.log(ol);
