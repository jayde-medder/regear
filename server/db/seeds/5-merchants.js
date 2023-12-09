/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('merchants').insert([
    {
      id: 1,
      merchant_name: 'Stuff industries',
      admin_id: 2,
      country_code: 64,
      created_at: '2023-12-09',
    },
  ])
}
