/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('item_log').insert([
    {
      id: 1,
      item: 1,
      datetime: '2024-03-26 15:30:45',
      kind: 1,
      short_desc: 'Fixed USB input',
      desc: '',
      image_src: '/images/items/mx-500.jpeg',
      reported_by: 'Lee',
    },
    {
      id: 2,
      item: 2,
      datetime: '2024-03-26 15:30:45',
      kind: 1,
      short_desc: 'Fixed brain module multi-jack input socket',
      desc: '',
      image_src: '/images/items/mx-500.jpeg',
      reported_by: 'Julie',
    },
    {
      id: 3,
      item: 4,
      datetime: '2024-03-26 15:30:45',
      kind: 1,
      short_desc: 'Polarity switched so they power most guitar pedals',
      desc: '',
      image_src: '/images/items/9V.jpg',
      reported_by: 'Richard',
    },
    {
      id: 4,
      item: 6,
      datetime: '2024-03-26 15:30:45',
      kind: 2,
      short_desc: 'Needs an expert! Contact us if you know about riso stuff',
      desc: '',
      image_src: '/images/items/Riso.jpg',
      reported_by: 'Jade',
    },
  ])
}
