"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CodeInputProps {
  code: string;
  language: string;
}

const CodeInput: React.FC<CodeInputProps> = (props) => {
  const { code, language } = props;
  return (
    <SyntaxHighlighter language={language} style={dark}>
      {code}
    </SyntaxHighlighter>
  );
};

export { CodeInput };
