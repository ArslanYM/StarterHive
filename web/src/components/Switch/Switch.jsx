import { FaSun, FaMoon } from 'react-icons//fa'
import './style.css'
const Switch = () => {
	return (
		<div>
			<input type="checkbox" className="checkbox" id="checkbox" />
			<label htmlFor="checkbox" className="checkbox-label">
				<FaSun className='fa-sun' />
				<FaMoon className='fa-moon' />
				<span className="ball"></span>
			</label>
		</div>
	)
}

export default Switch