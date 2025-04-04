import { Navbar } from './app/components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './app/pages/HomePage';
import { AboutMe } from './app/pages/AboutMe';
import { Projects } from './app/pages/Projects';
import { Cats } from './app/pages/Cats';
import { PersonalProjects } from './app/pages/PersonalProjects';

export const App = () => {
  return (
    <BrowserRouter>
      <main className="h-screen bg-bg-primary text-fg-primary overflow-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/personal-projects" element={<PersonalProjects />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
