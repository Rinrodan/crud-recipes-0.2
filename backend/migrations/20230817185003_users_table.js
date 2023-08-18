/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary;
        table.string('fname');
        table.string('lname');
        table.string('email').unique().notNullable();
        table.string('username').unique();
        table.string('password')
})
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users', table => {
})};
