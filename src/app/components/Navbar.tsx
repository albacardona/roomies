import { Link } from 'react-router-dom';
import { LanguageSelect } from './LanguageSelect';
import { ThemeToggle } from './ThemeToggle';
import logo from '@/assets/img/ACJ.png';

export const Navbar = () => {
  return (
    <nav className="h-14 w-full p-4 flex items-center justify-between bg-transparent text-fg-primary">
      <ul className="flex items-center gap-4">
        <li>
          <Link to="/">
            <img src={logo} alt="Logo" className="size-10" />
          </Link>
        </li>
        <li>
          <Link to="/projects" className="text-sm">
            My projects
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-sm">
            About me
          </Link>
        </li>
        <li>
          <Link to="/cats" className="text-sm">
            My cats
          </Link>
        </li>
        <li>
          <Link to="/personal-projects" className="text-sm">
            Personal projects
          </Link>
        </li>
      </ul>
      <ul className="flex items-center gap-4">
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
