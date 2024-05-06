export interface Item {
  id: number
  name: string
  desc: string
  date_added: string
  weight: number
  location: string
  owner_id: number
  image_src: string
  is_borrowable: boolean
  is_claimable: boolean
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
  categoryId: null | number
  description: string
  weight: string | number
  location: string
  owner: string
  certificationNeeded: boolean
  certificationExpiryDate: string
}
