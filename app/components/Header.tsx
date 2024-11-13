
import Logo from "./Logo";
import { CiLocationOn } from "react-icons/ci";
import { MdLunchDining } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { MdPerson } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

export default function Header() {
    return (
        <header className="bg-white shadow-md py-4">
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Left Section */}
                <div className="flex items-center space-x-6">
                    <a href="/store-locator" className="text-gray-800 hover:text-black">
                        <CiLocationOn />
                    </a>
                    <a href="/contact" className="text-gray-800 hover:text-black">
                        <MdLunchDining />
                    </a>
                </div>

                {/* Middle Section (Logo) */}
                <Logo />

                {/* Right Section */}
                <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                        <CiSearch />
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="/my-account" className="text-gray-800 hover:text-black">
                            <MdPerson />
                        </a>
                        <a href="/my-wishlist" className="text-gray-800 hover:text-black">
                            <CiHeart />
                        </a>
                    </div>
                </div>

            </div>
        </header>
    );
}

