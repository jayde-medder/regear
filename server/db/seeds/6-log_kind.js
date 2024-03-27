/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('log_kind').insert([
    {
      id: 1,
      name: 'Repaired',
      color: 'green',
    },
    {
      id: 2,
      name: 'Faulty',
      color: 'red',
    },
    {
      id: 3,
      name: 'Certified',
      color: 'blue',
    },
    {
      id: 4,
      name: 'Needs Certification',
      color: 'purple',
    },
  ])
}
