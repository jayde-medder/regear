/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('contributions', (table) => {
    table.integer('item_id').references('items.id')
    table.integer('user_id').references('users.id')
    table.date('date')
    table.string('type')
    table.string('description')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('contributions')
}
