// import React from 'react'
import PhysicianProvider from "../../context/PhysicianContext";
import FindSpecialist from "./FindSpecialist";
import VitalsSection from "./VitalsSection";

function MainComponent() {
    return (
        <div className="relative 2xl:w-[70%] bg-white min-h-lvh max-w-[650px] xl:max-w-[700px] 2xl:max-w-[1280px] border border-[#E4E7EC] p-5">
            <h1 className="text-3xl font-semibold text-[#040703]">
                Hello, Doris
            </h1>
            <p className="text-base">Don&apos;t forget to check yourself</p>
            <div className="mt-10">
                <h1 className="text-lg font-semibold mb-5">Your Vitals</h1>
                <VitalsSection />
            </div>
            <PhysicianProvider>
                <FindSpecialist />
            </PhysicianProvider>
        </div>
    );
}

export default MainComponent;
