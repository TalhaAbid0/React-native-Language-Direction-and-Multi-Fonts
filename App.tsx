import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Images} from './src/assets/images';
import {useTranslation} from 'react-i18next';
import {i18n} from 'i18next';
import useTextAlignment from './src/hooks/useTextAlignment';
import useFont from './src/hooks/useFonts';
import {Font} from './src/assets/fonts';

const App = () => {
  const alignment = useTextAlignment();
  const font = useFont();
  const {t, i18n} = useTranslation();
  const styles = createStyles(alignment, font);
  const handleLanguageChange = async () => {
    const lang = i18n.language == 'ur' ? 'en' : 'ur';
    await i18n.changeLanguage(lang);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.parentContainer}>
        <View style={styles.container}>
          <Image source={Images.developerImage} style={styles.imageContainer} />

          {/* // === === === Text Values === === === */}
          <View style={styles.TextWrapContainer}>
            <Text style={styles.nameStyle}>{t('screen.home.name')}</Text>
            <Text style={styles.designationStyle}>
              {t('screen.home.designation')}
            </Text>
            <Text style={styles.stars}>{t('screen.home.Review')}</Text>
          </View>
          {/* // === === === Text Values === === === */}
        </View>

        <TouchableOpacity
          onPress={handleLanguageChange}
          style={styles.ButtonBackground}>
          <Text style={styles.buttonText}>{t('screen.languageButton')}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const createStyles = (
  alignment: ReturnType<typeof useTextAlignment>,
  font: Font['en'] | Font['ur'],
) =>
  StyleSheet.create({
    parentContainer: {
      flex: 1,
      backgroundColor: 'rgb(35, 35, 35)',
    },
    container: {
      backgroundColor: 'rgba(102, 112, 198, 0.96)',
      borderRadius: 10,
      overflow: 'hidden',
      marginHorizontal: 20,
      padding: 16,
      flexDirection: alignment?.flexDirection,
      alignItems: 'center',
    },
    imageContainer: {
      height: 100,
      width: 100,
      borderRadius: 20,
    },
    TextWrapContainer: {
      [alignment.paddingDirection]: 20,
    },
    nameStyle: {
      textAlign: alignment.textAlign,
      fontFamily: font.Bold,
      fontSize: 18,
      color: 'rgb(0, 11, 48)',
    },
    designationStyle: {
      textAlign: alignment.textAlign,
      fontFamily: font.SemiBold,
      color: 'rgba(21, 27, 46, 0.79)',
    },
    stars: {
      textAlign: alignment.textAlign,
      // display: 'none',
    },
    ButtonBackground: {
      height: 55,
      borderRadius: 12,
      borderCurve: 'continuous',
      backgroundColor: 'rgba(0, 1, 31, 0.85)',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginVertical: 12,
      marginHorizontal: 20,
      bottom: 30,
      width: '90%',
      position: 'absolute',
    },

    buttonText: {
      fontFamily: font.SemiBold,
      fontSize: 20,
      color: 'rgba(151, 174, 242, 0.84)',
    },
  });

export default App;
