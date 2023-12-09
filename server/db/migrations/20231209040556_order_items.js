/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('order_items', (table) => {
    table.integer('order_id').references('orders.id')
    table.integer('product_id').references('products.id')
    table.integer('quantity')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('order_items')
}
