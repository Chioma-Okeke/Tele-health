import React from "react";

import Table from "../Table";
import { upcomingSessions } from "../../data/appointments";
import { completedSessions } from "../../data/appointments";
import { canceledSessions } from "../../data/appointments";

const sessions = [
    "Upcoming Sessions",
    "Completed Sessions",
    "Canceled Sessions",
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function MainSection() {
    const [selectedSession, setSelectedSession] =
        React.useState("Upcoming Sessions");
    const [data, setData] = React.useState("upcomingSessions");

    function handleSessionSelect(e) {
        setSelectedSession(e.target.innerText);
        let firstValue = e.target.innerText.split(" ")[0].toLowerCase();
        let lastValue =
            e.target.innerText.split(" ")[1].slice(0, 1).toUpperCase() +
            e.target.innerText.split(" ")[1].slice(1);
        console.log(firstValue + lastValue);
        console.log(
            e.target.innerText.split(" ")[1].slice(0, 1).toUpperCase() +
                e.target.innerText.split(" ")[1].slice(1)
        ); 
        setData(firstValue + lastValue);
        console.log(data);
    }

    function switchDataSet(data) {
        switch (data) {
            case "upcomingSessions":
                return upcomingSessions;
            // break;
            case "completedSessions":
                return completedSessions;
            // break:
            default:
                return canceledSessions;
        }
    }

    let dataSet = switchDataSet(data);

    return (
        <div className="relative w-[80%] 2xl:w-[70%] bg-white min-h-lvh max-w-[650px] xl:max-w-[800px] 2xl:max-w-[1280px] border border-[#E4E7EC] ">
            <div className="p-5">
                <h1 className="text-3xl font-semibold text-[#040703] ">
                    My Appointments
                </h1>
                <p className="text-base">
                    See all your appointments in one place
                </p>
            </div>
            <div className="bg-[#FCFCFD] border border-[#E4E7EC] px-5 py-2 flex items-center gap-5 text-sm">
                {sessions.map((session) => {
                    return (
                        <p
                            key={session}
                            onClick={(e) => handleSessionSelect(e)}
                            className={classNames(
                                selectedSession === session &&
                                    "font-medium border-b-2 border-b-[#006635]",
                                "px-3 py-2 hover:border-b-2 hover:border-b-[#006635] cursor-pointer"
                            )}
                        >
                            {session}
                        </p>
                    );
                })}
                {/* <p className="opacity-80 px-3 py-2 hover:border-b-2 hover:border-b-[#006635] hover:font-semibold cursor-pointer">Completed Sessions</p>
                <p className="opacity-80 px-3 py-2 hover:border-b-2 hover:border-b-[#006635] hover:font-semibold cursor-pointer">Canceled Sessions</p> */}
            </div>
            <Table
                title={selectedSession}
                description={"All sessions were held via zoom"}
                dataSet={dataSet}
            />
        </div>
    );
}

export default MainSection;
