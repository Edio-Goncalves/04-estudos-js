// MODULOS
// Só pode ter um export default por modulo
// Quando importado um default nãp vai {}

// Importações
import { arrayCarros } from "./modulosJS/es-import.js";
import arrayCores, { getCarros } from "./modulosJS/es-import.js"; // Quando importado um default nãp vai {}

console.log("servidor rodando");
console.log(arrayCarros);
console.log(arrayCores);
console.log(getCarros());

// Importações Nomeadas
// Não tem como renomear o export default, apenas o restante
import arrayLetra from "./modulosJS/es-importNomeado.js";
import { arrayNumeros as cRen } from "./modulosJS/es-importNomeado.js"; // Renomeado para cRen
import * as nomeiaTudo from "./modulosJS/es-importNomeado.js"; // Nomeia todos os exports modulo

console.log(arrayLetra(1));
console.log(cRen);

console.log(nomeiaTudo.arrayLetras); // Busca todos exports do modulo
console.log(nomeiaTudo.arrayNumeros); // Busca todos exports do modulo
console.log(nomeiaTudo.default(3)); // Busca todos exports do modulo

// Importações de classes
import Cursos from "./modulosJS/es-classes.js";
Cursos.addCurso("Figma");
console.log(Cursos.cursos);

Cursos.removerCurso(2);
console.log(Cursos.cursos);

Cursos.apagarCursos();
console.log(Cursos.cursos);
