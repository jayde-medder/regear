/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('items', (table) => {
    table.increments('id').primary()
    table.string('item_name')
    table.string('description')
    table.integer('category_id').references('categories.id')
    table.integer('quantity')
    table.float('weight')
    table.string('location')
    table.integer('owner_id').references('users.id')
    table.boolean('has_fault')
    table.string('item_fault')
    table.string('action_required')
    table.boolean('fixed_by_RG')
    table.date('date_fixed')
    table.boolean('certification_needed')
    table.date('cert_expiry_date')
    table.boolean('RG_inventory')
    table.integer('fixer_id').references('users.id')
    table.string('logbook')
    table.boolean('checked_out')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('items')
}
