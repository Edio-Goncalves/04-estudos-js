// METODOS DO ARRAY

// filter()
// ele vai percorrer o array e vai retornar apenas os elementos selecionados
// filter(valor, posição, array)=>{}
{
  const idades = [15, 16, 17, 18, 19, 20, 21, 22, 23];
  console.log(idades);

  const maior = idades.filter((val) => {
    if (val >= 20) {
      return val;
    }
  });
  console.log(maior);
}

// find()
// Tem por finalidade percorrer um grupo de dados e entrontrar a compatibilidade da pesquisa
// Sempre que ele encontrar um valor vai retornar true e quando não vai retornar undefined

var arrayNumeros = [1, 2, 5, 7, 32, 41, 57, 59, 84];
{
  const p_array = document.querySelector(".arrayInner");
  const buttonPesquisa = document.querySelector(".pesquisaFind");
  const resultado = document.querySelector(".recebeResultado");
  const inputPesquisa = document.querySelector("input[name=campoFind]");

  p_array.innerHTML = "[ " + arrayNumeros + " ]";

  buttonPesquisa.addEventListener("click", () => {
    arrayNumeros.find((e, i) => {
      resultado.innerHTML = "Nenhum resultado compativel encontrado";
      if (e == inputPesquisa.value) {
        resultado.innerHTML = "Valor pesquisado " + e + " na posição " + i;
        return e;
      }
    });
  });
}

// every()
// ele vai passar de elemento em elemento e vai verificar a equivalencia dos detodos os dados de acordo com a regra especificada
// se todos elementos equivalerem ele vai retornar true, se não false
{
  const buttonVerificar = document.querySelector(".verificarEvery");
  const resultado = document.querySelector(".recebeResultado");
  const inputPesquisa = document.querySelector("input[name=campoEvery]");

  buttonVerificar.addEventListener("click", () => {
    const valorPesquisa = Number(inputPesquisa.value);
    if (isNaN(valorPesquisa)) {
      resultado.innerHTML = "Por favor, insira um número.";
      return;
    }

    const ret = arrayNumeros.every((e, i) => {
      if (e > valorPesquisa) {
        resultado.innerHTML = "Array não conforme na posição " + (i + 1);
        return false;
      }
      return true;
    });

    if (ret) {
      resultado.innerHTML =
        "OK, no array não contém números maiores que " + valorPesquisa;
    }
  });
}

// some()
// ele vai passar de elemento em elemento e vai verificar se pelo menos um dos elementos é compativel com a busca
// se ao menos um elemento equivaler ele retorna true, se não false

{
  const buttonVerificar = document.querySelector(".verificarSome");
  const resultado = document.querySelector(".recebeResultado");
  const inputPesquisa2 = document.querySelector("input[name=campoSome]");

  buttonVerificar.addEventListener("click", () => {
    const valorPesquisa = Number(inputPesquisa2.value);

    if (isNaN(valorPesquisa)) {
      resultado.innerHTML = "Por favor, insira um número.";
      return;
    }

    let encontrado = false;

    arrayNumeros.some((element, i) => {
      if (element == valorPesquisa) {
        resultado.innerHTML =
          "SIM, o elemento da posição " + (i + 1) + " está de acordo";
        encontrado = true;
        return true;
      }
      return false;
    });

    if (!encontrado) {
      resultado.innerHTML = "NÃO, nenhum elemento corresponde";
    }
  });
}

// reduce()
// tem a funcionalidade de reduzir um array de acordo com a operação exigida

{
  const buttonVerificar = document.querySelector(".verificarReduce");
  const resultado = document.querySelector(".recebeResultado");
  const checkSoma = document.querySelector(".somaInp input");
  const checkMedia = document.querySelector(".mediaInp input");

  /* verifica se o array contem valores */
  buttonVerificar.addEventListener("click", () => {
    if (!arrayNumeros.length) {
      resultado.innerHTML = "O array está vazio";
      return;
    }

    /* executa o reduce */
    const soma = arrayNumeros.reduce(
      (anterior, element) => anterior + element,
      0
    );

    const media = soma / arrayNumeros.length;

    if (checkSoma.checked) {
      resultado.innerHTML = "A soma deu o total de " + soma;
    } else if (checkMedia.checked) {
      resultado.innerHTML = "A média deu o valor de " + media;
    } else {
      resultado.innerHTML = "Selecione uma das opções";
    }
  });
}
