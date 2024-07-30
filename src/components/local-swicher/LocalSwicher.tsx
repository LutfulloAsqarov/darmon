"use client";

import { useRouter, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import len from "@/assets/images/len.svg";
import uz from "@/assets/images/uz.svg";
import Image from "next/image";

const LocalSwitcher: React.FC = () => {
    const router = useRouter();
    const path = usePathname();
    let l: string | null = "uz";
    if (typeof window !== "undefined") {
        l = localStorage.getItem("lang");
    }

    const [lang, setLang] = useState<null | string>(l);

    useEffect(() => {
        localStorage.setItem("lang", lang || "uz");
        const pathname = path.split("/").slice(2).join("/");
        router.replace(`/${lang}/${pathname}`);
    }, [lang, path, router]);

    return (
        <div className="header__len">
            <select
                value={lang || "uz"}
                onChange={(e) => setLang(e.target.value)}
            >
                <option value="uz">UZ</option>
                <option value="en">EN</option>
                <option value="ru">RU</option>
            </select>
            <Image src={len} alt="img" width={24} height={24} />
        </div>
    );
};

export default LocalSwitcher;
