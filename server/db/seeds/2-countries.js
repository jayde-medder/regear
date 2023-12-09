/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('countries').insert([
    { code: 64, name: 'New Zealand', continent_name: 'Australasia' },
    { code: 61, name: 'Australia', continent_name: 'Australasia' },
  ])
}
