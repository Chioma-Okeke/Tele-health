import { GrHomeRounded } from "react-icons/gr";
import { CiCalendar } from "react-icons/ci";
import { PiChatCircleText } from "react-icons/pi";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { LuCross } from "react-icons/lu";

export const navOptions = [
    {
        id: 1,
        Icon: GrHomeRounded,
        navTitle: "Home",
        notification: null
    },
    {
        id: 2,
        Icon: CiCalendar,
        navTitle: "Appointments",
        notification: null
    },
    {
        id: 3,
        Icon: PiChatCircleText,
        navTitle: "Symptom Checker",
        notification: null
    },
    {
        id: 4,
        Icon: MdOutlineBookmarkAdd,
        navTitle: "My Health",
        notification: null
    },
    {
        id: 5,
        Icon: LuCross,
        navTitle: "Mental Support",
        notification: 2
    },
]