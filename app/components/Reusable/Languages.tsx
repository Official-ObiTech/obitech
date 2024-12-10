import React from "react";

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
            <div className="absolute top-0 left-0 bg-white z-10 w-3 h-3 rounded-full" />
          )}
        </div>
      ))}
    </>
  );
};

export default ProLanguages;
