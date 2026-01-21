import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import zhTW from "./locales/zh-TW.json";
import ja from "./locales/ja.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      "zh-TW": { translation: zhTW },
      ja: { translation: ja },
    },
    lng: "ja", // 預設語言
    fallbackLng: "zh-Tw",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
