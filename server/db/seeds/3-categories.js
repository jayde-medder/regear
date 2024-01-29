/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('categories').insert([
    {
      id: 1,
      name: 'Ready for a home',
    },
    {
      id: 2,
      name: 'Borrow Gear',
    },
    {
      id: 3,
      name: 'Fix-It-Yourself',
    },
    {
      id: 4,
      name: 'Parts',
    },
    {
      id: 5,
      name: 'Mixers',
      parent_id: 1,
    },
    {
      id: 6,
      name: 'Instruments',
      parent_id: 1,
    },
    {
      id: 7,
      name: 'Percussion',
      parent_id: 6,
    },
    {
      id: 8,
      name: 'Headphones',
      parent_id: 2,
    },
    {
      id: 9,
      name: 'Lights',
      parent_id: 4,
    },
    {
      id: 10,
      name: 'Printers',
      parent_id: 3,
    },
  ])
}
