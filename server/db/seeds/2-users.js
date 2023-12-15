/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('users').insert([
    {
      id: 1,
      name: 'Jane Dough',
      phone: 64274343434,
      email: 'jane.dough@gmail.com',
      best_contact: 'email',
    },
    {
      id: 2,
      name: 'Gabriel Rawcliffe',
      phone: 64223669927,
      email: 'gabriel.rawcliffe@gmail.com',
      best_contact: 'email',
    },
  ])
}
