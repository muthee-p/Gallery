import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Logo from '../assets/logo.png';


const Nav = () => {
  return (
    <nav className='fixed z-50 top-0 w-[100%] p-2 flex justify-between items-center border-b border-black pr-8 pl-8 bg-white'>
    <img src={ Logo} className=' w-[5%]' />
    
  	<ul className='inline-flex'>
      <li className='mr-6'>
        <NavLink to="/">Home</NavLink>
      </li>

       <li className='mr-6'>
        <NavLink to="/artwork">  Artwork</NavLink>
       </li>

      <li className ='mr-6'>
        <NavLink to="/artists">Artists</NavLink>
      </li>

      <li >
        <NavLink to="/exhibition">Exhibition</NavLink>
      </li>
       
    </ul>
   
   </nav>
    )
}
export default Nav ;