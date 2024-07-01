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
  is_working: boolean
  is_certified: boolean | null
}
