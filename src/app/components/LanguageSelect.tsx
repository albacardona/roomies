import { useLanguage } from '@/lib/useLanguage';

export const LanguageSelect = () => {
  const { onChangeLanguage } = useLanguage();

  return (
    <div>
      <button type="button" onClick={() => onChangeLanguage('en')}>
        English
      </button>
      <button type="button" onClick={() => onChangeLanguage('es')}>
        Español
      </button>
      <button type="button" onClick={() => onChangeLanguage('ca')}>
        Català
      </button>
      <button type="button" onClick={() => onChangeLanguage('fr')}>
        Français
      </button>
    </div>
  );
};
