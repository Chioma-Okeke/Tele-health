// import React from 'react'
import Navbar from '../components/shared/Navbar'
import Header from '../components/shared/Header'
import SideSection from '../components/appointments/SideSection'
import MainSection from '../components/appointments/MainSection'

function Appointments() {
  return (
    <div className="bg-[#fcfcfd] flex items-start gap-5">
        <Navbar currentPage="Appointments"/>
        <div className="w-full">
            <Header title="Appointments"/>
            <div className="flex items-start justify-center gap-5 pr-5 w-full relative">
                <MainSection/>
                <SideSection/>
            </div>
        </div>
    </div>
  )
}

export default Appointments