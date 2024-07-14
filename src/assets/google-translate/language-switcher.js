import React, { useEffect, useState } from "react";
import "./lang.css";
const LanguageSwitcher = () => {
  const [lang, setLang] = useState("English");
  useEffect(() => {
    // const addScript = () => {
    //   console.log("Adding Google Translate script");
    //   const existingScript = document.querySelector(
    //     'script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]'
    //   );
    //   if (!existingScript) {
    //     const script = document.createElement("script");
    //     script.type = "text/javascript";
    //     script.async = true;
    //     script.src =
    //       "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    //     document.body.appendChild(script);
    //   }
    // };
    // addScript(); // Call addScript function only once
    // return () => {
    //   // Cleanup function to remove the script if needed
    //   const existingScript = document.querySelector(
    //     'script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]'
    //   );
    //   if (existingScript) {
    //     document.body.removeChild(existingScript);
    //   }
    // };
  }, []); // Empty dependency array ensures this effect runs only once

  const handleLanguageChange = (event) => {
    const lang = event.target.value;

    if (lang === "bosnian" || lang === "bosanski") {
      setLang("Montenegrin");
    } else if (lang === "engleski" || lang === "english") {
      setLang("English");
    }
    const frame = document.querySelector(
      "iframe.VIpgJd-ZVi9od-xl07Ob-OEVmcd.skiptranslate"
    );
    if (!frame) return;
    try {
      const frameDocument =
        frame.contentDocument || frame.contentWindow.document;
      const langSelector = Array.from(
        frameDocument.querySelectorAll(".VIpgJd-ZVi9od-vH1Gmf-ibnC6b span.text")
      ).find((element) => element.innerText === lang);

      if (langSelector) {
        langSelector.click();
      }
    } catch (error) {
      console.error("Error handling language change:", error);
    }
  };
  return (
    <div>
      <select
        className="language-switcher"
        onChange={(e) => handleLanguageChange(e)}
        defaultValue={lang}
        defaultChecked={lang}
      >
        <option className="language-select" value="engleski">
          English
        </option>
        <option className="language-select" value="bosanski">
          Montenegrin
        </option>
      </select>
      <div id="google_translate_element" style={{ display: "none" }}></div>
    </div>
  );
};

export default LanguageSwitcher;
