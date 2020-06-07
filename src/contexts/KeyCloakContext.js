import React, { useState, createContext } from 'react';

export const KeyCloakContext = createContext();

const KeyCloakContextProvider = (props) => {
  const [keyCloak, setKeyCloak] = useState(null)
  const [authenticated, setAuthenticated] = useState(false);

  const updateKeyCloak = (keyCloak) => {
    setKeyCloak(keyCloak);
  }
  const updateAuthenticated = (auth) => {
    setAuthenticated(auth);
  }
  return (
    <KeyCloakContext.Provider value={{ keyCloak, updateKeyCloak, authenticated, updateAuthenticated }}>
      {props.children}
    </KeyCloakContext.Provider>
  )
}

export default KeyCloakContextProvider;