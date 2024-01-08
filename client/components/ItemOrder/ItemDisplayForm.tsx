interface Props {
  itemOrder: string
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function ItemOrder({ itemOrder, handleSelectChange }: Props) {
  const orderOptions = ['A-Z', 'Date added', 'Category']

  return (
    <>
      <form>
        <label>
          <select
            value={itemOrder}
            onChange={(e) => {
              handleSelectChange(e)
            }}
          >
            {orderOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </form>
    </>
  )
}
