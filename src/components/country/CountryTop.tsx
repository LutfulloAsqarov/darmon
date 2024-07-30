// CountryTop.tsx
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import "./countryTop.scss";

interface CountryTopProps {
    children: React.ReactNode;
}

const CountryTop: React.FC<CountryTopProps> = ({ children }) => {
    return <div>{children}</div>;
};

export default CountryTop;
