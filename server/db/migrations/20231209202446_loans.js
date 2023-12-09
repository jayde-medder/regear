/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('loans', (table) => {
    table.integer('item_id').references('items.id')
    table.integer('user_id').references('users.id')
    table.date('date_out')
    table.date('date_in')
    table.integer('request_id').references('requests.id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('loans')
}
