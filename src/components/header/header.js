import "./header.scss";

import React, { useEffect, useState, useCallback } from "react";

let headerConfig = {
  title: "Odam Lviran",
  controls: [
    {
      title: "Home",
      isActive: true
    },
    {
      title: "About",
      isActive: false
    },
    {
      title: "Contact",
      isActive: false
    }
  ]
};

export default function Header() {
  const [controls, setConfig] = useState(headerConfig.controls);

  function controlClick(index) {
    controls.forEach((control) => {
      control.isActive = false;
    });

    controls[index].isActive = true;
    setConfig([...controls]);
  }

  return (
    <div>
      <div>
        <div className="header-title">{headerConfig.title}</div>
        <div className="d-flex justify-content-center">
          {controls.map((control, key) => (
            <button
              onClick={() => controlClick(key)}
              className={`mx-2 border-0 bg-transparent ${
                control.isActive ? "header-control-active" : ""
              }
              `}
            >
              {control.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
