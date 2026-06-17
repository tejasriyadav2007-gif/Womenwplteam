import { createContext, useState, useContext } from "react";

// 1. Create the base context
export const TeamContext = createContext();

export function TeamProvider({ children }) {
  // We initialize to false so users land on the login/registration page first
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 2. Define clear explicit handlers that our components expect
  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <TeamContext.Provider
      value={{
        isLoggedIn,
        login,
        logout
      }}
    >
      {children}
    </TeamContext.Provider>
  );
}

// 3. Add the custom hook your components are trying to import!
export function useTeamAuth() {
  return useContext(TeamContext);
}