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
      quantity: 1,
      weight: 3,
      location: 'Shelf 1',
      owner_id: 1,
      has_fault: false,
      fixed_by_RG: false,
      certification_needed: false,
      RG_inventory: true,
      logbook: 'Regular maintenance performed.',
      checked_out: false,
      image_src: '/images/mx-500',
    },
    {
      id: 2,
      item_name: 'Electronic Drum Kit E-5000',
      description: 'High-quality electronic drum kit with mesh heads',
      category_id: 1,
      quantity: 1,
      weight: 10.0,
      location: 'Shelf 2',
      owner_id: 2,
      has_fault: true,
      item_fault: 'Faulty drum pad',
      action_required: 'Replace drum pad',
      certification_needed: false,
      RG_inventory: true,
      logbook: 'Fault reported by user; action pending.',
      checked_out: false,
      image_src: '/images/E-5000',
    },
    {
      id: 3,
      item_name: 'Studio Headphones HD-200',
      description:
        'Closed-back studio headphones with accurate sound reproduction',
      category_id: 1,
      quantity: 1,
      weight: 0.2,
      location: 'Shelf 3',
      owner_id: 2,
      has_fault: false,
      fixed_by_RG: false,
      certification_needed: true,
      cert_expiry_date: '2024-1-28',
      RG_inventory: true,
      logbook: 'Certification required for annual maintenance.',
      checked_out: false,
      image_src: '/images/HD-200',
    },
  ])
}
