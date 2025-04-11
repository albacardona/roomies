import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import { ThemeProvider } from './context/theme-context.tsx';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <ThemeProvider>
      <App />
    </ThemeProvider>,
  );
}
