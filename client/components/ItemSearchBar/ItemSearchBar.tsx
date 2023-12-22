interface props {
  setSearchText: (e: string) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  searchText: null | string
}

export default function ItemSearchBar({
  setSearchText,
  handleSubmit,
  searchText,
}: props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }

  return (
    <div className="search">
      <form
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <label htmlFor="itemSearchText">Search Inventory: </label>
        <input
          className="search-input"
          type="text"
          name="itemSearchText"
          id="itemSearchText"
          placeholder="Enter keyword"
          value={searchText ? searchText : ''}
          onChange={handleChange}
        />
        <button className="search-button">Submit</button>
      </form>
    </div>
  )
}
