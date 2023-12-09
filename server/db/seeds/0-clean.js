/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries in all tables
  await knex('order_items').del()
  await knex('products').del()
  await knex('merchants').del()
  await knex('orders').del()
  await knex('users').del()
  await knex('countries').del()
  await knex('posts').del()
}
