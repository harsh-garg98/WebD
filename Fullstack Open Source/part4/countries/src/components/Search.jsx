const Search = ({ filterFunction }) => {
  return (
    <>
      find countries
      <input onChange={filterFunction} />
    </>
  );
};

export default Search;
