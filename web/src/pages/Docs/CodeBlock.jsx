import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark as codeStyle } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Code = (props) => {
  return (
    <SyntaxHighlighter
      style={codeStyle}
      language="bash"
      className="max-w-lg px-6 py-4 rounded-lg"
    >
      {props.children}
    </SyntaxHighlighter>
  );
};

export default Code;
