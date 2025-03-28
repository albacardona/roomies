import { useTranslation } from 'react-i18next';
import { Navbar } from './app/components/Navbar';

export const App = () => {
  const { t } = useTranslation();

  return (
    <div className="h-screen bg-bg-primary text-fg-primary">
      <Navbar />
      <h2>{t('translation:main.intro.title')}</h2>
      <p>{t('translation:main.intro.description')}</p>
    </div>
  );
};
