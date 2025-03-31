import { useTranslation } from 'react-i18next';
import { Navbar } from './app/components/Navbar';
import { Card } from './app/components/Card';
import { Button } from './components/ui/button';

export const App = () => {
  const { t } = useTranslation();

  return (
    <main className="h-screen bg-bg-primary text-fg-primary">
      <Navbar />
      <h2>{t('translation:main.intro.title')}</h2>
      <p>{t('translation:main.intro.description')}</p>
      <Card title={t('translation:main.intro.card.title')}>
        <p>{t('translation:main.intro.card.description')}</p>
      </Card>
      <Button>hola</Button>
      <Button variant="secondary" size="sm">
        hola
      </Button>
      <Button variant="accent" size="lg">
        hola
      </Button>
    </main>
  );
};
