"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FC, use, useEffect, useState } from "react";
import logo from "@/assets/images/logo.svg";
import "./header.scss";
import { useTranslations } from "next-intl";
import LocalSwicher from "../local-swicher/LocalSwicher";
import { IoClose } from "react-icons/io5";
import { CiBarcode, CiBurger } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";

const Header: FC = () => {
    const [show, setShow] = useState(false);
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
                    <ul className={`header__list ${show ? "show" : ""}`}>
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
                        <IoClose
                            className="header__close"
                            onClick={() => setShow(false)}
                        />
                    </ul>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                        }}
                    >
                        <LocalSwicher />

                        <FaBars
                            className="header__bar"
                            onClick={() => setShow(true)}
                        />
                    </div>
                </div>
            </div>
            {show ? (
                <div
                    className="header__outlet"
                    onClick={() => setShow(false)}
                ></div>
            ) : (
                <></>
            )}
        </header>
    );
};

export default Header;
