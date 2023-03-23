import React from 'react';
// import { Swiper, SwiperSlide } from "swiper/react";
//   // import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
//  import 'swiper/css/pagination';

// import { Autoplay, Navigation, Pagination } from "swiper";


import Atus from '../assets/Atus.jpeg';
import MchechuTwo from '../assets/mchechu2.jpeg';
import MchechuThree from '../assets/mchechu3.jpeg';
import BonMwiru from '../assets/bonmwiru.jpeg';
import KamyosoOne from '../assets/kamyoso1.jpeg';
import KamyosoTwo from '../assets/kamyoso2.jpeg';
import KupoayoTwo from '../assets/kupoayo2.jpeg';

import MaryFour from '../assets/mary4.png';
import MaryThree from '../assets/mary3.png';
// import Gallery from "../assets/gallery.jpg";


const Home = () => {
  return (
    <div className="pt-32">
    <section className='flex justify-center mb-8'>
      {/* <Swiper
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
      > */}
        
        	<img src={ Atus} alt='maasai woman' className='w-[30%] '/>
        

        {/* <SwiperSlide className='absolute left-[25%]'>
        	<img src={ MchechuThree} alt='Lion'className='w-[30%]'/>
        </SwiperSlide>

        <SwiperSlide className='absolute left-[25%]'>
        	<img src={ KamyosoOne} alt='zebra drinking water' className='w-[30%]'/>
        </SwiperSlide>

        <SwiperSlide className='absolute left-[25%]'>
        	<img src={ BonMwiru} alt='lady playing the instrument' className='w-[30%]'/>
        </SwiperSlide>

		<SwiperSlide className='absolute left-[25%]'>
        	<img src={ KupoayoTwo} alt='maasai man' className='w-[30%]'/>
        </SwiperSlide> */}
        
      {/* </Swiper> */}
    <section class=" text-center  h-[30%] mb-8 ">
		<h2>About Us</h2>
		
		<div className='w-[] p-4 flex items-center'>
		<p className=''>
			Lorem ipsum dolor sit amet. Cum placeat dolor id ipsa autem est aperiam suscipit aut debitis saepe qui nihil alias eos minima omnis. In accusantium aliquid id possimus voluptatibus et iusto similique eos excepturi accusamus. Qui modi tempore ut facilis labore eos nesciunt quia et Quis libero et dolores ipsa qui accusantium velit!

			Et corporis dolorem aut vitae rerum qui quos porro ad quidem voluptates ut veritatis ipsam. Et quidem porro aut eligendi explicabo qui voluptatem veritatis ad praesentium numquam. Id quasi ratione est modi omnis 33 culpa veniam in incidunt ipsa ut maxime tempora ea reprehenderit magni. Et dolore reiciendis aut dolores vero vel vitae totam?
		</p>
		</div>
		
	</section>
    
   
    </section>

    
	
	<section className=' h-[30%] mb-8' >
		<h2> New this weeks art</h2>
		<p>Our top picks of the week voted by the staff</p>
		<div className='flex lg:justify-between items-center'>

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
				<img src={KamyosoTwo} alt ='two elephants' className='max-h-[20rem]'  />
			</div>
			<h5>The Blues </h5>
			<p>Oil on linen</p>
			<p>100 x 80 in</p>
		</div>

		<div  className=' w-[32%]'>
			<div className='h-[25rem] flex justify-center items-center'>
				<img src={MchechuTwo} alt='daudi' className='max-h-[20rem]' />
			</div>
			<h5>The Cliff </h5>
			<p>Photograph on Print</p>
			<p>100 x 80 in</p>
		</div>

		</div>
	</section>

	<section className=' h-[30%]'>
		<h2>New Artists</h2>
		<div className='flex lg:justify-between md:flex-col sm:flex-col items-center'>

		<div className=' md:w-[32%] md:h-[25rem]'>
			<img src={MaryThree} alt='dogs' className=' max-h-[20rem]' />
			<h5>Mary Wambui </h5>
		</div>
		<div className='md:w-[32%] md:h-[25rem]'>
			<img src={BonMwiru} alt='woman' className=' max-h-[20rem]'/>
			<h5>Akachi Martin </h5>
		</div>
		<div className='md:w-[32%] md:h-[25rem]'>
			<img src={BonMwiru} alt='woman' className=' max-h-[20rem]'/>
			<h5>Suzie Moboyoko </h5>
		</div>
		</div>
	</section>
    
    
    </div>
    )
}
export default Home ;