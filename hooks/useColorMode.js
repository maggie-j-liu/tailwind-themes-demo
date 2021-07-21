import React from "react";

export const colorModes = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
];
const ColorModeContext = React.createContext();
export const ColorModeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState(undefined);
  const storeUserPref = (pref) => {
    localStorage.setItem("theme", pref);
  };
  const getUserPref = () => {
    return localStorage.getItem("theme");
  };
  React.useEffect(() => {
    const userPref = getUserPref();
    console.log("userPref", userPref);
    if (userPref !== null && colorModes.includes(userPref)) {
      rawSetColorMode(userPref);
    }
  }, []);
  const setColorMode = (pref) => {
    rawSetColorMode(pref);
    storeUserPref(pref);
    const toRemove = colorModes.filter((cls) => {
      console.log(cls, document.documentElement.classList.contains(cls));
      return document.documentElement.classList.contains(cls);
    });
    console.log("toRemove", toRemove);
    for (const cls of toRemove) {
      document.documentElement.classList.remove(cls);
    }
    console.log("pref", pref);
    document.documentElement.classList.add(pref);
  };
  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

const useColorMode = () => React.useContext(ColorModeContext);

export default useColorMode;
