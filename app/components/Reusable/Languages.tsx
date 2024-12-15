import React from "react";
import { FaCheckCircle } from "react-icons/fa";

interface ProLang {
  text: string;
  gradient: boolean;
}

interface Lang {
  languages: ProLang[];
}

const ProLanguages: React.FC<Lang> = ({ languages }) => {
  return (
    <>
      {languages.map((language, index) => (
        <div
          key={index}
          className={`proj_item ${language.gradient ? "color" : ""}`}
        >
          {language.text.split("-").map((word, i) => (
            <React.Fragment key={i}>
              {word}
              <br />
            </React.Fragment>
          ))}
          {language.gradient && (
            <FaCheckCircle className="absolute top-1 left-1 z-10  " />
          )}
        </div>
      ))}
    </>
  );
};

export default ProLanguages;
