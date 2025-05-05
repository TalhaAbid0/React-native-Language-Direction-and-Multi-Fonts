import {useTranslation} from 'react-i18next';
import {FlexStyle, TextStyle, ViewStyle} from 'react-native';

type TextAlignmentValues = {
  textAlign: TextStyle['textAlign'];
  alignSelf: ViewStyle['alignSelf'];
  flexDirection: FlexStyle['flexDirection'];
  paddingDirection: 'paddingStart' | 'paddingEnd';
};

const useTextAlignment = (): TextAlignmentValues => {
  const {i18n} = useTranslation();
  const isRTL = i18n.language === 'ur';

  return {
    textAlign: isRTL ? 'right' : 'left',
    alignSelf: isRTL ? 'flex-start' : 'flex-end',
    flexDirection: isRTL ? 'row-reverse' : 'row',
    paddingDirection: isRTL ? 'paddingEnd' : 'paddingStart',
  };
};

export default useTextAlignment;
