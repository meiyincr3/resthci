const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('curso', {
    idcurso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_curso: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    descripcion_curso: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    nivel_dificultad: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    fecha_iniciocurso: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    fecha_fincurso: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    profesor: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    modulo_idmodulo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'modulo',
        key: 'idmodulo'
      }
    }
  }, {
    sequelize,
    tableName: 'curso',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idcurso" },
        ]
      },
      {
        name: "fk_curso_modulo1_idx",
        using: "BTREE",
        fields: [
          { name: "modulo_idmodulo" },
        ]
      },
    ]
  });
};
