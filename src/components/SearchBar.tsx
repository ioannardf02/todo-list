const SearchBar = () => {
  return (
    <input
      type="search"
      placeholder="Search Task..."
      className="flex rounded-lg lg:p-3 md:p-2 p-1 gap-2  border-fuchsia-800 border focus:outline-hidden lg:text-lg md:text-base text-sm"
    />
  );
};
export default SearchBar;
