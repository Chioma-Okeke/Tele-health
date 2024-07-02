// import React from 'react'
import Navbar from '../components/shared/Navbar'
import Header from '../components/shared/Header'
import MainComponent from '../components/home/MainComponent'
import SideSection from '../components/appointments/SideSection'

function Appointments() {
  return (
    <div className="bg-[#fcfcfd] flex items-start gap-5">
        <Navbar currentPage="Appointments"/>
        <div className="w-full">
            <Header title="Appointments"/>
            <div className="flex items-start justify-center gap-5 pr-5 w-full relative">
                <MainComponent/>
                <SideSection/>
            </div>
        </div>
    </div>
  )
}

export default Appointments