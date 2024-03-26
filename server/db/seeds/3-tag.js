/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('tag').insert([
    {
      id: 1,
      name: 'Instruments',
      color: 'red',
      parent_id: null,
    },
    {
      id: 2,
      name: 'Sound Equipment',
      color: 'blue',
      parent_id: null,
    },
    {
      id: 3,
      name: 'Mixers',
      color: 'purple',
      parent_id: 2,
    },
    {
      id: 4,
      name: 'Percussion',
      color: 'orange',
      parent_id: '1',
    },
    {
      id: 5,
      name: 'Headphones',
      color: 'yellow',
      parent_id: '2',
    },
    {
      id: 6,
      name: 'Lighting',
      color: 'yellow',
      parent_id: null,
    },
    {
      id: 7,
      name: 'Printers',
      color: 'pink',
      parent_id: null,
    },
  ])
}
