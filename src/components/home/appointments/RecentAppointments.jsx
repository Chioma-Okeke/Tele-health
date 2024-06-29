// import React from 'react'
import { PiChatCircleText } from "react-icons/pi";

import { recentAppointments } from '../../../data/appointments'

function RecentAppointments() {
  return (
    <div>
        {recentAppointments.map(({id, image, practionerName, practionerTitle}) => {
            return (
                <div key={id}>
                    <img src={image} alt="Practioner Image" />
                    <div>
                        <p>{practionerName}</p>
                        <p>{practionerTitle}</p>
                    </div>
                    <button className="p-1 rounded-md">
                        <PiChatCircleText size={20}/>
                    </button>
                </div>
            )
        })}
    </div>
  )
}

export default RecentAppointments