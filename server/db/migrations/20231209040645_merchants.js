/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('merchants', (table) => {
    table.increments('id').primary()
    table.varchar('merchant_name')
    table.integer('admin_id').references('users.id')
    table.integer('country_code').references('countries.code')
    table.date('created_at')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('merchants')
}
