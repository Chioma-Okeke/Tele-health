/* eslint-disable react/prop-types */
// import React from "react";

import logo from "../../assets/logo.png";
import { navOptions } from "../../data/nav-options";
import UserNavProfile from "./UserNavProfile";
import { Link } from "react-router-dom";

function Navbar({ currentPage }) {
    return (
        <div className="sticky top-0 left-0 py-4 bg-white border border-r-[#E4E7EC] min-h-lvh min-w-60 w-[248px]">
            <Link to="/" className="flex items-center mb-4">
                <img
                    src={logo}
                    alt="Company Logo"
                    aria-label="Company Label"
                    className="w-20"
                />
                <h1 className="font-bold text-2xl">Tele-Health</h1>
            </Link>
            <div className="p-2">
                {navOptions.map(({ id, Icon, navTitle, notification }) => {
                    let params = navTitle.toLowerCase().split(" ").join("")
                    return (
                        <Link
                            to={`/${params}`}
                            key={id}
                            className={`flex gap-3 items-center py-3 px-2 cursor-pointer hover:bg-[#E5FFF3] ${
                                currentPage === navTitle ? "bg-[#E5FFF3]" : ""
                            }`}
                        >
                            <Icon />
                            <p>{navTitle}</p>
                            <span className="px-2 rounded-md bg-[#E5FFF3] ml-auto text-sm text-[#006635]">{notification}</span>
                        </Link>
                    );
                })}
            </div>
            <UserNavProfile />
        </div>
    );
}

export default Navbar;
