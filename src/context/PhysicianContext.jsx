/* eslint-disable react/prop-types */
import { useState, createContext } from "react";
import { physicians as physicianData } from "../data/physicians";

export const PhysicianContext = createContext();

export default function PhysicianProvider({ children }) {
    const [physicians, setPhysicians] = useState(physicianData);
    const [searchPhysician, setSearchPhysician] = useState("");

    const searchPhysicianByName = physicians.filter((item) => {
        const result = item.fullName
            .toLowerCase()
            .includes(searchPhysician.toLowerCase())
            ? item
            : searchPhysician === ""
            ? item
            : "";
        return result;
    });

    return (
        <PhysicianContext.Provider
            value={{
                physicians,
                setPhysicians,
                searchPhysician,
                setSearchPhysician,
                searchPhysicianByName,
            }}
        >
            {children}
        </PhysicianContext.Provider>
    );
}
