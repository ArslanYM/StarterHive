import { useState, createContext } from "react"

const ThemeContext = createContext()

const SCREEN_THEME = {
	Light_Theme: "bg-gradient-to-r from-gray-700 via-gray-900 to-black",
	Dark_Theme: "bg_Dark_Theme",
}

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => {
	const [boxThemeChecked, setBoxThemeChecked] = useState(false)
	const [theme, setTheme] = useState(() => {
		if (localStorage.getItem("Theme")) {
			const theme_Selected = JSON.parse(localStorage.getItem("Theme"))
			if (theme_Selected === SCREEN_THEME.Light_Theme) {
				setBoxThemeChecked(true)
				return SCREEN_THEME.Dark_Theme
			}
			setBoxThemeChecked(false)
			return SCREEN_THEME.Light_Theme
		}
		return SCREEN_THEME.Light_Theme
	})

	const handleTheme = (changeTheme) => {
		if (changeTheme) {
			setTheme(SCREEN_THEME.Dark_Theme)
			setBoxThemeChecked(true)
		} else {
			setTheme(SCREEN_THEME.Light_Theme)
			setBoxThemeChecked(false)
		}
		localStorage.setItem("Theme", JSON.stringify(theme))
	}

	return (
		<ThemeContext.Provider value={{ handleTheme, theme, boxThemeChecked }}>
			{children}
		</ThemeContext.Provider>
	)
}

export {
	ThemeProvider,
	ThemeContext
}