import { useTranslation } from 'react-i18next';

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <section className="h-[calc(100%-3.5rem)] bg-bg-secondary text-fg-primary">
      <h2>{t('translation:main.intro.title')}</h2>
      <p>{t('translation:main.intro.description')}</p>
    </section>
  );
};
