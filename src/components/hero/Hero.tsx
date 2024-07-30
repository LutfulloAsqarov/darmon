"use client";
import React, { FC } from "react";
import "./hero.scss";
import Image from "next/image";
import heroImg from "@/assets/images/hero/hero-img.svg";
import heroImg1 from "@/assets/images/hero/hero-img1.svg";
import { useTranslations } from "next-intl";
import Order from "../order/Order";

const Hero: FC = () => {
    const t = useTranslations("button");
    const h = useTranslations("home");
    return (
        <div id="hero">
            <div className="container">
                <div className="hero">
                    <div className="hero__left">
                        <h1>{h("hero")}</h1>
                        {/* <button>{t("btn")}</button> */}
                        <Order />
                    </div>
                    <div className="hero__right">
                        <Image src={heroImg1} alt="hero-img" />
                        <Image src={heroImg} alt="hero-img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
