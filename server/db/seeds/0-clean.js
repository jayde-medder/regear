/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries in all tables
  await knex('posts').del()
  await knex('users').del()
  await knex('items').del()
  await knex('users').del()
  await knex('request').del()
}
