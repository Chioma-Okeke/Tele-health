// import React from "react";
import { GrNext } from "react-icons/gr";
import UpcomingAppointments from "./appointments/UpcomingAppointments";
import RecentAppointments from "./appointments/RecentAppointments";

function SideComponent() {
    return (
        <div className="min-h-lvh sticky top-0 2xl:w-[25%] left-0 bg-white rounded-md p-5 border border-[#E4E7EC]">
            <section>
                <div className="flex items-center justify-between mb-10">
                    <h1 className="text-base font-semibold">Upcoming Appointments</h1>
                    <div className="flex items-center gap-1">
                        <p className="text-[#667185] font-semibold">See all</p>
                        <GrNext color="#667185" />
                    </div>
                </div>
                <UpcomingAppointments />
            </section>
            <section className="mt-9">
                <h1 className="text-lg font-semibold mb-5">Recent Appointments</h1>
                <RecentAppointments/>
            </section>
        </div>
    );
}

export default SideComponent;
