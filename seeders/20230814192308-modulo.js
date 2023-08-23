'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('modulo', [
	     
      /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
      {
        titulo: 'Seguridad Informática',
        descripcion: 'marisol@espol.edu.ec',
        fecha_inicio: '2023-04-01',
        fecha_fin:'2023-09-09',
        curso: 1
      },
      {
        titulo: 'User Experience',
        descripcion: 'gabriel@espol.edu.ec',
        fecha_inicio: '2023-08-15',
        fecha_fin: '2023-10-09',
        curso: 2
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
    await queryInterface.bulkDelete('modulo', null, {});
  }
};
