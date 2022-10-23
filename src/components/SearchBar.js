function SearchBar({ value, onSearch }) {
  return (
    <div className="pt-4">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={value}
        onChange={(event) => {
          onSearch(event.target.value);
        }}
      />
    </div>
  );
}

export default SearchBar;
