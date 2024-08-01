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

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const Countries: FC = () => {
    const t = useTranslations("home");
    return (
        <section id="travel">
            <div className="container">
                <div className="travel">
                    <h2>{t("tours.title")}</h2>
                    <div className="flex justify-center items-center">
                        <Carousel
                            opts={{
                                align: "start",
                            }}
                            className="carousel w-[90%] "
                        >
                            <CarouselContent className="">
                                <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                                    <div className="max-w-[300px] m-auto">
                                        <Card className="border-0 rounded-3xl ">
                                            <CardContent className="bg-white p-0 rounded-2xl">
                                                <div className="carousel-item">
                                                    <Link href={`/turk`}>
                                                        <Image
                                                            src={card1}
                                                            alt="Istanbul"
                                                            width={100}
                                                            height={100}
                                                        />
                                                    </Link>
                                                    <div className="carousel-item__info">
                                                        <h3>
                                                            {t(
                                                                "tours.country1"
                                                            )}
                                                        </h3>
                                                        <p>
                                                            {t("tours.city1")}
                                                        </p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="md:basis-1/3 lg:basis-1/4 h-auto">
                                    <div className=" max-w-[300px] m-auto">
                                        <Card className="border-0 rounded-3xl">
                                            <CardContent className="bg-white p-0 rounded-2xl">
                                                <div className="carousel-item">
                                                    <Link href={"/egypt"}>
                                                        <Image
                                                            src={card2}
                                                            alt="Cairo"
                                                        />
                                                    </Link>
                                                    <div className="carousel-item__info">
                                                        <h3>
                                                            {t(
                                                                "tours.country2"
                                                            )}
                                                        </h3>
                                                        <p>
                                                            {t("tours.city2")}
                                                        </p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="md:basis-1/3 lg:basis-1/4 h-auto">
                                    <div className="max-w-[300px] m-auto">
                                        <Card className="border-0 rounded-3xl">
                                            <CardContent className="bg-white p-0 rounded-2xl">
                                                <div className="carousel-item">
                                                    <Link href={"/dubai"}>
                                                        <Image
                                                            src={card3}
                                                            alt="Dubai"
                                                        />
                                                    </Link>
                                                    <div className="carousel-item__info">
                                                        <h3>
                                                            {t(
                                                                "tours.country3"
                                                            )}
                                                        </h3>
                                                        <p>
                                                            {t(
                                                                "tours.country3"
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="md:basis-1/3 lg:basis-1/4 h-auto ">
                                    <div className="max-w-[300px] m-auto">
                                        <Card className="border-0 rounded-3xl">
                                            <CardContent className="bg-white p-0 rounded-2xl">
                                                <div className="carousel-item">
                                                    <Link href={"/europe"}>
                                                        <Image
                                                            src={card4}
                                                            alt="Paris"
                                                        />
                                                    </Link>
                                                    <div className="carousel-item__info">
                                                        <h3>
                                                            {t(
                                                                "tours.country4"
                                                            )}
                                                        </h3>
                                                        <p>
                                                            {t(
                                                                "tours.country4"
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className="md:basis-1/2 lg:basis-1/4 h-auto">
                                    <div className="max-w-[300px] m-auto">
                                        <Card className="border-0 rounded-3xl">
                                            <CardContent className="bg-white p-0 rounded-2xl">
                                                <div className="carousel-item">
                                                    <Link href={"thailand"}>
                                                        <Image
                                                            src={card1}
                                                            alt="Tailand"
                                                        />
                                                    </Link>
                                                    <div className="carousel-item__info">
                                                        <h3>
                                                            {t(
                                                                "tours.country5"
                                                            )}
                                                        </h3>
                                                        <p>
                                                            {t("tours.city5")}
                                                        </p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
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

        // <div className="container">
        //     <h1 className="text-red-600 text-end">hello</h1>
        // </div>
    );
};

export default Countries;
