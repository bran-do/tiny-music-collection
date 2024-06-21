import { createContext } from "react";

const AppContext = createContext({
  username: '',
  searchTerm: '',
  
  setUsername: () => undefined,
  setSearchTerm: () => undefined,
});

export default AppContext;