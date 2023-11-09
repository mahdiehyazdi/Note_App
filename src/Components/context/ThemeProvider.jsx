import { createContext, useContext } from "react";
import { UseLocalStorageTheme } from "../hooks/UseLocalStorage";

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = UseLocalStorageTheme({ key: "theme", initial: "" });

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export const UseTheme = () => {
    const contexts = useContext(ThemeContext);
    if (contexts === undefined) throw new Error("theme was used outside of ThemeProvider");
    return contexts;
};
