import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
  // import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
 import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from "swiper";


import JumaThree from '../assets/juma3.jpg';
import JumaSix from '../assets/juma6.jpg';
import DaudiFour from '../assets/daudi4.jpg';
import DaudiFive from '../assets/daudi5.jpg';
import AkachiOne from '../assets/akachi1.jpg';
import SuzieTwo from '../assets/suzie2.jpg';
import SuzieOne from '../assets/suzie1.jpg';
import MaryFour from '../assets/mary4.png';
import MaryThree from '../assets/mary3.png';
import AkotheeOne from '../assets/akothee1.jpg';
import AkotheeFive from '../assets/akothee5.jpg';


const Home = () => {
  return (
    <div className="pt-10">
    <section className='flex justify-center mb-8'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide className='absolute left-[15%]'>
        	<img src={ JumaThree} alt='juma'className='w-[70%] '/>
        </SwiperSlide>

        <SwiperSlide className='absolute left-[15%]'>
        	<img src={ AkotheeFive} alt='akothee'className='w-[60%]'/>
        </SwiperSlide>

        <SwiperSlide className='absolute left-[15%]'>
        	<img src={ DaudiFive} alt='suzie' className='w-[70%]'/>
        </SwiperSlide>

        <SwiperSlide className='absolute left-[15%]'>
        	<img src={ JumaSix} alt='suzie' className='w-[70%]'/>
        </SwiperSlide>
        
      </Swiper>
    
    
   
    </section>

    <section class=" text-center w-[60%] h-[30%] mb-8 ">
		<h2>About Us</h2>
		<div>
		<p className='self-center'>
			Lorem ipsum dolor sit amet. Cum placeat dolor id ipsa autem est aperiam suscipit aut debitis saepe qui nihil alias eos minima omnis. In accusantium aliquid id possimus voluptatibus et iusto similique eos excepturi accusamus. Qui modi tempore ut facilis labore eos nesciunt quia et Quis libero et dolores ipsa qui accusantium velit!

			Et corporis dolorem aut vitae rerum qui quos porro ad quidem voluptates ut veritatis ipsam. Et quidem porro aut eligendi explicabo qui voluptatem veritatis ad praesentium numquam. Id quasi ratione est modi omnis 33 culpa veniam in incidunt ipsa ut maxime tempora ea reprehenderit magni. Et dolore reiciendis aut dolores vero vel vitae totam?
		</p>
		</div>
	</section>
	
	<section className=' h-[30%] mb-8' >
		<h2> New this weeks art</h2>
		<p>Our top picks of the week voted by the staff</p>
		<div className='flex justify-between items-center'>

		<div className='w-[32%]'>
			<div className=' h-[25rem] flex justify-center items-center '>
				<img src={MaryFour} alt='mary art' className='max-h-[20rem] self-center' />
			</div>
			<h5>Bulldog </h5>
			<p>AI art on Print</p>
			<p>50 x 50 in</p>
		</div>

		<div  className=' w-[32%]'>
			<div className='h-[25rem] flex justify-center items-center'>
				<img src={AkotheeOne} alt ='akothee'className='max-h-[20rem]'  />
			</div>
			<h5>The Blues </h5>
			<p>Oil on linen</p>
			<p>100 x 80 in</p>
		</div>

		<div  className=' w-[32%]'>
			<div className='h-[25rem] flex justify-center items-center'>
				<img src={DaudiFour} alt='daudi' className='max-h-[20rem]' />
			</div>
			<h5>The Cliff </h5>
			<p>Photograph on Print</p>
			<p>100 x 80 in</p>
		</div>

		</div>
	</section>

	<section className=' h-[30%]'>
		<h2>New Artists</h2>
		<div className='flex justify-between items-center'>

		<div className=' w-[32%] h-[25rem]'>
			<img src={MaryThree} alt='dogs' className=' max-h-[20rem]' />
			<h5>Mary Wambui </h5>
		</div>
		<div className='w-[32%] h-[25rem]'>
			<img src={AkachiOne} alt='woman' className=' max-h-[20rem]'/>
			<h5>Akachi Martin </h5>
		</div>
		<div className='w-[32%] h-[25rem]'>
			<img src={SuzieTwo} alt='woman' className=' max-h-[20rem]'/>
			<h5>Suzie Moboyoko </h5>
		</div>
		</div>
	</section>
    
    
    </div>
    )
}
export default Home ;