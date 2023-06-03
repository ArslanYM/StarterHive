import { useState, createContext } from "react"

const ThemeContext = createContext()
const SCREEN_THEME = {
	Light_Theme: "bg_Light_Theme",
	Dark_Theme: "bg_Dark_Theme",
}

const ThemeProvider = ({ children }) => {
	const [theme] = useState(SCREEN_THEME.Light_Theme)

	const handleTheme = () => {
		alert("Hola")
	}

	return (
		<ThemeContext.Provider value={{ handleTheme, theme, SCREEN_THEME }}>
			{children}
		</ThemeContext.Provider>
	)
}

export {
	ThemeProvider,
	ThemeContext
}