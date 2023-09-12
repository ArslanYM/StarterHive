import React from "react";
import PropTypes from "prop-types";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark as codeStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Code = ({ children }) => {
  return (
    <SyntaxHighlighter
      style={codeStyle}
      language="bash"
      className="max-w-lg px-6 py-4 rounded-lg"
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default Code;

Code.propTypes = {
  children: PropTypes.element.isRequired,
};
