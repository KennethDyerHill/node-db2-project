exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('cars').truncate().then(function() {
		// Inserts seed entries
		return knex('cars').insert([
			{ vin: 'dfsdf234242', make: 'Subaru', model: 'Legacy', mileage: '95000' },
			{ vin: 'hgfhs4665', make: 'Honda', model: 'Accord', mileage: '50000' },
			{ vin: 'mnbcbvb67657', make: 'Subaru', model: 'Outback', mileage: '93000' },
		]);
	});
};
