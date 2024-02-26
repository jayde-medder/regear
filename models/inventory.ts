export interface Item {
  id: number
  name: string
  has_fault: boolean
  date_added: string
  checked_out: boolean
  image_src: string
  category_id: number
  category_name: string
  parent_id: number | null
  root_category: string
}

export interface CompleteItem extends Item {
  item_name: string
  description: string
  weight: number
  location: string
  owner_id: number
  owner_name: string
  fixed_by_RG: boolean
  certification_needed: boolean
  cert_expiry_date: null | string
  RG_inventory: boolean
  logbook: string
}

export interface NewItem {
  itemName: string
  faulty: boolean
  image: File | null
  category: string
  description: string
  weight: string | number
  location: string
  owner: string
  certificationNeeded: boolean
  certificationExpiryDate: string
}
