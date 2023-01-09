'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Products',
			[
				{
					createdAt: new Date(),
					updatedAt: new Date(),
					name: 'Product-1',
					description: 'Cool description telling more about Product-1',
					priceBRL: 1500.0
				},
				{
					createdAt: new Date(),
					updatedAt: new Date(),
					name: 'Product-2',
					description: 'Cool description telling more about Product-2',
					priceBRL: 2000.0
				},
				{
					createdAt: new Date(),
					updatedAt: new Date(),
					name: 'Product-3',
					description: 'Cool description telling more about Product-3',
					priceBRL: 850.9
				}
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Products', null, {});
	}
};
