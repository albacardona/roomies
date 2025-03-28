import { languageSelection } from '@/assets/languageSelection';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/lib/useLanguage';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSelect = () => {
  const { t } = useTranslation();
  const { userLanguage, onChangeLanguage } = useLanguage();

  const filteredLanguageOptions = useMemo(
    () => languageSelection.filter((language) => language.value !== userLanguage),
    [userLanguage],
  );

  const currentLanguage = useMemo(
    () => languageSelection.filter((language) => language.value === userLanguage),
    [userLanguage],
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button type="button" className="cursor-pointer text-sm">
          {currentLanguage[0]?.icon} {currentLanguage[0]?.abbreviation}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit">
        {filteredLanguageOptions.map((language) => (
          <DropdownMenuItem key={language.id} onClick={() => onChangeLanguage(language.value)}>
            <div className="flex items-center gap-2">
              <span>{language.icon}</span>
              <span>{t(language.translation)}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
