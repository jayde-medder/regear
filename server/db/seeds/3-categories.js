/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('categories').insert([
    {
      id: 1,
      name: 'Loud stuff',
    },
    {
      id: 2,
      name: 'Speaker',
      parent_id: 1,
    },
  ])
}
