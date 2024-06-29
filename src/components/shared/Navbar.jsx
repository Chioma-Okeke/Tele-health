/* eslint-disable react/prop-types */
// import React from "react";

import logo from "../../assets/logo.svg";
import { navOptions } from "../../data/nav-options";
import UserNavProfile from "./UserNavProfile";

function Navbar({ currentPage }) {
    return (
        <div className="sticky top-0 left-0 py-4 bg-white border border-r-[#E4E7EC] min-h-lvh min-w-60 w-[248px]">
            <img
                src={logo}
                alt="Company Logo"
                aria-label="Company Label"
                className="mb-4"
            />
            <div className="p-2">
                {navOptions.map(({ id, Icon, navTitle }) => {
                    return (
                        <div
                            key={id}
                            className={`flex gap-3 items-center py-3 px-4 cursor-pointer hover:bg-[#E5FFF3] ${currentPage === navTitle ? "bg-[#E5FFF3]" : ""}`}
                        >
                            <Icon />
                            <p>{navTitle}</p>
                        </div>
                    );
                })}
            </div>
            <UserNavProfile />
        </div>
    );
}

export default Navbar;
