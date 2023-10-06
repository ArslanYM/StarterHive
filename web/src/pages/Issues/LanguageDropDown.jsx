import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { BsCheck2 } from 'react-icons/bs';
import { MdArrowDropDown } from 'react-icons/md';
import { Input } from '../../components/Input/Input';

const LanguageDropDown = ({
  languages,
  selectedLanguage,
  setSelectedLanguage,
}) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false); // To toggle dropdown
  const [searchValue, setSearchValue] = useState('');
  const [dropdownValues, setDropdownValues] = useState([]);
  const searchInputRef = useRef(null);

  // Close dropdown when clicked outside
  document.addEventListener('click', (e) => {
    if (!isDropDownVisible) return; // If dropdown is not visible, do nothing
    if (e.target.classList.contains('dropdown-container')) return; // If clicked on dropdown, do nothing
    setIsDropDownVisible(false); // Else close the dropdown
  });

  // Sort languages alphabetically
  useEffect(() => {
    languages.sort();
    console.log('#1:languages: ', languages);
    setDropdownValues(languages);
  }, [languages]);

  useEffect(() => {
    if (isDropDownVisible) {
      searchInputRef.current.focus();
    }
  }, [isDropDownVisible]);

  useEffect(() => {
    console.log('#3:searchValue: ', searchValue);
    console.log('#3:languages: ', languages);
    setDropdownValues(filterItem(searchValue, languages));
  }, [searchValue, languages]);

  // When a language is clicked
  const onLanguageClick = (language) => {
    setIsDropDownVisible(false);

    // If the same language is clicked again, set selected language to 'All'
    if (selectedLanguage === language) {
      setSelectedLanguage('All');
      return;
    }

    // Else set the selected language to the clicked language
    setSelectedLanguage(language);
  };

  const handleSearchInputOnClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="max-w-full w-max border-2 border-yellow-400 relative text-white py-1 px-2 rounded-lg">
      <div
        className="dropdown-container flex flex-wrap justify-center items-center cursor-pointer"
        onClick={() => setIsDropDownVisible(!isDropDownVisible)}
      >
        <span className="dropdown-container opacity-60 text-sm block mr-2">
          Language/Topic:{' '}
        </span>
        <span className="dropdown-container flex">
          {selectedLanguage}
          <MdArrowDropDown className="dropdown-container text-2xl" />
        </span>
      </div>
      {isDropDownVisible && (
        <div
          className={`max-h-96 overflow-x-auto absolute top-10 flex w-64 flex-col ju bg-gray-800 border border-gray-700 shadow-xl rounded-md z-10`}
        >
          <div className="px-4 py-2 opacity-60 text-sm">
            Filter By Language / Topic
          </div>
          <div className="px-4 py-2 border-b border-gray-700 opacity-60 text-sm">
            <Input
              innerRef={searchInputRef}
              placeholder='Search'
              onClick={handleSearchInputOnClick}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              type={'search'}
            />
          </div>
          {dropdownValues.map((language, key) => {
            return (
              <div
                key={key}
                className="flex justify-between items-center border-b border-gray-700 px-4 py-2 cursor-pointer hover:bg-gray-600 duration-500 gap-x-1"
                onClick={() => onLanguageClick(language)}
              >
                <span className="w-4 mt-1">
                  {selectedLanguage === language && <BsCheck2 />}
                </span>
                <span className="flex-1">{language}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const filterItem = (query, items) => {
  if (items instanceof Array) {
    return items.filter(item => item.toLowerCase().includes(query.toLowerCase()));
  }
  return items;
}

export default LanguageDropDown;

LanguageDropDown.propTypes = {
  languages: PropTypes.array.isRequired,
  selectedLanguage: PropTypes.string.isRequired,
  setSelectedLanguage: PropTypes.func.isRequired,
};
