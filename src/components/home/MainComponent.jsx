// import React from 'react'
import VitalsSection from "./VitalsSection";

function MainComponent() {
    return (
        <div className="bg-white min-h-lvh max-w-[742px] border border-[#E4E7EC] p-5">
            <h1 className="text-3xl font-semibold text-[#040703]">Hello, Doris</h1>
            <p className="text-base">Don&apos;t forget to check yourself</p>
            <div className="mt-10">
                <h1 className="text-lg font-semibold mb-5">Your Vitals</h1>
                <VitalsSection />
            </div>
        </div>
    );
}

export default MainComponent;
