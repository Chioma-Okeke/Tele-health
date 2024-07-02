// import React from 'react'
import { PiChatCircleText } from "react-icons/pi";

import { recentAppointments } from '../../../data/appointments'

function RecentAppointments() {
  return (
    <div>
        {recentAppointments.map(({id, image, practionerName, practionerTitle}) => {
            return (
                <div key={id} className="border rounded-xl flex items-center p-2 text-sm 2xl:text-base mb-4">
                    <img src={image} alt="Practioner Image" className="w-10 2xl:w-16 mr-2"/>
                    <div>
                        <p className="font-medium">{practionerName}</p>
                        <p>{practionerTitle}</p>
                    </div>
                    <button className="p-1 rounded-md ml-auto border">
                        <PiChatCircleText size={20}/>
                    </button>
                </div>
            )
        })}
    </div>
  )
}

export default RecentAppointments