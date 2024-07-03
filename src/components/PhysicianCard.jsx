/* eslint-disable react/prop-types */
// import React from 'react'
import { PiChatCircleText } from "react-icons/pi";

function PhysicianCard({ src, fullName, isOnline, jobTitle }) {
    return (
        <div className="rounded-xl border p-2 min-w-60 cursor-pointer">
            <img src={src} alt="" className="w-full aspect-[5/4] object-cover"/>
            <h4 className="font-bold my-1">{fullName}</h4>
            <p className="text-sm">{jobTitle}</p>
            {isOnline ? (
                <p className="text-sm rounded-xl bg-[#E5FFF3] text-[#006635] w-fit px-2 my-1">
                    Online
                </p>
            ) : (
                <p className="text-sm rounded-xl w-fit px-2 my-1 text-[#F07E42] bg-[#FDECE3]">Offline</p>
            )}
            <div className="flex items-center gap-3">
                <button className="border rounded-lg font-semibold p-1">
                    View Schedule
                </button>
                <button className="p-2 border rounded-lg">
                    <PiChatCircleText size={20}/>
                </button>
            </div>
        </div>
    );
}

export default PhysicianCard;
