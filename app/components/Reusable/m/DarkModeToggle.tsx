// components/DarkModeToggle.tsx
import { useTheme } from "next-themes";

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.checked ? "dark" : "light");
  };

  return (
    <div className="darkmode">
      <label className="switch">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={handleCheckboxChange}
        />
        <span className="slider_header"></span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
