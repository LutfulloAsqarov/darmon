"use client";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "./countries.scss";
import card1 from "@/assets/images/country/country1.svg";
import card2 from "@/assets/images/country/country2.svg";
import card3 from "@/assets/images/country/country3.svg";
import card4 from "@/assets/images/country/country4.svg";
import discount1 from "@/assets/images/country/discount1.svg";
import discount2 from "@/assets/images/country/discount2.svg";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Countries: FC = () => {
    const t = useTranslations("home");
    return (
        <section id="travel">
            <div className="container">
                <div className="travel">
                    <h2>{t("tours.title")}</h2>
                    <div className="carousel-container">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={50}
                            slidesPerView={4}
                            navigation
                            // pagination={{ clickable: true }}
                            breakpoints={{
                                1024: {
                                    slidesPerView: 4,
                                },
                                600: {
                                    slidesPerView: 2,
                                },
                                480: {
                                    slidesPerView: 1,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="carousel-item">
                                    <Link href={`/turk`}>
                                        <Image src={card1} alt="Istanbul" />
                                    </Link>
                                    <div className="carousel-item__info">
                                        <h3>{t("tours.country1")}</h3>
                                        <p>{t("tours.city1")}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="carousel-item">
                                    <Link href={"/egypt"}>
                                        <Image src={card2} alt="Cairo" />
                                    </Link>
                                    <div className="carousel-item__info">
                                        <h3>{t("tours.country2")}</h3>
                                        <p>{t("tours.city2")}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="carousel-item">
                                    <Link href={"/dubai"}>
                                        <Image src={card3} alt="Dubai" />
                                    </Link>
                                    <div className="carousel-item__info">
                                        <h3>{t("tours.country3")}</h3>
                                        <p>{t("tours.country3")}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="carousel-item">
                                    <Link href={"/europe"}>
                                        <Image src={card4} alt="Paris" />
                                    </Link>
                                    <div className="carousel-item__info">
                                        <h3>{t("tours.country4")}</h3>
                                        <p>{t("tours.country4")}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="carousel-item">
                                    <Link href={"thailand"}>
                                        <Image src={card1} alt="Tailand" />
                                    </Link>
                                    <div className="carousel-item__info">
                                        <h3>{t("tours.country5")}</h3>
                                        <p>{t("tours.city5")}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="travel__discount">
                        <p>
                            <span>15-Noyabrgacha</span> Yevropa uchun tur bron
                            qilsangich
                            <span> 10%</span> chegirmaga ega bo’ling
                        </p>
                        <div className="travel__discount__imgs">
                            <Image
                                src={discount1}
                                alt="discount"
                                width={200}
                                height={200}
                            />
                            <Image
                                src={discount2}
                                alt="discount"
                                width={200}
                                height={200}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Countries;
