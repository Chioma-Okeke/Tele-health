/* eslint-disable react/prop-types */
// import React from 'react'
import { TfiBell } from "react-icons/tfi";
import { CiCirclePlus } from "react-icons/ci";

import SearchInput from "../SearchInput";
import { Link } from "react-router-dom";

function Header({ title }) {
    return (
        <div className="flex items-center justify-between p-5">
            <h1 className="font-semibold text-lg text-[#101928]">{title}</h1>
            <Link to="/home/specialists"><SearchInput /></Link>
            <div className="flex items-center">
                <p className="text-sm">Help icon</p>
                <TfiBell color="#8A8A8A" size={30} className="mx-3" />
                <button className="bg-[#006635] text-white flex items-center gap-1 py-3 px-5 rounded-lg">
                    <CiCirclePlus size={18} style={{strokeWidth: 1}}/>
                    <span className="text-sm text-white">Book Session</span>
                </button>
            </div>
        </div>
    );
}

export default Header;
