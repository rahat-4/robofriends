const SearchBox = ({ onSearchChange }) => {
  return (
    <div className="ma3">
      <input
        className="bg-lightest-blue b--green ba pa3"
        type="search"
        placeholder="Robot Search"
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBox;
