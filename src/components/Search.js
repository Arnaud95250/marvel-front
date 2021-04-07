const Search = ({ searchCharacters }) => {
  return (
    <div className="search">
      <input
        placeholder="SEARCH"
        onChange={(event) => {
          searchCharacters(event.target.value);
        }}
      />
    </div>
  );
};

export default Search;
