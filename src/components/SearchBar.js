function SearchBar() {
  return (
    <div className="pt-4">
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </div>
  );
}

export default SearchBar;
