// import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

function SearchInput() {
  return (
    <div className='border border-[#E4E7EC] bg-white w-96 h-10 flex justify-between items-center py-2 px-5 text-sm rounded-md'>
        <input type="text" placeholder='Search doctors' className="outline-none focus:border-0 text-[#141414]"/>
        <IoSearchSharp size={20}/>
    </div>
  )
}

export default SearchInput