import { useTranslation } from 'react-i18next';
import { Container } from '../components/Container';

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <h2>{t('translation:homepage.intro.title')}</h2>
      <p>{t('translation:homepage.intro.description')}</p>
    </Container>
  );
};
