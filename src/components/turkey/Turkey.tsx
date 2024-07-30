// "use client";
// import { NextPage } from "next";
import { useTranslations } from "next-intl";
import React, { FC } from "react";

const Turkey: FC = () => {
    const t = useTranslations("turkey");
    return (
        <div>
            <p>{t("Turkiya")}</p>
        </div>
    );
};

export default Turkey;
