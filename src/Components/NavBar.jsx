import React from 'react'
import { useState } from 'react';
import { Button, Drawer } from 'antd';
import {  FaBars} from "react-icons/fa";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
  return (
    <div className='w-screen font-bold   flex items-center justify-center gap-2 relative bg-transparent py-12 '>
      <ul className='hidden gap-9 text-black cursor-pointer sm:flex bg-blue-100 px-7 rounded-md py-2 '>
        <li className='hover:text-black hover:px-3 py-1 hover:bg-blue-200 rounded-xl'>Solution</li>
        <li className='hover:text-black  hover:px-3 py-1 hover:bg-blue-200 rounded-xl'>Who We Serve</li>
        <li className='hover:text-black  hover:px-3 py-1 hover:bg-blue-200 rounded-xl'>Our Process Company</li>
        <li className='hover:text-black  hover:px-3 py-1 hover:bg-blue-200 rounded-xl'>Contact Us</li>
       
      </ul>
      <button className='p-3 rounded-xl bg-white px-2 centerCol'>Free Risk assesment</button>
      <FaBars type="primary" onClick={showDrawer} className="absolute right-5 text-gray-400 sm:hidden "/>
       
      <Drawer title="Menu" placement="right" onClose={onClose} open={open} className="backdrop-blur-lg">
        <div className='centerCol text-2xl gap-4'>
        <p>Solution</p>
        <p>Our Process</p>
        <p>Conact us</p>
        </div>
      </Drawer>
    </div>
  )
}

export default NavBar
