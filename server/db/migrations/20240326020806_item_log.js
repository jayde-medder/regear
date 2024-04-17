/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('item_log', (table) => {
    table.increments('id').primary()
    table.integer('item').references('item.id')
    table.datetime('datetime')
    table.integer('kind').references('log_kind.id')
    table.string('short_desc')
    table.text('desc')
    table.string('image_src')
    table.string('reported_by')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('item_log')
}
