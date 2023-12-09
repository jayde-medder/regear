/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('orders').insert([
    {
      id: 1,
      user_id: 2,
      status: 'unknown',
      created_at: '2023-12-09',
    },
  ])
}
