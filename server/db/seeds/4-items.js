/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('items').insert([
    {
      id: 1,
      item_name: 'Digital Mixer MX-500',
      description:
        'Professional 16-channel digital mixer with built-in effects',
      category_id: 1,
      date_added: '2023-10-05',
      // quantity: 1,
      weight: 3,
      location: 'Shelf 1',
      owner_id: 1,
      has_fault: false,
      fixed_by_RG: false,
      certification_needed: false,
      RG_inventory: true,
      logbook: 'Regular maintenance performed.',
      checked_out: false,
      image_src: '/images/items/mx-500.jpeg',
    },
    {
      id: 2,
      item_name: 'Electronic Drum Kit E-5000',
      description: 'High-quality electronic drum kit with mesh heads',
      category_id: 2,
      // quantity: 1,
      date_added: '2023-09-05',
      weight: 10.0,
      location: 'Shelf 2',
      owner_id: 1,
      has_fault: true,
      item_fault: 'Faulty drum pad',
      action_required: 'Replace drum pad',
      certification_needed: false,
      RG_inventory: true,
      logbook: 'Fault reported by user; action pending.',
      checked_out: false,
      image_src: '/images/items/E-5000.jpeg',
    },
    {
      id: 3,
      item_name: 'Studio Headphones HD-200',
      description:
        'Closed-back studio headphones with accurate sound reproduction',
      category_id: 2,
      date_added: '2023-01-05',
      // quantity: 1,
      weight: 0.2,
      location: 'Shelf 3',
      owner_id: 1,
      has_fault: false,
      fixed_by_RG: false,
      certification_needed: true,
      cert_expiry_date: '2024-1-28',
      RG_inventory: true,
      logbook: 'Certification required for annual maintenance.',
      checked_out: false,
      image_src: '/images/items/HD-200.jpeg',
    },
    {
      id: 4,
      item_name: '9V Adapters',
      description:
        'Polarity swapped to centre negative @ Re:Gear, 2A - will power a long daisy chain of pedals',
      category_id: 1,
      date_added: '2024-01-05',
      // quantity: 1,
      weight: 0.2,
      location: 'Shelf 3',
      owner_id: 1,
      has_fault: false,
      fixed_by_RG: true,
      certification_needed: false,
      cert_expiry_date: null,
      RG_inventory: true,
      logbook: '',
      checked_out: false,
      image_src: '/images/items/9V.jpg',
    },
    {
      id: 5,
      item_name: 'Kindles',
      description: 'Revived @ Re:Gear!',
      category_id: 1,
      date_added: '2024-01-05',
      // quantity: 1,
      weight: 0.2,
      location: 'Shelf 3',
      owner_id: 1,
      has_fault: false,
      fixed_by_RG: true,
      certification_needed: false,
      cert_expiry_date: null,
      RG_inventory: true,
      logbook: '',
      checked_out: false,
      image_src: '/images/items/Kindle.jpg',
    },
    {
      id: 6,
      item_name: 'GR3750 Risograph',
      description: 'Needs fixing. Send a request for more details',
      category_id: 10,
      date_added: '2024-01-05',
      // quantity: 1,
      weight: 0.2,
      location: 'Shelf 3',
      owner_id: 1,
      has_fault: true,
      fixed_by_RG: false,
      certification_needed: false,
      cert_expiry_date: null,
      RG_inventory: true,
      logbook: '',
      checked_out: false,
      image_src: '/images/items/Riso.jpg',
    },
    {
      id: 7,
      item_name: 'LED neon strip lights',
      description: 'Please send us a request if you have a use for these!',
      category_id: 9,
      date_added: '2024-01-05',
      // quantity: 1,
      weight: 0.2,
      location: 'Shelf 3',
      owner_id: 1,
      has_fault: false,
      fixed_by_RG: false,
      certification_needed: false,
      cert_expiry_date: null,
      RG_inventory: true,
      logbook: '',
      checked_out: false,
      image_src: '/images/items/LED.jpg',
    },
  ])
}
