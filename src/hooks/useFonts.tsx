import {useTranslation} from 'react-i18next';
import {Fonts} from '../assets/fonts';

const useFont = () => {
  const {i18n} = useTranslation();
  const isUrdu = i18n.language === 'ur';

  return isUrdu ? Fonts.ur : Fonts.en;
};

export default useFont;
