const arrayCarros = ["Corsa", "Corolla", "Gol", "L200", "Sandeiro", "Fusca"];
const arrayCores = ["Verde", "Vermelho", "Amarelo", "Azul", "Branco", "Preto"];
const getCarros = () => {
  const mergeArray = Object.assign({ arrayCarros, arrayCores });
  return mergeArray;
};

export { arrayCarros };
export default { arrayCores };
export { getCarros };
