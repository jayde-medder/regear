/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('order_items').insert([
    { order_id: 1, product_id: 1, quantity: 1 },
    { order_id: 1, product_id: 2, quantity: 2 },
    { order_id: 1, product_id: 1, quantity: 1 },
  ])
}
