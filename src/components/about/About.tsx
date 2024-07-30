import React from "react";
import aboutImg from "@/assets/images/about/about.svg";
import Image from "next/image";
import "./about.scss";
import { useTranslations } from "next-intl";
const About = () => {
    const t = useTranslations("home");
    return (
        <section id="about">
            <div className="container">
                <div className="about">
                    <h2>{t("about.title")}</h2>
                    <div className="about__wrapper">
                        <p className="about__left">{t("about.desc")}</p>
                        <div className="about__right">
                            <Image src={aboutImg} alt="about img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
