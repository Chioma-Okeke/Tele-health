/* eslint-disable react/prop-types */
import { useState, createContext } from "react";
import { physicians as physicianData } from "../data/physicians";

export const PhysicianContext = createContext();

export default function PhysicianProvider({ children }) {
    const [physicians, setPhysicians] = useState(physicianData);
    return (
        <PhysicianContext.Provider value={{ physicians, setPhysicians }}>
            {children}
        </PhysicianContext.Provider>
    );
}
