var DataTypes = require("sequelize").DataTypes;
var _curso = require("./curso");
var _estudiante = require("./estudiante");
var _estudiante_has_curso = require("./estudiante_has_curso");
var _modulo = require("./modulo");
var _profesor = require("./profesor");
var _profesor_has_curso = require("./profesor_has_curso");

function initModels(sequelize) {
  var curso = _curso(sequelize, DataTypes);
  var estudiante = _estudiante(sequelize, DataTypes);
  var estudiante_has_curso = _estudiante_has_curso(sequelize, DataTypes);
  var modulo = _modulo(sequelize, DataTypes);
  var profesor = _profesor(sequelize, DataTypes);
  var profesor_has_curso = _profesor_has_curso(sequelize, DataTypes);

  curso.belongsToMany(estudiante, { as: 'estudiante_idestudiante_estudiantes', through: estudiante_has_curso, foreignKey: "curso_idcurso", otherKey: "estudiante_idestudiante" });
  curso.belongsToMany(profesor, { as: 'profesor_idprofesor_profesors', through: profesor_has_curso, foreignKey: "curso_idcurso", otherKey: "profesor_idprofesor" });
  estudiante.belongsToMany(curso, { as: 'curso_idcurso_cursos', through: estudiante_has_curso, foreignKey: "estudiante_idestudiante", otherKey: "curso_idcurso" });
  profesor.belongsToMany(curso, { as: 'curso_idcurso_curso_profesor_has_cursos', through: profesor_has_curso, foreignKey: "profesor_idprofesor", otherKey: "curso_idcurso" });
  estudiante_has_curso.belongsTo(curso, { as: "curso_idcurso_curso", foreignKey: "curso_idcurso"});
  curso.hasMany(estudiante_has_curso, { as: "estudiante_has_cursos", foreignKey: "curso_idcurso"});
  profesor_has_curso.belongsTo(curso, { as: "curso_idcurso_curso", foreignKey: "curso_idcurso"});
  curso.hasMany(profesor_has_curso, { as: "profesor_has_cursos", foreignKey: "curso_idcurso"});
  estudiante_has_curso.belongsTo(estudiante, { as: "estudiante_idestudiante_estudiante", foreignKey: "estudiante_idestudiante"});
  estudiante.hasMany(estudiante_has_curso, { as: "estudiante_has_cursos", foreignKey: "estudiante_idestudiante"});
  curso.belongsTo(modulo, { as: "modulo_idmodulo_modulo", foreignKey: "modulo_idmodulo"});
  modulo.hasMany(curso, { as: "cursos", foreignKey: "modulo_idmodulo"});
  profesor_has_curso.belongsTo(profesor, { as: "profesor_idprofesor_profesor", foreignKey: "profesor_idprofesor"});
  profesor.hasMany(profesor_has_curso, { as: "profesor_has_cursos", foreignKey: "profesor_idprofesor"});

  return {
    curso,
    estudiante,
    estudiante_has_curso,
    modulo,
    profesor,
    profesor_has_curso,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
