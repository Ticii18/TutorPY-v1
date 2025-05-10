import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from "react";

function ChangeButton() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme'); 
    if (savedTheme) {
      return savedTheme; 
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark'); 
    localStorage.setItem('theme', theme); 
  }, [theme]); 

  const handleChangeTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      className="rounded-md  bg-gray-100 px-3 py-1 text-sm font-medium text-teal-600 hover:text-teal-700 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
      onClick={handleChangeTheme}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-6 text-yellow-400" />
      ) : (
        <Moon className="w-4 h-6 text-gray-800" />
      )}
    </button>
  );
}

export default ChangeButton;
