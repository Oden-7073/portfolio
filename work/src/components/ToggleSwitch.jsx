import { useState, useEffect } from "react";
import '../styles/style.scss';

function ToggleSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedMode);
    document.body.classList.toggle("dark-mode", savedMode);
  }, []);

  const handleToggle = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    document.body.classList.toggle("dark-mode", newMode);
  };

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        id="darkModeToggle"
        checked={isDarkMode}
        onChange={handleToggle}
      />
      <label htmlFor="darkModeToggle" className="slider"></label>
    </div>
  );
}

export default ToggleSwitch;
