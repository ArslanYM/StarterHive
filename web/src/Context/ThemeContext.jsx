import { useState, createContext } from "react"

const ThemeContext = createContext()

const SCREEN_THEME = {
	Light_Theme: "bg-gradient-to-r from-gray-700 via-gray-900 to-black",
	Dark_Theme: "bg_Dark_Theme",
}

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(() => {
		if (localStorage.getItem("Theme")) {
			const theme_Selected = JSON.parse(localStorage.getItem("Theme"))
			return theme_Selected.bg_Theme === SCREEN_THEME.Light_Theme
				? { bg_Theme: SCREEN_THEME.Dark_Theme, checked: true }
				: { bg_Theme: SCREEN_THEME.Light_Theme, checked: false }
		}
		return { bg_Theme: SCREEN_THEME.Light_Theme, checked: false }
	})

	const handleTheme = (changeTheme) => {
		changeTheme
			? setTheme({ ...theme, bg_Theme: SCREEN_THEME.Dark_Theme, checked: true })
			: setTheme({ ...theme, bg_Theme: SCREEN_THEME.Light_Theme, checked: false })
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