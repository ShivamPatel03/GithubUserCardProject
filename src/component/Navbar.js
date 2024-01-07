import React from 'react'
import axios from 'axios'
import { IoIosSearch } from "react-icons/io";
export default function Navbar({userData,setuserData,seturldata}) {
  const searchUser =async()=>{
    try {
      let data = await axios.get(`https://api.github.com/users/${userData}`)
      seturldata(data)
    } catch (error) {
      alert("User not Found/ Input missing")
    }
  
  }
  const handlechange = (e)=>{
    setuserData(e.target.value)
  
  }
  return (
    <div>
    <div className='bg-black px-3 py-3'>
   <div className=' flex w-full items-center justify-center ' >
   <div className=' bg-white flex rounded-[10px] items-center justify-center'>
    <input
        placeholder='Please provide Handle.....'
        value={userData}
        onChange={handlechange}
        type='text'
        className='px-10 py-2 rounded xl outline-none '
    />
    <IoIosSearch onClick={searchUser} className='text-5xl cursor-pointer bg-blue-200 rounded-r-lg ml-10'  />
   </div>
</div>
</div>


    </div>


  )
}
