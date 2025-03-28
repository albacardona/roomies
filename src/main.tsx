import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import { ThemeProvider } from './context/theme-context.tsx';
import i18n from './i18n.ts';
import { I18nextProvider } from 'react-i18next';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </ThemeProvider>,
  );
}
