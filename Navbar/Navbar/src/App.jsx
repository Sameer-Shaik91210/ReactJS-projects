import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const App = () => {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");
  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  useEffect(
    () => {
      localStorage.setItem("theme", theme);
      setTheme(localStorage.getItem("theme"));
    },
    [],
    [theme]
  );
  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <p>{theme} mode</p>
    </div>
  );
};

export default App;
