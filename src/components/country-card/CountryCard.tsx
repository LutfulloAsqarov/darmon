// components/country-card/CountryCard.tsx
import React from "react";
import "./countryCard.scss";

// CountryCardProps interfeysi
interface CountryCardProps {
    children: React.ReactNode;
}

const CountryCard: React.FC<CountryCardProps> = ({ children }) => {
    return <div>{children}</div>;
};

export default CountryCard;
