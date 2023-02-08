import React from 'react';
import BonMwiru from '../assets/bonmwiru.jpeg';
import AkachiFive from '../assets/akachi5.jpg';

const Exhibition = () => {
  return (
    <div className="pt-20 p-8">
    <div>
		<h2 className='text-center m-4'>UPCOMING</h2>
		<img src={BonMwiru} alt='woman playiong music' className='w-[20%]'/>
		<h5>Sarit Rooftop</h5>
		<p>Saturday 14th January 2023</p>
	</div>
	<div>
		<h3 className='text-center m-4'>PAST EXHIBITIONS</h3>
		<div className='flex justify-between'>
		<div>
		<img src={AkachiFive} alt='man'className='w-[50%]'/>
		<h5>moi Avenue</h5>
		<p>November 2022</p>
		</div>
		<div>
		<img src={AkachiFive} alt='man'className='w-[50%]'/>
		<h5>moi Avenue</h5>
		<p>November 2022</p>
		</div>
		<div>
		<img src={AkachiFive} alt='man'className='w-[50%]'/>
		<h5>moi Avenue</h5>
		<p>November 2022</p>
		</div>
		</div>
	</div>
    
    
    </div>
    )
}
export default Exhibition ;