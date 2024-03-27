/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('item_groups').insert([
    {
      item: 1,
      group: 1,
    },
  ])
}
