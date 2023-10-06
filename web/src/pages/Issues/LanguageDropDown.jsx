import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { BsCheck2 } from 'react-icons/bs';
import { MdArrowDropDown } from 'react-icons/md';

const LanguageDropDown = ({
  languages,
  selectedLanguages,
  setSelectedLanguages,
}) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false); // To toggle dropdown

  // Close dropdown when clicked outside
  document.addEventListener('click', (e) => {
    if (!isDropDownVisible) return; // If dropdown is not visible, do nothing
    if (e.target.classList.contains('dropdown-container')) return; // If clicked on dropdown, do nothing
    setIsDropDownVisible(false); // Else close the dropdown
  });

  // Sort languages alphabetically
  useEffect(() => {
    languages.sort();
  }, [languages]);

  // When a language is clicked
  const onLanguageClick = (e, language) => {
    e.stopPropagation();
    // If the same language is clicked again, set selected language to 'All'
    if (selectedLanguages.includes(language)) {
      setSelectedLanguages(selectedLanguages.filter(selected => selected !== language));
      return;
    }

    // Else set the selected language to the clicked language
    setSelectedLanguages([...selectedLanguages, language]);
  };

  const handleClearAllSelected = () => {
    setSelectedLanguages([]);
  }

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
          <span className="max-w-xs truncate dropdown-container" title={selectedLanguages.length > 0 ? (
              selectedLanguages.join(', ')
            ) : 'All'}>
            {selectedLanguages.length === 0 && 'All'}
            {selectedLanguages.length > 0 && (
              selectedLanguages.join(', ')
            )}
          </span>
          <MdArrowDropDown className="dropdown-container text-2xl" />
        </span>
      </div>
      {isDropDownVisible && (
        <div
          className={` absolute top-10 flex w-64 flex-col ju bg-gray-800 border border-gray-700 shadow-xl rounded-md z-10`}
        >
          <div className='max-h-96 overflow-x-auto'>
            <div className="px-4 py-2 border-b border-gray-700 opacity-60 text-sm">
              Filter By Language / Topic
            </div>
            {languages.map((language, key) => {
              return (
                <div
                  key={key}
                  className="flex justify-between items-center border-b border-gray-700 px-4 py-2 cursor-pointer hover:bg-gray-600 duration-500 gap-x-1"
                  onClick={(e) => onLanguageClick(e, language)}
                >
                  <span className="w-4 mt-1">
                    {selectedLanguages.includes(language) && <BsCheck2 />}
                  </span>
                  <span className="flex-1">{language}</span>
                </div>
              );
            })}
          </div>
          {selectedLanguages.length > 0 && (
            <div className='flex justify-center'>
              <button onClick={handleClearAllSelected} className='dropdown-container text-xs p-2 hover:cursor-pointer text-yellow-600 underline'>
                Clear all filters
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LanguageDropDown;

LanguageDropDown.propTypes = {
  languages: PropTypes.array.isRequired,
  selectedLanguages: PropTypes.array.isRequired,
  setSelectedLanguages: PropTypes.func.isRequired,
};
