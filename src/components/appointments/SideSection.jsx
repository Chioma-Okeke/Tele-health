// import React from 'react'
import CalendarComponent from '../CalendarComponent';

function SideSection() {
    return (
        <div className="max-h-lvh overflow-y-scroll sticky top-0 left-0 bg-white rounded-md p-5 border border-[#E4E7EC]">
            <CalendarComponent/>
        </div>
    );
}

export default SideSection;
