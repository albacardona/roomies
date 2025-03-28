import { LanguageSelect } from './LanguageSelect';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {
  return (
    <nav className="p-4 bg-transparent text-fg-primary">
      <ul className="flex justify-end gap-4">
        <li>
          <LanguageSelect />
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
};
