/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('request', (table) => {
    table.string('id').primary()
    table.date('date')
    table.integer('item_id').references('items.id')
    table.string('message')
    table.string('type')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('request')
}
