import { useState } from "react";


export function Navbar() {

    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const [eventDropdownOpen, setEventDropdownOpen] = useState(false);

    const handleAboutDropdownToggle = (isOpen) => {
        setAboutDropdownOpen(isOpen);
    };

    const handleServicesDropdownToggle = (isOpen) => {
        setServicesDropdownOpen(isOpen);
    };

    const handleEventDropdownToggle = (isOpen) => {
        setEventDropdownOpen(isOpen);
    };

    return (
        <div className="flex z-10 font-futura  flex-row justify-between py-6 px-28 items-center">
            <div className="flex items-center justify-between gap-10 relative">
                <span className="hover:text-orange-700 cursor-pointer "   onMouseEnter={() => handleAboutDropdownToggle(true)}
                    onMouseLeave={() => handleAboutDropdownToggle(false)}>ABOUT</span>
                {aboutDropdownOpen && (
                    <div className="z-10 absolute top-full -left-4  bg-white bg-opacity-80 text-sm w-48 p-4 rounded-xl "   onMouseEnter={() => handleAboutDropdownToggle(true)}
                    onMouseLeave={() => handleAboutDropdownToggle(false)}>
                        <span className="block hover:text-orange-700 cursor-pointer font-semibold text-gray-700  p-1">ABOUT 24 CARROTS</span>
                        <span className="block hover:text-orange-700 cursor-pointer font-semibold text-gray-700 p-1">TEAM</span>
                        <span className="block hover:text-orange-700 cursor-pointer font-semibold text-gray-700 p-1">AWARDS & PRESS</span>
                        <span className="block hover:text-orange-700 cursor-pointer font-semibold text-gray-700 p-1">BLOG</span>
                    </div>
                )}
                <span className="hover:text-orange-700 cursor-pointer " onMouseEnter={() => handleServicesDropdownToggle(true)}
                    onMouseLeave={() => handleServicesDropdownToggle(false)}>SERVICES</span>
                {servicesDropdownOpen && (
                    <div className="z-10 absolute top-full left-[70px]  bg-white bg-opacity-80 text-sm w-48 p-4 opa rounded-xl " onMouseEnter={() => handleServicesDropdownToggle(true)}
                    onMouseLeave={() => handleServicesDropdownToggle(false)}>
                        <span className="block hover:text-orange-700 cursor-pointer font-semibold text-gray-700  p-1">GOURMET


                        </span>
                        <span className="block hover:text-orange-700 cursor-pointer font-semibold text-gray-700 p-1">CATERING</span>
                        <span className="block hover:text-orange-700 cursor-pointer font-semibold text-gray-700 p-1">BAR SERVICE</span>
                        <span className="block hover:text-orange-700 cursor-pointer font-semibold text-gray-700 p-1">STAFFING</span>
                        <span className="block hover:text-orange-700 cursor-pointer font-semibold text-gray-700 p-1">PRODUCTION</span>
                    </div>
                )}
                <span className="hover:text-orange-700 cursor-pointer "   onMouseEnter={() => handleEventDropdownToggle(true)}
                    onMouseLeave={() => handleEventDropdownToggle(false)}>EVENT</span>
                {eventDropdownOpen && (
                    <div className="z-10 absolute top-full left-[190px]  bg-white bg-opacity-80 text-sm w-48 p-4 opa rounded-xl "   onMouseEnter={() => handleEventDropdownToggle(true)}
                    onMouseLeave={() => handleEventDropdownToggle(false)}>
                        <span className="block hover:text-orange-700 cursor-pointer font-semibold text-gray-700  p-1">WEDDINGS
                        </span>
                        <span className="block hover:text-orange-700 cursor-pointer font-semibold text-gray-700 p-1">CORPORATE</span>
                        <span className="block hover:text-orange-700 cursor-pointer font-semibold text-gray-700 p-1">SOCIAL</span>
                        <span className="block hover:text-orange-700 cursor-pointer font-semibold text-gray-700 p-1">GALLERY</span>
                    </div>
                )}
            </div>

            <div className="flex items-center flex-col cursor-pointer">
                <span className="text-4xl font-semibold">24 CARROTS</span>
                <span className="text-gray-400">CATERING & EVENTS</span>
            </div>

            <div className="flex items-center justify-between gap-10">
                <span className="hover:text-orange-700 cursor-pointer ">VENUES</span>
                <span className="hover:text-orange-700 cursor-pointer ">CAREERS</span>
                <button className="px-4 py-2 hover:bg-orange-500 text-white  bg-orange-700 rounded-3xl">GET IN TOUCH</button>
            </div>
        </div>
    )
}