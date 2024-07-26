class Cursos {
  static cursos = ["Javascript", "HTML", "CSS", "Java", "C++"];
  static getTodosCursos = () => {
    return this.cursos;
  };
  static getCurso = (i) => {
    return this.cursos[i];
  };
  static addCurso = (novoCurso) => {
    this.cursos.push(novoCurso);
  };
  static apagarCursos = () => {
    this.cursos = [];
  };
  static removerCurso = (index) => {
    if (index > -1 && index < this.cursos.length) {
      this.cursos.splice(index, 1);
    }
  };
}

export default Cursos;
