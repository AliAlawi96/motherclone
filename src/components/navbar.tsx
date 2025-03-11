import { Link } from "react-router";
import { ContactIcon } from "../assets/contact";
import { HomeIcon } from "../assets/home";
import { FileIcon } from "../assets/file";
import { InfoIcon } from "../assets/info";

export const Navbar = () => {
    return (
        <div className=" fixed bottom-4 left-1/2 -translate-x-1/2 bg-[#818181]/50 p-4 pb-1 rounded-lg flex gap-4 text-white backdrop-blur-xs">
            <Link
                to="/"
                className="flex flex-col items-center relative group w-12"
            >
                <HomeIcon className="w-6 h-6 opacity-50 transition group-hover:opacity-100 cursor-pointer pointer-events-auto text-white group-hover:-translate-y-1/4" />
                <div className="text-white text-xs opacity-0 transition group-hover:opacity-100 cursor-pointer pointer-events-auto text-white group-hover:-translate-y-1/4 ">
                    Home
                </div>
            </Link>
            <Link
                to="/about"
                className="flex flex-col items-center relative group w-12"
            >
                <InfoIcon className="w-6 h-6 opacity-50 transition group-hover:opacity-100 cursor-pointer pointer-events-auto text-white group-hover:-translate-y-1/4" />
                <div className="text-white text-xs opacity-0 transition group-hover:opacity-100 cursor-pointer pointer-events-auto text-white group-hover:-translate-y-1/4 ">
                    Info
                </div>
            </Link>
            <Link
                to="/services"
                className="flex flex-col items-center relative group w-12"
            >
                <FileIcon className="w-6 h-6 opacity-50 transition group-hover:opacity-100 cursor-pointer pointer-events-auto text-white group-hover:-translate-y-1/4" />
                <div className="text-white text-xs opacity-0 transition group-hover:opacity-100 cursor-pointer pointer-events-auto text-white group-hover:-translate-y-1/4 ">
                    Services
                </div>
            </Link>
            {/* <Link
                to="/case_studies"
                className="flex flex-col items-center relative group w-12 disabled"
            >
                <NewsIcon className="w-6 h-6 opacity-50 transition group-hover:opacity-100 cursor-pointer pointer-events-auto text-white group-hover:-translate-y-1/4" />
                <div className="text-white text-xs opacity-0 transition group-hover:opacity-100 cursor-pointer pointer-events-auto text-white group-hover:-translate-y-1/4 ">
                    Cases
                </div>
            </Link> */}
            <Link
                to="/careers"
                className="flex flex-col items-center relative group w-12"
            >
                <ContactIcon className="w-6 h-6 opacity-50 transition group-hover:opacity-100 cursor-pointer pointer-events-auto text-white group-hover:-translate-y-1/4" />
                <div className="text-white text-xs opacity-0 transition group-hover:opacity-100 cursor-pointer pointer-events-auto text-white group-hover:-translate-y-1/4 ">
                    Careers
                </div>
            </Link>
        </div>
    );
};
