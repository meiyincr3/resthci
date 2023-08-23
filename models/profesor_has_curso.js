const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('profesor_has_curso', {
    profesor_idprofesor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'profesor',
        key: 'idprofesor'
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
    tableName: 'profesor_has_curso',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "profesor_idprofesor" },
          { name: "curso_idcurso" },
        ]
      },
      {
        name: "fk_profesor_has_curso_curso1_idx",
        using: "BTREE",
        fields: [
          { name: "curso_idcurso" },
        ]
      },
      {
        name: "fk_profesor_has_curso_profesor1_idx",
        using: "BTREE",
        fields: [
          { name: "profesor_idprofesor" },
        ]
      },
    ]
  });
};
