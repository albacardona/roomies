import { useTranslation } from 'react-i18next';
import { ThemeToggle } from './app/components/ThemeToggle';
import { LanguageSelect } from './app/components/LanguageSelect';

export const App = () => {
  const { t } = useTranslation();

  return (
    <div className="h-screen bg-bg-primary text-fg-primary">
      <h2>{t('translation:main.intro.title')}</h2>
      <p>{t('translation:main.intro.description')}</p>
      <LanguageSelect />
      <ThemeToggle />
    </div>
  );
};
