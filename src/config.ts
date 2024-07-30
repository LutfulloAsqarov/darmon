import { Pathnames, LocalePrefix } from "next-intl/routing";

export const defaultLocale = "uz" as const;
export const locales = ["uz", "en", "ru"] as const;

export const pathnames: Pathnames<typeof locales> = {
    "/": "/",
    "/pathnames": {
        uz: "/pathnames",
        en: "/pathnames",
        ru: "/pathnames",
    },
};

export const localePrefix: LocalePrefix<typeof locales> = "always";

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : `http://localhost:${port}`;
