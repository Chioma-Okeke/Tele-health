/* eslint-disable react/prop-types */
import { Menu, Transition } from "@headlessui/react";
// import { DotsVerticalIcon } from "@heroicons/react/outline";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import {
    add,
    eachDayOfInterval,
    endOfMonth,
    format,
    getDay,
    isEqual,
    isSameDay,
    isSameMonth,
    isToday,
    parse,
    parseISO,
    startOfToday,
} from "date-fns";
import { Fragment, useState } from "react";
import { GoClock } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";

const meetings = [
    {
        id: 1,
        practitionerName: "Dr. Hardy Octavian",
        jobTitle: "General Practitioner",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        startDatetime: "2024-07-03T11:30",
        endDatetime: "2024-07-03T12:30",
    },
    {
        id: 2,
        practitionerName: "Dr. Hardy Octavian",
        jobTitle: "General Practitioner",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        startDatetime: "2024-07-13T17:30",
        endDatetime: "2024-07-13T18:30",
    },
    {
        id: 3,
        practitionerName: "Dr. Chioma Princess",
        jobTitle: "General Practitioner",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        startDatetime: "2024-07-10T17:30",
        endDatetime: "2024-07-10T18:30",
    },
    {
        id: 4,
        practitionerName: "Dr. Chukwuebuka Okeke",
        jobTitle: "General Practitioner",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        startDatetime: "2024-07-23T17:30",
        endDatetime: "2024-07-23T18:30",
    },
    // {
    //     id: 2,
    //     name: "Michael Foster",
    //     imageUrl:
    //         "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    //     startDatetime: "2022-05-20T09:00",
    //     endDatetime: "2022-05-20T11:30",
    // },
    // {
    //     id: 3,
    //     name: "Dries Vincent",
    //     imageUrl:
    //         "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    //     startDatetime: "2022-05-20T17:00",
    //     endDatetime: "2022-05-20T18:30",
    // },
    // {
    //     id: 4,
    //     name: "Leslie Alexander",
    //     imageUrl:
    //         "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    //     startDatetime: "2022-06-09T13:00",
    //     endDatetime: "2022-06-09T14:30",
    // },
    // {
    //     id: 5,
    //     name: "Michael Foster",
    //     imageUrl:
    //         "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    //     startDatetime: "2022-05-13T14:00",
    //     endDatetime: "2022-05-13T14:30",
    // },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function CalendarComponent() {
    let today = startOfToday();
    let [selectedDay, setSelectedDay] = useState(today);
    let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
    let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

    let days = eachDayOfInterval({
        start: firstDayCurrentMonth,
        end: endOfMonth(firstDayCurrentMonth),
    });

    function previousMonth() {
        console.log(days, "days")
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
        setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
    }

    function nextMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
        setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
    }

    let selectedDayMeetings = meetings.filter((meeting) =>
        isSameDay(parseISO(meeting.startDatetime), selectedDay)
    );

    return (
        <div className="p-5 border rounded-xl">
            <h1 className="font-semibold text-lg">Schedules</h1>
            <div className="max-w-md mx-auto md:max-w-4xl">
                <div className="md:grid md:grid-rows-2 md:divide-y md:divide-gray-200">
                    <div className="h-fit">
                        <div className="flex items-center justify-between">
                            <button
                                type="button"
                                onClick={previousMonth}
                                className="flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">Previous month</span>
                                <FaChevronLeft
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                />
                            </button>
                            <h2 className="flex-auto font-semibold text-gray-900 text-center">
                                {format(firstDayCurrentMonth, "MMMM yyyy")}
                            </h2>
                            <button
                                onClick={nextMonth}
                                type="button"
                                className="flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">Next month</span>
                                <FaChevronRight
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                        <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
                            <div>Mo</div>
                            <div>Tu</div>
                            <div>We</div>
                            <div>Th</div>
                            <div>Fr</div>
                            <div>Sa</div>
                            <div>Su</div>
                        </div>
                        <div className="grid grid-cols-7 mt-2 text-sm">
                            {days.map((day, dayIdx) => (
                                <div
                                    key={day.toString()}
                                    className={classNames(
                                        dayIdx === 0 &&
                                            colStartClasses[getDay(day)],
                                        "py-1.5 relative"
                                    )}
                                >
                                    <button
                                        type="button"
                                        onClick={() => setSelectedDay(day)}
                                        className={classNames(
                                            isEqual(day, selectedDay) &&
                                                "text-black",
                                            !isEqual(day, selectedDay) &&
                                                isToday(day) &&
                                                "text-red-500  ",
                                            !isEqual(day, selectedDay) &&
                                                !isToday(day) &&
                                                isSameMonth(
                                                    day,
                                                    firstDayCurrentMonth
                                                ) &&
                                                "text-gray-900",
                                            !isEqual(day, selectedDay) &&
                                                !isToday(day) &&
                                                !isSameMonth(
                                                    day,
                                                    firstDayCurrentMonth
                                                ) &&
                                                "text-gray-400",
                                            isEqual(day, selectedDay) &&
                                                isToday(day) &&
                                                "bg-[#70FFBA]",
                                            isEqual(day, selectedDay) &&
                                                !isToday(day) &&
                                                "bg-gray-200",
                                            !isEqual(day, selectedDay) &&
                                                "hover:bg-gray-200",
                                            (isEqual(day, selectedDay) ||
                                                isToday(day)) &&
                                                "font-semibold",
                                            "mx-1 relative h-8 w-8 items-center justify-center rounded-md"
                                        )}
                                    >
                                        <time
                                            dateTime={format(day, "yyyy-MM-dd")}
                                        >
                                            {format(day, "d")}
                                        </time>
                                        <div className="w-1 h-1 mx-auto mt-1">
                                            {meetings.some((meeting) =>
                                                isSameDay(
                                                    parseISO(
                                                        meeting.startDatetime
                                                    ),
                                                    day
                                                )
                                            ) && (
                                                <div className="absolute right-0 top-0 w-2 h-2 rounded-bl-full rounded-tr-full rounded-tl-3xl bg-[#006635]"></div>
                                            )}
                                        </div>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <section className="mt-3 pt-3">
                        {/* <h2 className="font-semibold text-gray-900">
                            Schedule for{" "}
                            <time dateTime={format(selectedDay, "yyyy-MM-dd")}>
                                {format(selectedDay, "MMM dd, yyy")}
                            </time>
                        </h2> */}
                        <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
                            {selectedDayMeetings.length > 0 ? (
                                selectedDayMeetings.map((meeting) => (
                                    <Meeting
                                        meeting={meeting}
                                        key={meeting.id}
                                    />
                                ))
                            ) : (
                                <p>No meetings for today.</p>
                            )}
                        </ol>
                    </section>
                </div>
            </div>
        </div>
    );
}

function Meeting({ meeting }) {
    let startDateTime = parseISO(meeting.startDatetime);
    let endDateTime = parseISO(meeting.endDatetime);

    return (
        <li className="">
            {/* <img
                src={meeting.imageUrl}
                alt=""
                className="flex-none w-10 h-10 rounded-full"
            /> */}
            <div className="flex-auto mb-2">
                <p className="text-gray-900 text-base">
                    {meeting.practitionerName}
                </p>
                <p>{meeting.jobTitle}</p>
            </div>
            <div className="text-sm">
                <div className="flex items-center gap-3 mb-3">
                    <GoClock size={15} />
                    <p className="mt-0.5">
                        <time dateTime={meeting.startDatetime}>
                            {format(startDateTime, "h:mm a")}
                        </time>{" "}
                        -{" "}
                        <time dateTime={meeting.endDatetime}>
                            {format(endDateTime, "h:mm a")}
                        </time>
                    </p>
                </div>
                <div className="flex items-center gap-3 mb-3">
                    <CiCalendar size={15} />
                    <p>Zoom</p>
                </div>
            </div>
            <div className="flex items-center justify-center gap-3 2xl:gap-5">
                <button className="py-2 px-5 2xl:px-9 border border-[#E0E3EB] rounded-md font-semibold text-[#141414]">
                    Reschedule
                </button>
                <button className="py-2 px-3 text-[#006635] bg-[#E5FFF3] rounded-md font-semibold">
                    Join Now
                </button>
            </div>
            <Menu
                as="div"
                className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
            >
                <div>
                    <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
                        <span className="sr-only">Open options</span>
                        <IoEllipsisVerticalSharp
                            className="w-6 h-6"
                            aria-hidden="true"
                        />
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href="#"
                                        className={classNames(
                                            active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                            "block px-4 py-2 text-sm"
                                        )}
                                    >
                                        Edit
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href="#"
                                        className={classNames(
                                            active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                            "block px-4 py-2 text-sm"
                                        )}
                                    >
                                        Cancel
                                    </a>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </li>
    );
}

let colStartClasses = [
    "",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7",
];
