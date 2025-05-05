# 🌐 Multilingual Font & Layout Direction Support in React Native

This project implements RTL (Right-To-Left) and LTR (Left-To-Right) layout support in a React Native application, including:

- ✅ Language switching (English ↔ Urdu)
- ✅ Direction-aware styling (text alignment, flex direction, padding)
- ✅ Custom font family usage per language

---

## 🧠 Features Overview

### ✅ Language Switching

We use `react-i18next` to allow dynamic language switching between:

- **English (LTR)**
- **Urdu (RTL)**

```tsx
const handleLanguageChange = async () => {
  const lang = i18n.language === 'ur' ? 'en' : 'ur';
  await i18n.changeLanguage(lang);
};
```
```
src/
├── hooks/
│   └── useTextAlignment.ts
│   └── useFonts.ts
├── assets/
│   └── fonts/
│       └── (Font files for en & ur)
└── App.tsx
```

# 🧱 Reusable createStyles Function

### ✅ All Styles Are Reuseable


#  🎯 After Clone: Run Flowing Commands one By One

```
    yarn

    cd ios/ && pod install

    npx react-native-asset

    yarn run android/

    yarn run ios/
```


#  🙌 Contributions are welcomed!
