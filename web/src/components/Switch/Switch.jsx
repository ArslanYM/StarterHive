import { FaSun, FaMoon } from 'react-icons//fa'
import './style.css'
import { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'
const Switch = () => {
	const { handleTheme } = useContext(ThemeContext)

	return (
		<div>
			<input type="checkbox" className="checkbox" id="checkbox" onClick={(e) => handleTheme(e.target.checked)} />
			<label htmlFor="checkbox" className="checkbox-label">
				<FaSun className='fa-sun' />
				<FaMoon className='fa-moon' />
				<span className="ball"></span>
			</label>
		</div>
	)
}

export default Switch