// import createMiddleware from "next-intl/middleware";

// export default createMiddleware({
//     // A list of all locales that are supported
//     locales: ["uz", "en", "ru"],

//     // Used when no locale matches
//     defaultLocale: "uz",
// });

// export const config = {
//     // Match only internationalized pathnames
//     matcher: ["/", "/(uz|en|ru)/:path*"],
// };

import createMiddleware from "next-intl/middleware";
import { localePrefix, defaultLocale, locales, pathnames } from "./config";

export default createMiddleware({
    defaultLocale,
    locales,
    localePrefix,
    pathnames,
});

export const config = {
    matcher: [
        // Enable a redirect to a matching locale at the root
        "/",

        // Set a cookie to remember the previous locale for
        // all requests that have a locale prefix
        "/(uz|en|ru)/:path*",

        // Enable redirects that add missing locales
        // (e.g. `/pathnames` -> `/en/pathnames`)
        "/((?!_next|_vercel|.*\\..*).*)",
    ],
};
