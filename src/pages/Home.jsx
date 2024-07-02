// import React from 'react'

import MainComponent from "../components/home/MainComponent"
import SideComponent from "../components/home/SideComponent"
import Header from "../components/shared/Header"
import Navbar from "../components/shared/Navbar"

function Home() {
  return (
    <div className="bg-[#fcfcfd] flex items-start gap-5">
        <Navbar currentPage="Home"/>
        <div className="w-full">
            <Header title="Home"/>
            <div className="flex items-start justify-center gap-5 pr-5 w-full relative">
                <MainComponent/>
                <SideComponent/>
            </div>
        </div>
    </div>
  )
}

export default Home