// import React from 'react'

import Navbar from "../components/shared/Navbar"
import MainSection from "../components/specialists/MainSection"

function Specialists() {
  return (
    <div className="bg-[#fcfcfd] flex items-start gap-5">
        <Navbar currentPage="Home"/>
        <div className="w-full">
            <div className="pr-5 w-full relative">
                <MainSection/>
            </div>
        </div>
    </div>
  )
}

export default Specialists