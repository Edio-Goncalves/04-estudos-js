// DESESTRUTURAÇÃO

//Ex01 // Desestruturação em conchetes (array)
{
  // let a, b, c, d;
  [a, b, c, d] = [10, 20, 30, 40];

  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}

//EX02 // Desestruturação em chaves (objetos)
{
  // let e, f, g, h;
  ({ e, f, g, h } = { e: "amarelo", f: "verde", g: "azul", h: "branco" });
  console.log(e);
  console.log(f);
  console.log(g);
  console.log(h);
}

//EX03 // Receber valor de variavel
{
  let numeros = [99, 88, 77, 66];
  let [i, j, k, l] = numeros;
  console.log(i);
  console.log(j);
  console.log(k);
  console.log(l);
}

//EX04 // Colocar valor como padrão
[m, n = 0, o = false, p] = [11, , , 44]; // , , para ignorar variável e passar para próxima casa

console.log(m);
console.log(n);
console.log(o);
console.log(p);

//EX05 // Inversão de valores
{
  let um = 1;
  let dois = 2;
  [um, dois] = [dois, um];

  console.log(um);
  console.log(dois);
}

//EX06 // Recebe function
{
  let numeros = () => {
    return [1, 2, 3, 4];
  };

  let [q, r, s, t] = numeros();

  console.log(q);
  console.log(r);
  console.log(s);
  console.log(t);
}

//EX06 // Rest
{
  let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

  let [q, r, s, ...t] = numeros;

  console.log(q);
  console.log(r);
  console.log(s);
  console.log(t);
}

//EX07 // Adicionar valor a variavel
{
  let obj = { nome: "Edio", sobrenome: "Goncalves" };
  let { nome, sobrenome } = obj;
  console.log(nome);
  console.log(sobrenome);
}

//EX08 // Adicionar texto explitado
{
  let texto = "Edio Gonçalves";
  let [...t] = texto.split("");
  console.log(t);
}
