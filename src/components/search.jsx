import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { getCatlog } from "../services/fakeCatlogService";
import "../styles/search.css";

const Search = ({ catlogs }) => {
  const [catlogValue, seCatlogValue] = useState("odghgd");
  const [fieldValue, setFieldValue] = useState("");
  const [isFocused, setFocus] = useState(false);
  const [isSelectFocused, setSelectFocus] = useState(false);
  const [isButtonFocused, setButtonFocus] = useState(false);
  const searchField = useRef(null);

  const getClassName = function (isElementFocused, baseClassName) {
    if (isElementFocused) {
      return `${baseClassName} element-orange-bg`;
    } else if (isFocused) {
      return `${baseClassName} orange-bg`;
    } else {
      return baseClassName;
    }
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <div className={getClassName(isSelectFocused, "search-catlog-wrapper")}>
        <div className="search-catlog">
          <div className="search-catlog-display">
            <span>{getCatlog(catlogValue).title}</span>
            <FontAwesomeIcon
              icon={faSortDown}
              style={{ alignSelf: "flex-start" }}
            />
          </div>
          <select
            className="search-catlog-select"
            value={catlogValue}
            onChange={(e) => {
              searchField.current.focus();
              seCatlogValue(e.currentTarget.value);
            }}
            onFocus={() => setSelectFocus(true)}
            onBlur={() => setSelectFocus(false)}
          >
            {catlogs.map((catlog) => (
              <option key={catlog.id} value={catlog.id}>
                {catlog.title}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={getClassName(false, "search-field-wrapper")}>
        <div className="search-field">
          <input
            type="text"
            value={fieldValue}
            onChange={(e) => setFieldValue(e.currentTarget.value)}
            autoComplete="off"
            className="search-field-text"
            onFocus={() => setFocus(true)}
            onBlur={() => {
              setFocus(false);
            }}
            ref={searchField}
          />
        </div>
      </div>
      <div className={getClassName(isButtonFocused, "search-icon-wrapper")}>
        <div className="search-icon" style={{ position: "relative" }}>
          <input
            type="submit"
            value=""
            className="search-icon-input"
            onFocus={() => setButtonFocus(true)}
            onBlur={() => setButtonFocus(false)}
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon-img" />
        </div>
      </div>
    </form>
  );
};

export default Search;
