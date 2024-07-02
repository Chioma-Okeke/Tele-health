// import React from 'react'
import Navbar from '../components/shared/Navbar'
import Header from '../components/shared/Header'
import MainComponent from '../components/home/MainComponent'
import SideComponent from '../components/home/SideComponent'

function MentalSupport() {
  return (
    <div className="bg-[#fcfcfd] flex items-start gap-5">
        <Navbar currentPage="Mental Support"/>
        <div className="w-full">
            <Header title="Mental Support"/>
            <div className="flex items-start justify-center gap-5 pr-5 w-full relative">
                <MainComponent/>
                <SideComponent/>
            </div>
        </div>
    </div>
  )
}

export default MentalSupport