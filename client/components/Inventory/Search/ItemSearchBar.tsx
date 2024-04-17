interface props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  searchText: null | string
  handleSearchTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function ItemSearchBar({
  handleSubmit,
  searchText,
  handleSearchTextChange,
}: props) {
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
          onChange={handleSearchTextChange}
        />
        <button className="search-button">Submit</button>
      </form>
    </div>
  )
}
