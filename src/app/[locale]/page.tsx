import About from "@/components/about/About";
import Advantages from "@/components/advantages/Advantages";
import Countries from "@/components/countries/Countries";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import { useTranslations } from "next-intl";
// import i18next from "i18next";
// import { I18nextProvider } from "react-i18next";
// import i18n from "@/lang/i18n";

export default function Home() {
    const t = useTranslations();
    // console.log(t("Turlar"));

    return (
        <div>
            <Hero />
            <Countries />
            <About />
            <Advantages />
            <Footer />
        </div>
    );
}
