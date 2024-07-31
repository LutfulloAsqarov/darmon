"use client";
import React, { useState } from "react";
import "./order.scss";
import { useTranslations } from "next-intl";

const Order = () => {
    const [order, setOrder] = useState(false);

    const t = useTranslations("button");

    return (
        <div>
            <button className="order__btn" onClick={() => setOrder(true)}>
                {t("btn")}
            </button>
            {order ? (
                <>
                    <div
                        className="order__layout"
                        onClick={() => setOrder(false)}
                    ></div>
                    <div className="order__model">
                        <form>
                            <h3>
                                Iltimos, operatorlarimiz siz bilan bog'lanishi
                                uchun aloqa ma'lumotlaringizni qoldiring.
                            </h3>
                            <input type="text" placeholder="Ismingiz" />
                            <div>
                                <label htmlFor="phone">
                                    Sizning aloqa raqamingiz
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    placeholder="+998 xx xxx xx xx"
                                />
                            </div>
                            <button className="order__btn">{t("btn")}</button>
                            <p>
                                Ma’lumotlarni to’ldirib “Buyurtma berish”
                                tugmasini bosish orqali ma’lumotlar yuboriladi
                                va operator siz bilan tez orqada bog’lanadi.
                            </p>
                        </form>
                    </div>
                </>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Order;
