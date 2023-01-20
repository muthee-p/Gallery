import React from 'react';
import {Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

const Layout = () => {
  return (
    <div>
    <div className=''>
    	<Nav />
    </div>
    <div className=' p-4 pb-32 min-h-[100vh]'>
    		<Outlet />
    </div>
    <div>
    		<Footer />
    </div>
    </div>
    
    )
}
export default Layout ;