import { createContext } from "react";

const SearchContext = createContext({
  searchTerm: '',
  searchResult: [],

  setSearchTerm: () => undefined,
  setSearchResult: () => undefined,
});

export default SearchContext;