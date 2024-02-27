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
    table.date('date_added')
    // table.integer('quantity') removing for now as it makes it hard to track individual items. Can track duplicates in front end
    table.integer('weight')
    table.string('location')
    table.integer('owner_id').nullable().references('users.id')
    table.boolean('has_fault')
    table.string('item_fault').nullable()
    table.string('action_required').nullable()
    table.boolean('fixed_by_RG').nullable()
    table.date('date_fixed').nullable()
    table.boolean('certification_needed')
    table.date('cert_expiry_date').nullable()
    table.boolean('RG_inventory').nullable()
    table.integer('fixer_id').nullable().references('users.id')
    table.string('logbook').nullable()
    table.boolean('checked_out').nullable()
    table.string('image_src')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('items')
}
