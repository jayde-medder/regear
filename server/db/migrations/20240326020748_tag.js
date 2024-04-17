/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('tag', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('color')
    table.integer('parent_id').unsigned()
    table.foreign('parent_id').references('id').inTable('tag')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('tag')
}
