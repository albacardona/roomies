import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './app/pages/HomePage';
import { ThemeToggle } from './app/components/ThemeToggle';
import { Cleaning } from './app/pages/Cleaning';
import { Tasks } from './app/pages/Tasks';
import { Shopping } from './app/pages/Shopping';
import { Plans } from './app/pages/Plans';

export const App = () => {
  return (
    <BrowserRouter>
      <main className="h-screen bg-bg-primary text-fg-primary">
        <div className="absolute top-0 right-0 flex justify-end self-start p-6">
          <ThemeToggle />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/limpieza" element={<Cleaning />} />
          <Route path="/tareas" element={<Tasks />} />
          <Route path="/compras" element={<Shopping />} />
          <Route path="/planes" element={<Plans />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
