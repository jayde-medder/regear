export async function seed(knex) {
  await knex('post').insert([
    {
      title: 'Welcome to Re:Gear',
      date: '2023-11-13',
      text: 'Re:Gear Hardware Library is a Dunedin based community initiative focused on the recycling, repurposing, and redistribution of electronic hardware. ',
      isPinned: true,
    },
    {
      title: 'Electronic Components for Makers',
      date: '2023-11-14',
      text: 'A batch of various electronic components, perfect for DIY electronics projects...',
      isPinned: false,
    },
    {
      title: 'More Posts here!',
      date: '2023-11-15',
      text: 'These are just some examples',
      isPinned: false,
    },
  ])
}
