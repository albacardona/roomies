import { useTheme } from '@/context/theme-context';
import { Moon01, Sun } from '@untitled-ui/icons-react';
import { Switch } from './ui/switch';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme}>
      {theme === 'dark' ? <Sun className="size-3" /> : <Moon01 className="size-3" />}
    </Switch>
  );
};
