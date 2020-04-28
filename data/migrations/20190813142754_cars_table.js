exports.up = function(knex) {
	return knex.schema.createTable('cars', tbl => {
		tbl.increments();
		tbl.string('vin', 17).unique().notNullable();
		tbl.string('make', 40).notNullable();
		tbl.string('model', 40).notNullable();
		tbl.integer('mileage', 7).notNullable();
		tbl.string('transmissionType');
		tbl.string('title');
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('cars');
};
