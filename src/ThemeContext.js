import { createContext } from "react";

// mimicking useState hook
const ThemeContext = createContext(["pink", () => {}]);

export default ThemeContext;
