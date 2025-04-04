import { Link } from 'react-router-dom';
import { LanguageSelect } from './LanguageSelect';
import { ThemeToggle } from './ThemeToggle';
import logo from '@/assets/img/ACJ.png';
import { Menu01 } from '@untitled-ui/icons-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const Navbar = () => {
  const renderMobileMenu = () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button type="button" className="cursor-pointer text-sm">
            <Menu01 onClick={renderMobileMenu} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-fit">
          <DropdownMenuItem>
            <Link to="/projects" className="text-sm">
              My projects
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/about" className="text-sm">
              About me
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/cats" className="text-sm">
              My cats
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/personal-projects" className="text-sm">
              Personal projects
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="justify-between">
            <LanguageSelect />
            <ThemeToggle />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };
  return (
    <nav className="h-16 w-full p-4 flex items-center justify-between bg-transparent text-fg-primary shadow-md">
      <ul className="flex items-center gap-4">
        <li>
          <Link to="/">
            <img src={logo} alt="Logo" className="size-10" />
          </Link>
        </li>
        <li className="hidden sm:block">
          <Link to="/projects" className="text-sm">
            My projects
          </Link>
        </li>
        <li className="hidden sm:block">
          <Link to="/about" className="text-sm">
            About me
          </Link>
        </li>
        <li className="hidden sm:block">
          <Link to="/cats" className="text-sm">
            My cats
          </Link>
        </li>
        <li className="hidden sm:block">
          <Link to="/personal-projects" className="text-sm">
            Personal projects
          </Link>
        </li>
      </ul>
      <ul className="hidden sm:flex items-center gap-4">
        <li>
          <LanguageSelect />
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>

      <div className="sm:hidden">{renderMobileMenu()}</div>
    </nav>
  );
};
