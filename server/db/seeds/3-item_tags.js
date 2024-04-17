/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('item_tags').insert([
    {
      item: 1,
      tag: 3,
    },
    {
      item: 2,
      tag: 4,
    },
    {
      item: 3,
      tag: 5,
    },
    {
      item: 4,
      tag: 8,
    },
    {
      item: 5,
      tag: 9,
    },
    {
      item: 6,
      tag: 7,
    },
    {
      item: 7,
      tag: 6,
    },
  ])
}
