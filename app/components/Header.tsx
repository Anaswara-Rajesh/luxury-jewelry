"use client";
import { useState } from "react";
import { CiLocationOn, CiSearch, CiHeart } from "react-icons/ci";
import { MdLunchDining, MdPerson } from "react-icons/md";
import LogoImage from "./LogoImage";
import { Tooltip } from "react-tooltip";

interface NavIconProps {
    href: string;
    tooltip: string;
    icon: any;
    isActive: boolean;
}

function NavIcon({ href, tooltip, icon: Icon, isActive }: NavIconProps) {
    return (
        <a
            href={href}
            data-tooltip-id="tooltip"
            data-tooltip-content={tooltip}
            className={`${isActive ? "text-black" : "text-white"}`}
        >
            <Icon size={26} />
        </a>
    );
}

export default function Header() {
    const [activeNavItem, setActiveNavItem] = useState("");

    const handleMouseEnter = (item: string) => setActiveNavItem(item);
    const handleMouseLeave = () => setActiveNavItem("");

    const isActive = Boolean(activeNavItem);

    return (
        <>
            <header
                className={` absolute top-0 left-0  w-full py-4 z-20 transition-all duration-300 ${isActive ? "bg-white" : "bg-transparent"}`}
            >
                <div className="px-6 mx-auto flex items-center justify-between">
                    {/* Left Section */}
                    <div className="flex items-center space-x-6">
                        <NavIcon href="/store-locator" tooltip="Store Locator" icon={CiLocationOn} isActive={isActive} />
                        <NavIcon href="/contact" tooltip="Contact Us" icon={MdLunchDining} isActive={isActive} />
                    </div>

                    {/* Middle Section (Logo) */}
                    <LogoImage color={isActive ? "black" : "white"} />

                    {/* Right Section */}
                    <div className="flex items-center space-x-6">
                        <div data-tooltip-id="tooltip" data-tooltip-content="Search">
                            <CiSearch size={26} color={isActive ? "black" : "white"} />
                        </div>
                        <div className="flex items-center space-x-4">
                            <NavIcon href="/my-account" tooltip="My Account" icon={MdPerson} isActive={isActive} />
                            <NavIcon href="/my-wishlist" tooltip="My Wishlist" icon={CiHeart} isActive={isActive} />
                        </div>
                    </div>
                </div>

                {/* Navbar below Header */}
                <nav className={`text-sm mt-[2.5vh] tracking-widest relative transition-all duration-300 ${isActive ? "text-black" : "text-white"}`}>
                    <div className="px-6 mx-auto">
                        <div className="flex items-center justify-center py-4">
                            {/* Main Navbar Items */}
                            <ul className="flex space-x-8">
                                {["HIGH JEWELLERY", "JEWELLERY", "WATCHES", "BRIDAL", "SILVER", "GIFTS", "THE MAISON", "NEWS", "RETROSPECTIVES"].map((item) => (
                                    <li
                                        key={item}
                                        className="relative group"
                                        onMouseEnter={() => handleMouseEnter(item)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <a
                                            href="#"
                                            className={`font-light hover:text-primary-500 ${activeNavItem === item ? "text-primary-500" : ""}`}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>

                <Tooltip id="tooltip" place="top" />
            </header>
        </>
    );
}
