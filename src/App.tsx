import './App.css';
import { ThemeToggle } from './components/ThemeToggle';

export const App = () => {
  return (
    <div className="h-screen bg-bg-primary text-fg-primary">
      <p>Alba</p>
      <ThemeToggle />
    </div>
  );
};
