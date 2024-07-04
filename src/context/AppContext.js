import { createContext } from "react";

const AppContext = createContext({
  username: '',
  collection: [],
  
  setUsername: () => undefined,
  setCollection: () => undefined,
});

export default AppContext;