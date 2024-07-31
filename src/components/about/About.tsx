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
                        <Image src={aboutImg} alt="about img" />
                        <div className="about__info">
                            <p className="about__left">{t("about.desc1")}</p>
                            <p className="about__left">{t("about.desc2")}</p>
                            <p className="about__left">{t("about.desc3")}</p>
                        </div>
                        {/* <div className="about__right"> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
