/* LOOPS estrutura de repetição */
// Cada repetição que o looping executar é uma interação que ele está executando
// Loops podem ser definidos (for) e indefinidos (while, do while)
// Sempre que sabemos a quantidade de interações que vamos ter usamos o "for()"
// Quando não sabemos a quantidade exata de interação que precisamos usamos "while()"

{
  //for()
  // for(inicialização; condição; controle)
  // OBS: enquanto não retorar false ele não vai parar
  `ex:01`;
  for (let i = 0; i < 5; i++) {
    console.log("valor do i = " + i);
  }

  `ex:02`;
  let arraypar = [];
  let arrayimpar = [];
  for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
      arraypar.push(i);
    } else {
      arrayimpar.push(i);
    }
  }
  console.log("Arrey par -> " + arraypar);
  console.log("Arrey impar -> " + arrayimpar);

  //for "in" (basicamente entrega o index length)
  let anum = [10, 20, 30, 40, 50];

  for (let i = 0; i < anum.length; i++) {
    console.log(i);
  }
  for (n in anum) {
    // percorre o index posicional do elemento (length)
    console.log(n);
  }

  //for "of" (entrega o conteudo de cada index da coleção)
  for (let i = 0; i < anum.length; i++) {
    console.log(anum[i]);
  }
  for (n of anum) {
    // percorre diretamente o conteudo do elemento
    console.log(n);
  }

  `ex:03`;
  const objts = document.querySelectorAll(".first");

  for (o in objts) {
    console.log((objts[o].innerHTML = "Teste do in"));
  }
  for (o of objts) {
    console.log((o.innerHTML = "Teste do of"));
  }
}
{
  // While (Enquanto a condição for verdadeira)
  let n = 5;
  let fatorial = 1;
  while (n > 1) {
    fatorial *= n;
    n--;
  }
  console.log(fatorial);

  // Do While (Ele garante que ao menos uma vez o bloco de comando será executado)

  let g = 10;
  while (g < 10) {
    console.log("While executado");
    g++;
  }
  console.log("While Pulou do bloco de comando");

  let c = 10;
  do {
    console.log("While executado");
    c++;
  } while (c < 10);
  console.log("While Pulou do bloco de comando");
  {
  }
}
