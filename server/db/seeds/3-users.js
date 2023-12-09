/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('users').insert([
    {
      id: 1,
      full_name: 'Jane Dough',
      email: 'jane.dough@gmail.com',
      gender: 'n/a',
      date_of_birth: '2023-12-09',
      country_code: 64,
      created_at: '2023-12-09',
    },
    {
      id: 2,
      full_name: 'Gabriel Rawcliffe',
      email: 'gabriel.rawcliffe@gmail.com',
      gender: 'male',
      date_of_birth: '1988-08-18',
      country_code: 64,
      created_at: '2023-12-09',
    },
  ])
}
