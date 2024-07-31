import React from "react";
import advantage1 from "@/assets/images/adventages/adventage1.png";
import advantage2 from "@/assets/images/adventages/adventage2.png";
import advantage3 from "@/assets/images/adventages/adventage3.png";
import advantage4 from "@/assets/images/adventages/adventage4.png";
import advantage5 from "@/assets/images/adventages/adventage5.png";
import advantage6 from "@/assets/images/adventages/adventage6.png";
import cardBox from "@/assets/images/adventages/card-box.png";

import Image from "next/image";
import { useTranslations } from "next-intl";
import "./advantages.scss";

const Advantages = () => {
    const t = useTranslations("home");
    return (
        <div id="advantages">
            <div className="container">
                <div className="advantages">
                    <h2>{t("advantages.title")}</h2>
                    {/* <div className="advantages__cards">
                        <div className="advantages__card">
                            <div className="advantages__card-top">
                                <Image
                                    src={advantage1}
                                    alt="img"
                                    width={100}
                                    height={100}
                                />
                                <h3>{t("advantages.card1")}</h3>
                            </div>
                            <Image
                                src={cardBox}
                                alt="img"
                                width={100}
                                height={100}
                                className="advantages__card-bot"
                            />
                        </div>
                        <div className="advantages__card">
                            <div className="advantages__card-top">
                                <Image
                                    src={advantage2}
                                    alt="img"
                                    width={100}
                                    height={100}
                                />
                                <h3>{t("advantages.card2")}</h3>
                            </div>
                            <Image
                                src={cardBox}
                                alt="img"
                                width={100}
                                height={100}
                                className="advantages__card-bot"
                            />
                        </div>
                        <div className="advantages__card">
                            <div className="advantages__card-top">
                                <Image
                                    src={advantage3}
                                    alt="img"
                                    width={100}
                                    height={100}
                                />
                                <h3>{t("advantages.card3")}</h3>
                            </div>
                            <Image
                                src={cardBox}
                                alt="img"
                                width={100}
                                height={100}
                                className="advantages__card-bot"
                            />
                        </div>
                        <div className="advantages__card">
                            <div className="advantages__card-top">
                                <Image
                                    src={advantage4}
                                    alt="img"
                                    width={100}
                                    height={100}
                                />
                                <h3>{t("advantages.card4")}</h3>
                            </div>
                            <Image
                                src={cardBox}
                                alt="img"
                                width={100}
                                height={100}
                                className="advantages__card-bot"
                            />
                        </div>
                        <div className="advantages__card">
                            <div className="advantages__card-top">
                                <Image
                                    src={advantage5}
                                    alt="img"
                                    width={100}
                                    height={100}
                                />
                                <h3>{t("advantages.card5")}</h3>
                            </div>
                            <Image
                                src={cardBox}
                                alt="img"
                                width={100}
                                height={100}
                                className="advantages__card-bot"
                            />
                        </div>
                        <div className="advantages__card">
                            <div className="advantages__card-top">
                                <Image
                                    src={advantage6}
                                    alt="img"
                                    width={100}
                                    height={100}
                                />
                                <h3>{t("advantages.card6")}</h3>
                            </div>
                            <Image
                                src={cardBox}
                                alt="img"
                                width={100}
                                height={100}
                                className="advantages__card-bot"
                            />
                        </div>
                    </div> */}

                    <div className="card-container">
                        <div className="card">
                            <div className="card-content">
                                <Image
                                    src={advantage1}
                                    alt="img"
                                    width={100}
                                    height={100}
                                />
                                <h3>{t("advantages.card1")}</h3>
                            </div>
                            <div className="card-label">
                                <Image
                                    src={cardBox}
                                    alt="img"
                                    width={100}
                                    height={100}
                                    className="advantages__card-bot"
                                />
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-content">
                                <Image
                                    src={advantage2}
                                    alt="img"
                                    width={100}
                                    height={100}
                                />
                                <h3>{t("advantages.card2")}</h3>
                            </div>
                            <div className="card-label">
                                <Image
                                    src={cardBox}
                                    alt="img"
                                    width={100}
                                    height={100}
                                    className="advantages__card-bot"
                                />
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-content">
                                <Image
                                    src={advantage3}
                                    alt="img"
                                    width={100}
                                    height={100}
                                />
                                <h3>{t("advantages.card3")}</h3>
                            </div>
                            <div className="card-label">
                                <Image
                                    src={cardBox}
                                    alt="img"
                                    width={100}
                                    height={100}
                                    className="advantages__card-bot"
                                />
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-content">
                                <Image
                                    src={advantage4}
                                    alt="img"
                                    width={100}
                                    height={100}
                                />
                                <h3>{t("advantages.card4")}</h3>
                            </div>
                            <div className="card-label">
                                <Image
                                    src={cardBox}
                                    alt="img"
                                    width={100}
                                    height={100}
                                    className="advantages__card-bot"
                                />
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-content">
                                <Image
                                    src={advantage5}
                                    alt="img"
                                    width={100}
                                    height={100}
                                />
                                <h3>{t("advantages.card5")}</h3>
                            </div>
                            <div className="card-label">
                                <Image
                                    src={cardBox}
                                    alt="img"
                                    width={100}
                                    height={100}
                                    className="advantages__card-bot"
                                />
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-content">
                                <Image
                                    src={advantage6}
                                    alt="img"
                                    width={100}
                                    height={100}
                                />
                                <h3>{t("advantages.card6")}</h3>
                            </div>
                            <div className="card-label">
                                <Image
                                    src={cardBox}
                                    alt="img"
                                    width={100}
                                    height={100}
                                    className="advantages__card-bot"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantages;
