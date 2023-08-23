'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('profesor', [
	     
      /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
      {
        nombre: 'Marisol',
        email : 'marisol@espol.edu.ec',
        especializacion: 'Human Computer Interaction'
      },
      {
        nombre: 'Gabriel',
        email : 'gabriel@espol.edu.ec',
        especializacion: 'Information Security'
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
    await queryInterface.bulkDelete('profesor', null, {});
  }
};
