/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('contributions').insert([
    {
      item_id: 1,
      user_id: 2,
      date: '2023-11-01',
      type: 'donation',
      description: 'A broken speaker was donated',
    },
  ])
}
