import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

type Themes = 'light' | 'dark';

export const ToggleThemeMode = () => {
  const [theme, setTheme] = useState<Themes>(() => {
    const storedTheme = localStorage.getItem('theme') as Themes | null;
    return storedTheme || 'dark';
  });

  const handleToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.querySelector('html')?.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="flex items-center">
      <label className="swap swap-rotate items-center justify-end">
        <input
          type="checkbox"
          className="theme-controller"
          value="synthwave"
          onClick={handleToggleTheme}
        />

        <Sun className="swap-off w-8 h-8" />

        <Moon className="swap-on w-6 h-6" />
      </label>
    </div>
  );
};
