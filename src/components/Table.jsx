/* eslint-disable react/prop-types */
// import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { BsFilter } from "react-icons/bs";
import { FaSort } from "react-icons/fa";
// import { upcomingSessions } from "../data/appointments";

function Table({ title, description, dataSet }) {
    console.log(dataSet, "data set")
    return (
        <section className="px-5">
            <div className="flex items-end justify-between p-5">
                <div>
                    <h1 className="text-lg font-semibold">{title}</h1>
                    <p className="text-base">{description}</p>
                </div>
                <div className="flex items-center gap-4 2xl:gap-6 text-sm 2xl:text-base">
                    <div className="flex items-center gap-1 w-fit">
                        <IoSearchOutline />
                        <span>Search</span>
                    </div>
                    <div className="flex items-center gap-1 w-fit">
                        <BsFilter />
                        <span>Filter</span>
                    </div>
                    <div className="flex items-center gap-1 w-fit">
                        <FaSort />
                        <span>Sort</span>
                    </div>
                </div>
            </div>
            <div className="border border-[#E4E7EC] rounded-2xl">
                <table className="border border-[#E4E7EC] w-full mb-5">
                    <thead className="bg-[#FCFCFD] rounded-xl">
                        <tr className="text-sm 2xl:text-base font-medium border-b border-b-[#F0F2F5]">
                            <th className="py-3 px-6 text-left">Name</th>
                            <th className="py-3 px-6 text-left">
                                Hospital Practicing
                            </th>
                            <th className="py-3 px-6 text-left">
                                Date and time
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataSet.map((appointment) => {
                            return (
                                <tr
                                    key={appointment.id}
                                    className="text-sm 2xl:text-base border-b border-b-[#F0F2F5]"
                                >
                                    <td className="py-3 px-6 text-left">
                                        <div className="flex gap-3">
                                            <img
                                                src={appointment.image}
                                                alt="Practitioner Image"
                                                className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-full"
                                            />
                                            <div>
                                                <p className="text-[#344054] font-medium">
                                                    {
                                                        appointment.PractitionerName
                                                    }
                                                </p>
                                                <p className="text-[#667185]">
                                                    {appointment.jobTitle}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-left">
                                        <div>
                                            <p className="font-medium text-[#344054]">
                                                {appointment.practicingHospital}
                                            </p>
                                            <p className="text-[#667185]">
                                                {appointment.hospitalAddress.slice(
                                                    0,
                                                    28
                                                )}
                                                ...
                                            </p>
                                        </div>
                                    </td>
                                    <td className="py-3 px-6 text-left">
                                        <div>
                                            <p className="font-medium text-[#344054]">
                                                {appointment.date}
                                            </p>
                                            <p className="text-[#667185]">
                                                {appointment.time}
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Table;
