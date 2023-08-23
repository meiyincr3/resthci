'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('curso', [
	     
      /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
      {
        idcurso: 1,
        nombre_curso: 'HTTPS',
        descripcion_curso: 'Curso Https',
        nivel_dificultad: 'Facil',
        fecha_iniciocurso:'2023-04-01',
        fecha_fincurso: '2023-09-09',
        profesor: 'Gabriel',
        modulo_idmodulo: 1
      },
      {
        idcurso: 2,
        nombre_curso: 'User Journey Map',
        descripcion_curso: 'Curso User Journey Map',
        nivel_dificultad: 'Facil',
        fecha_iniciocurso:'2023-04-01',
        fecha_fincurso: '2023-09-09',
        profesor: 'Marisol',
        modulo_idmodulo: 2
      }
      ], {});
   },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('curso', null, {});
  }
};
