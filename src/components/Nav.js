import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo2.png';
import { AiFillInstagram } from 'react-icons/ai';

const Nav = () => {
  const activeLink = 'bg-black text-white p-3';
  const regular = '';
  return (
    <nav className='fixed z-50 top-0 w-[100%] p-2 flex justify-between items-center border-b border-black pr-8 pl-8 bg-white'>
    <NavLink to="/"><img src={ Logo} className='w-[30%]' alt='logo'/><h4>Tanzania Arts</h4></NavLink>
    
  	<ul className='inline-flex'>
      <li className='mr-6'>
        <NavLink to="/" className={({isActive}) => isActive? activeLink: regular}>
          Home
        </NavLink>
      </li>

       <li className='mr-6'>
        <NavLink to="/artwork" className={({isActive}) => isActive? activeLink: regular}> 
        Artwork</NavLink>
       </li>

      <li className ='mr-6'>
        <NavLink to="/artists"className={({isActive}) => isActive? activeLink: regular}>
          Artists</NavLink>
      </li>

      <li >
        <NavLink to="/exhibition" className={({isActive}) => isActive? activeLink: regular}>Exhibition</NavLink>
      </li>
      <li>
        <NavLink to="https://www.instagram.com/african_paintings_pics/" className='mr-[2] w-[20%]'><AiFillInstagram /></NavLink>
      </li>
       
    </ul>
   
   </nav>
    )
}
export default Nav ;