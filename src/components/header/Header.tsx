"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import logo from "@/assets/images/logo.svg";
import "./header.scss";
import { useTranslations } from "next-intl";
import LocalSwicher from "../local-swicher/LocalSwicher";

const Header: FC = () => {
    const t = useTranslations("home");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header id="header" className={isScrolled ? "scrolled" : ""}>
            <div className="container">
                <div className="header">
                    <div className="header__logo">
                        <Link href={"/"}>
                            <Image
                                src={logo}
                                alt="logo"
                                width={168}
                                height={53}
                                priority
                            />
                        </Link>
                    </div>
                    <ul className="header__list">
                        <li className="header__list__item">
                            <Link href={"#travel"}>{t("Turlar")}</Link>
                        </li>
                        <li className="header__list__item">
                            <Link href={"#about"}>{t("Biz haqimizda")}</Link>
                        </li>
                        <li className="header__list__item">
                            <Link href={"#advantages"}>
                                {t("Bizning Afzalliklarimiz")}
                            </Link>
                        </li>
                        <li className="header__list__item">
                            <Link href={"#footer"}>{t("Aloqa")}</Link>
                        </li>
                    </ul>
                    <LocalSwicher />
                </div>
            </div>
        </header>
    );
};

export default Header;
