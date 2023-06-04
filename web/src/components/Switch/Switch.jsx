import { FaSun, FaMoon } from 'react-icons//fa'
import './style.css'

// eslint-disable-next-line react/prop-types
const Switch = ({ handleTheme, checked }) => {
	return (
		<div className='switch__Theme'>
			<input type="checkbox" className="checkbox" id="checkbox" checked={checked} onChange={(e) => handleTheme(e.target.checked)} />
			<label htmlFor="checkbox" className="checkbox-label">
				<FaSun className='fa-sun' />
				<FaMoon className='fa-moon' />
				<span className="ball"></span>
			</label>
		</div>
	)
}

export default Switch