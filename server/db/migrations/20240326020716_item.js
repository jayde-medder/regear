/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('item', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.text('desc')
    table.date('date_added')
    table.numeric('weight', 7, 2)
    table.string('location')
    table.integer('owner_id').nullable()
    table.string('image_src')
    table.boolean('is_borrowable')
    table.boolean('is_claimable')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('item')
}
