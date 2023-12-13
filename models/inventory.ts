export interface ItemList {
  id: number
  name: string
  has_fault: boolean
  checked_out: boolean
  image_src: string
  category_id: number
  category_name: string
  parent_id: number | null
}
