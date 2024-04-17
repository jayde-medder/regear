/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries in ALL tables

  await knex('item_log').del()
  await knex('log_kind').del()
  await knex('item_groups').del()
  await knex('group').del()
  await knex('item_tags').del()
  await knex('tag').del()
  await knex('item').del()
  await knex('post').del()
}
