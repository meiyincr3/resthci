const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('modulo', {
    idmodulo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    titulo: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    fecha_inicio: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    fecha_fin: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    curso: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'modulo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idmodulo" },
        ]
      },
    ]
  });
};
