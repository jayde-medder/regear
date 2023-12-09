/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries in ALL tables
  await knex('contributions').del()
  await knex('loans').del()
  await knex('requests').del()
  await knex('categories').del()
  await knex('items').del()
  await knex('users').del()
  await knex('posts').del()
}
