import { createContext } from "react";

// const [theme, setTheme] = useState('darkBlue')
// mimicking useState hook
const ThemeContext = createContext(["pink", () => {}]);

export default ThemeContext;
