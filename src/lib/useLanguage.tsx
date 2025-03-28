import i18n from '@/i18n';
import { useEffect, useState } from 'react';

export const useLanguage = () => {
  const [userLanguage, setUserLanguage] = useState<string>('');

  useEffect(() => {
    const navigatorLanguage = navigator.language.split('-')[0];
    if (!userLanguage) {
      setUserLanguage(navigatorLanguage);
    }
    i18n.changeLanguage(userLanguage);
  }, [userLanguage]);

  const handleChangeLanguage = (language: string) => {
    setUserLanguage(language);
  };

  return { userLanguage, onChangeLanguage: handleChangeLanguage };
};
