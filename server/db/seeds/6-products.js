/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('products').insert([
    {
      id: 1,
      merchant_id: 1,
      name: 'Synthesizer X-2000',
      price: 10,
      status: 'unknown',
      created_at: '2023-12-09',
    },
    {
      id: 2,
      merchant_id: 1,
      name: 'Digital Drum Kit Pro',
      price: 30,
      status: 'tbc',
      created_at: '2023-12-10',
    },
    {
      id: 3,
      merchant_id: 1,
      name: 'Studio Monitor Speakers',
      price: 47,
      status: 'single',
      created_at: '2023-12-11',
    },
  ])
}
