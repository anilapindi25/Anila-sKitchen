const SortByOptions = (props) => {
  const { sortBy, setSortBy } = props;
  return (
    <select
      value={sortBy}
      onChange={e => setSortBy(e.target.value)}
      className="sort-select"
    >
      <option value="Lowest">Sort by Lowest</option>
      <option value="Highest">Sort by Highest</option>
    </select>
  );
};

export default SortByOptions;