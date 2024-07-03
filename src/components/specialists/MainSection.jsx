// import React from 'react'
import PhysicianProvider from "../../context/PhysicianContext";
import PhysicianGrid from "../PhysicianGrid";

function MainSection() {
    return (
        <div className="relative bg-white min-h-lvh border border-[#E4E7EC] p-5">
            <PhysicianProvider>
                <PhysicianGrid/>
            </PhysicianProvider>
        </div>
    );
}

export default MainSection;
