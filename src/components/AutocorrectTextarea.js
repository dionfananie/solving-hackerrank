import React, { useDeferredValue, useEffect, useState } from "react";

const AutocorrectTextarea = ({ corrections }) => {
  const [currentText, setCurrentText] = useState("");
  const deffered = useDeferredValue(currentText);
  const handleChange = (e) => {
    const text = e.target.value || "";

    setCurrentText(text);
  };

  useEffect(() => {
    let formatted = currentText;
    // Loop through each key in the replacements object
    for (const [key, value] of Object.entries(corrections)) {
      // Create a regular expression with word boundaries to avoid partial matches
      // (?<=^|\\s) this is positive lookbehind = (?<=) when symbol ^ is new line of word and \s is space,
      // \\s using double backslash because would convert to only one backslash if using new RegExp, you can using direct string usin one backslash /(?<=^|\s)weird\/s/\g.
      // so this would check the word has space before or the word is first word.
      //  /\sweird\s/ <= using one backslash if not using new regExp
      const regex = new RegExp(`(?<=^|\\s)${key}(?=\\s)`, "g");
      console.log(regex);
      const ex = "hi wierd ";
      console.log(ex.replace(regex, value));

      formatted = formatted.replace(regex, value);
    }

    console.log("formatted", formatted);
    setCurrentText(formatted);
  }, [deffered, corrections, currentText]);

  return (
    <div className="text-center">
      <textarea
        data-testid="textarea"
        rows={10}
        cols={80}
        value={currentText}
        className="card"
        onChange={handleChange}
      />
    </div>
  );
};

export default AutocorrectTextarea;
