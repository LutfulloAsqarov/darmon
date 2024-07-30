interface I18nConfig {
    locales: string[];
    defaultLocale: string;
    prefixDefault: boolean;
}

const i18nConfig: I18nConfig = {
    locales: ["uz", "en", "ru"],
    defaultLocale: "uz",
    prefixDefault: true,
};

module.exports = i18nConfig;

// export default i18nConfig;
