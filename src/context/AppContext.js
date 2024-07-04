import { createContext } from "react";

const AppContext = createContext({
  username: 'user', // Default username is 'user'
  setUsername: () => undefined,
});

export default AppContext;