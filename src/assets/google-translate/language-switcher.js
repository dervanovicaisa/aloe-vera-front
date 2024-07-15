import React, { useState } from "react";
import "./lang.css";
import { Dropdown } from "react-bootstrap";
import UKFlag from "../united-kingdom.png";
import MNEFlag from "../montenegro.png";

const LanguageSwitcher = () => {
  const [lang, setLang] = useState("english");

  const handleLanguageChange = (event) => {
    const lang = event;

    if (lang === "bosnian" || lang === "bosanski") {
      setLang("montenegrin");
    } else if (lang === "engleski" || lang === "english") {
      setLang("english");
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
    <div className="language-dropdown-box">
      <Dropdown onSelect={handleLanguageChange} align={"end"}>
        <Dropdown.Toggle variant="white" id="language-dropdown">
          {lang === "engleski" || lang === "english" ? (
            <img src={UKFlag} alt="UK" width={20} className="flag-icon" />
          ) : lang === "bosanski" || lang === "montenegrin" ? (
            <img src={MNEFlag} alt="MNE" width={20} className="flag-icon" />
          ) : (
            "Select Language"
          )}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="engleski" defaultValue={"engleski"}>
            <img src={UKFlag} alt="UK" width={20} className="flag-icon" />
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="bosanski" defaultValue={"bosanski"}>
            <img src={MNEFlag} alt="MNE" width={20} className="flag-icon" />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div id="google_translate_element" style={{ display: "none" }}></div>
    </div>
  );
};

export default LanguageSwitcher;
