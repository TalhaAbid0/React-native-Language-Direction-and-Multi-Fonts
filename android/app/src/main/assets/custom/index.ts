interface FontFamily {
  Regular: string;
  Medium: string;
  Bold: string;
  SemiBold: string;
}

export interface Font {
  en: FontFamily;
  ur: FontFamily;
}

export const Fonts: Font = {
  en: {
    Regular: 'WinkySans-Regular',
    Medium: 'WinkySans-Medium',
    Bold: 'WinkySans-Bold',
    SemiBold: 'WinkySans-SemiBold',
  },
  ur: {
    Regular: 'NotoNastaliqUrdu-Regular',
    Medium: 'NotoNastaliqUrdu-Medium',
    Bold: 'NotoNastaliqUrdu-Bold',
    SemiBold: 'NotoNastaliqUrdu-SemiBold',
  },
};
