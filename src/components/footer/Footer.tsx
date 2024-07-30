import { useTranslations } from "next-intl";
import React from "react";
import footerImg from "@/assets/images/footer-img.png";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import "./footer.scss";
import Link from "next/link";

const Footer = () => {
    const t = useTranslations("home");
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer">
                    <div className="footer__contact">
                        <p>{t("footer.contact")}</p>
                        <div className="footer__input">
                            <input type="text" placeholder="Phone" />
                            <button>{t("footer.button")}</button>
                        </div>
                    </div>
                    <div className="footer__mid">
                        <div className="footer__mid__left">
                            <div className="footer__mid__phone">
                                <FaPhone />{" "}
                                <Link href={"tel:+998 77 273 00 17"}>
                                    +998 77 273 00 17
                                </Link>
                            </div>
                            <div className="footer__mid__medias">
                                <span>
                                    <FaFacebookF />
                                </span>
                                <span>
                                    <FaInstagram />
                                </span>
                                <span>
                                    <FaTelegramPlane />
                                </span>
                                <span>
                                    <FaTwitter />
                                </span>
                            </div>
                        </div>
                        <div className="footer__mid__right">
                            Toshkent, O'zbekiston Chilonzor 18/19 uy
                        </div>
                    </div>
                    <p className="footer__bot">DarmonTravel</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
