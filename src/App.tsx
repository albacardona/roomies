import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './app/pages/HomePage';
import { ThemeToggle } from './app/components/ThemeToggle';
import { Cleaning } from './app/pages/Cleaning';
import { Tasks } from './app/pages/Tasks';
import { Shopping } from './app/pages/Shopping';
import { Plans } from './app/pages/Plans';
import { useUser } from './context/user-context';

export const App = () => {
  const { selectedUser } = useUser();

  return (
    <BrowserRouter>
      <main className="h-screen bg-bg-primary text-fg-primary">
        <div className="absolute top-0 right-0 flex justify-end self-start p-6">
          <ThemeToggle />
        </div>
        {selectedUser ? (
          <Routes>
            <Route path="/" element={<Navigate to="/limpieza" />} />
            <Route path="/limpieza" element={<Cleaning />} />
            <Route path="/tareas" element={<Tasks />} />
            <Route path="/compras" element={<Shopping />} />
            <Route path="/planes" element={<Plans />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        )}
      </main>
    </BrowserRouter>
  );
};
