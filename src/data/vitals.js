import { BsThermometerHalf } from "react-icons/bs";
import { MdBloodtype } from "react-icons/md";
import { WiBarometer } from "react-icons/wi";

export const vitals = [
    {
        id: 1,
        Icon: BsThermometerHalf,
        vital: "Body Temperature",
        latestReading: 31.3,
        units: "",
        cardColor: "#EAF5F9"
    },
    {
        id: 2,
        Icon: MdBloodtype,
        vital: "Glucose Level",
        latestReading: "70-80",
        units: "mg/dl",
        cardColor: "#F5EAF9"
    },
    {
        id: 3,
        Icon: MdBloodtype,
        vital: "Blood Pressure",
        latestReading: "120/75",
        units: "mm/hg",
        cardColor: "#F9F2EA"
    },
]