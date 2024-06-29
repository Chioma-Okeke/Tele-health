// import React from 'react'
import { RiLogoutBoxRLine } from "react-icons/ri";

import userImage from "../../assets/userImage.png"

function UserNavProfile() {
  return (
    <div className='flex items-center gap-2 px-2 mb-auto absolute bottom-6 text-sm'>
        <img src={userImage} alt="" className='rounded-full'/>
        <div>
            <p className="font-semibold">Doris Eyo</p>
            <p>Doris.e@gmail.com</p>
        </div>
        <RiLogoutBoxRLine size={20}/>
    </div>
  )
}

export default UserNavProfile