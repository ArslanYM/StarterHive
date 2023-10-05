import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FiTerminal } from 'react-icons/fi';
import { MdOutlineContentCopy } from 'react-icons/md';
import { BsCheck2 } from 'react-icons/bs';
import { useState } from 'react';

const Code = ({ command }) => {
  const [isCopiedToClipBoard, setIsCopiedToClipBoard] = useState(false);

  // Function to copy the command to clipboard
  const copyToClipBoard = () => {
    if (isCopiedToClipBoard) return;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(command)
        .then(() => {
          setIsCopiedToClipBoard(true);

          setTimeout(() => {
            setIsCopiedToClipBoard(false);
          }, 2000);
        })
        .catch((error) => {
          alert('Unable to copy text to clipboard:', error);
        });
    } else {
      alert('unable to copy password!');
    }
  };

  return (
    <div className="border border-slate-500 rounded-md overflow-hidden shadow-sm">
      <div className="flex justify-between mx-4 my-1">
        <div className="flex items-center gap-1 text-gray-400 text-base">
          <FiTerminal />
          Terminal
        </div>
        <div
          onClick={copyToClipBoard}
          className="text-xl cursor-pointer hover:bg-slate-700 hover:bg-opacity-50 p-2 rounded-md duration-300 relative w-9 h-9"
        >
          <MdOutlineContentCopy
            className={`absolute duration-300 ${
              isCopiedToClipBoard ? 'scale-0' : 'scale-100 delay-300'
            }`}
          />
          <BsCheck2
            className={`absolute ${
              isCopiedToClipBoard
                ? 'scale-100 duration-300 delay-200'
                : 'scale-0'
            }`}
          />
        </div>
      </div>
      <SyntaxHighlighter
        customStyle
        style={monokai}
        language="bash"
        className="thin-scrollbar"
      >
        {command}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;

Code.propTypes = {
  command: PropTypes.string.isRequired,
};
