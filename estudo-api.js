// FETCH
/* 
<a href="https://www.youtube.com/watch?v=NJzNc8-KqQI"> YR - API, FETCH, THEN, ASYNC, AWAIT - Gustavo Caetano </a>;  
*/

//Consumo
//Ex01
{
  const endPoint = "https://jsonplaceholder.typicode.com/posts/1";
  console.log(fetch(endPoint));
  fetch(endPoint)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);

      const titulo = document.getElementById("titulo");
      const texto = document.getElementById("texto");

      titulo.innerHTML = result.title;
      texto.innerHTML = result.body;
    });
}

//Ex02
{
  const URL = "https://dummyjson.com/products";

  async function chamarApi() {
    const resp = await fetch(URL);
    if (resp.status === 200) {
      const obj = await resp.json();
      return obj;
    } else {
      console.error("Erro na resposta da API:", resp.status);
    }
  }

  chamarApi()
    .then((resApi) => {
      resApi.products.map((product) => {
        const prod = document.getElementById("apiProduct");
        const divProduct = document.createElement("div");

        const divId = document.createElement("div");
        const pTitle = document.createElement("h1");
        const pDesc = document.createElement("p");
        divId.setAttribute("class", "idSty");
        pTitle.setAttribute("class", "titleSty");
        pDesc.setAttribute("class", "descSty");

        divId.innerHTML = product.id;
        pTitle.innerHTML = product.title;
        pDesc.innerHTML = product.description;
        divProduct.appendChild(divId);
        divProduct.appendChild(pTitle);
        divProduct.appendChild(pDesc);
        prod.appendChild(divProduct);
      });
    })
    .catch((error) => console.error("Erro ao chamar a API:", error));
}
