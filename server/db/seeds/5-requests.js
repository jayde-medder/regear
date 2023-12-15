/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('requests').insert([
    {
      id: 1,
      date: '2023-12-08',
      item_id: 1,
      user_id: 2,
      message:
        'I really want to make a cool thing with this awesome, totally real item',
      type: 'Project',
    },
  ])
}
