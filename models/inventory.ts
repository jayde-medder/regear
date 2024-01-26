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
