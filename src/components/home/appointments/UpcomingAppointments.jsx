// import React from 'react'
import { GoClock } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";
import userImage from "../../../assets/userImage.png";

function UpcomingAppointments() {
    return (
        <div className="text-sm border border-[#E0E3EB] rounded-lg">
            <div className="p-2">
                <h1 className="font-bold text-base mb-3 text-[#101928]">Friday, 4 November</h1>
                <div className="flex items-center gap-3 mb-3">
                    <GoClock size={15}/>
                    <p>11:30 - 12:00 (30 min)</p>
                </div>
                <div className="flex items-center gap-3 mb-7">
                    <CiCalendar size={15}/>
                    <p>Zoom</p>
                </div>
                <div className="flex items-center gap-3">
                    <img src={userImage} alt="" className="w-12"/>
                    <div>
                        <p className="text-base font-medium text-[#101928]">Dr Handy Octavian</p>
                        <p>General Practitioner</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="flex items-center justify-center gap-2 p-5">
                <button className="py-2 px-9 border border-[#E0E3EB] rounded-md font-semibold">Reschedule</button>
                <button className="py-2 px-3 text-[#006635] bg-[#E5FFF3] rounded-md font-semibold">Join Now</button>
            </div>
        </div>
    );
}

export default UpcomingAppointments;
