import { FaSun, FaMoon } from 'react-icons//fa'
import './style.css'

// eslint-disable-next-line react/prop-types
const Switch = ({ handleTheme, boxThemeChecked }) => {
	return (
		<div>
			<input type="checkbox" className="checkbox" id="checkbox" checked={boxThemeChecked} onChange={(e) => handleTheme(e.target.checked)} />
			<label htmlFor="checkbox" className="checkbox-label">
				<FaSun className='fa-sun' />
				<FaMoon className='fa-moon' />
				<span className="ball"></span>
			</label>
		</div>
	)
}

export default Switch