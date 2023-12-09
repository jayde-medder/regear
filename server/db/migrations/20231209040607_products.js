/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('products', (table) => {
    table.increments('id').primary()
    table.integer('merchant_id').references('merchants.id')
    table.varchar('name')
    table.integer('price')
    table.varchar('status')
    table.date('created_at')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('products')
}
