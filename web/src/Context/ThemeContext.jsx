import { useState, createContext } from "react"

const ThemeContext = createContext()

const SCREEN_THEME = {
	Light_Theme: "bg_Light_Theme",
	Dark_Theme: "bg_Dark_Theme",
}

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(() => {
		if (localStorage.getItem("Theme")) {
			const theme_Selected = JSON.parse(localStorage.getItem("Theme"))
			return theme_Selected === SCREEN_THEME.Light_Theme
				? SCREEN_THEME.Dark_Theme
				: SCREEN_THEME.Light_Theme
		}
		return SCREEN_THEME.Light_Theme
	})

	const handleTheme = (checked) => {
		//Checked -> Boolean
		checked ? setTheme(SCREEN_THEME.Dark_Theme) : setTheme(SCREEN_THEME.Light_Theme)
		localStorage.setItem("Theme", JSON.stringify(theme))
	}

	return (
		<ThemeContext.Provider value={{ handleTheme, theme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export {
	ThemeProvider,
	ThemeContext
}