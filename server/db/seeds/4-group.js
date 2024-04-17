/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('group').insert([
    {
      id: 1,
      is_duplicate: false,
    },
  ])
}
