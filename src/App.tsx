import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './app/pages/HomePage';

export const App = () => {
  return (
    <BrowserRouter>
      <main className="h-screen bg-bg-primary text-fg-primary overflow-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
