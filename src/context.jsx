import { createContext, useEffect, useState } from "react";

export const Contexts = createContext(null);

export default function GlobalState({ children }) {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(true);

  const toggleTheme = () => {
    setLight((prev) => !prev);
  };

  // useEffect(() => {console.log(light)}, [light]);

  return (
    <Contexts.Provider
      value={{
        open,
        setOpen,
        light,
        setLight,
        toggleTheme,
      }}
    >
      {children}
    </Contexts.Provider>
  );
}
