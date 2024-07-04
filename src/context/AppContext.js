import { createContext } from "react";

const AppContext = createContext({
  username: '',
  setUsername: () => undefined,
});

export default AppContext;