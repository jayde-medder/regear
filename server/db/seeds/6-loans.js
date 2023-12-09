/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('loans').insert([
    {
      item_id: 1,
      user_id: 2,
      date_out: '2023-12-09',
      date_in: '2023-12-10',
      request_id: 1,
    },
  ])
}
