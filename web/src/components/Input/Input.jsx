import PropTypes from 'prop-types';

export const Input = ({ innerRef, name, value, placeholder, onClick, onChange, type }) => {

  return (
    <input
      ref={innerRef}
      onClick={onClick}
      className="rounded-md w-full bg-black bg-opacity-40 p-1 pl-3 pr-3 text-sm outline-none focus:ring-2 focus:ring-yellow-400"
      onChange={onChange}
      value={value}
      type={type || 'text'}
      name={name}
      placeholder={placeholder}
    />
  );
}
Input.propTypes = {
  innerRef: PropTypes.object,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['search', 'text', 'number', 'email', 'password', 'url', 'tel'])
}