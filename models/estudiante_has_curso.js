const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estudiante_has_curso', {
    estudiante_idestudiante: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'estudiante',
        key: 'idestudiante'
      }
    },
    curso_idcurso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'curso',
        key: 'idcurso'
      }
    }
  }, {
    sequelize,
    tableName: 'estudiante_has_curso',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "estudiante_idestudiante" },
          { name: "curso_idcurso" },
        ]
      },
      {
        name: "fk_estudiante_has_curso_curso1_idx",
        using: "BTREE",
        fields: [
          { name: "curso_idcurso" },
        ]
      },
      {
        name: "fk_estudiante_has_curso_estudiante_idx",
        using: "BTREE",
        fields: [
          { name: "estudiante_idestudiante" },
        ]
      },
    ]
  });
};
