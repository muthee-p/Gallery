import React from 'react';
import { Link } from 'react-router-dom';
import Atus from '../assets/Atus.jpeg';
import MchechuThree from '../assets/mchechu3.jpeg';
import Mchechu from '../assets/mchechu.jpeg';
import BonMwiru from '../assets/bonmwiru.jpeg';
import KamyosoTwo from '../assets/kamyoso2.jpeg';
import Kupoayo from '../assets/kupoayo.jpeg';


const Artwork = () => {
  return (
    <div className='mt-32 pl-8'>

    <h2 className='text-center'>FEATURED ART</h2>
	<div className='flex items-center p-8'>
		<div className='w-[50%] flex justify-center'  >
			<img src={MchechuThree} alt='lion' className='w-[50%]'/>
			</div>
		<div className='w-[45%] '>
		<h4 className='mb-4'>"BOLD"</h4>
		<p>
			Lorem ipsum dolor sit amet. Ea incidunt incidunt ut vitae temporibus aut asperiores quasi 
			At possimus voluptatem. Vel aperiam voluptatum eum iusto molestiae aut illo officiis eos aspernatur 
			exercitationem est veritatis fugiat eum magnam aspernatur. Ex accusantium harum qui molestiae corrupti 
			et omnis molestiae vel voluptatibus inventore est incidunt dolore aut explicabo quas qui perferendis itaque.
		</p>
		<Link to="/daudi"><button className='mt-4'>READ MORE</button></Link>
		</div>
	</div>

	<div className='flex items-center p-8'>
		
		<div className='w-[45%]'>
		<h4 className='mb-4'>"MUSIC"</h4>
		<p>
			Lorem ipsum dolor sit amet. Ea incidunt incidunt ut vitae temporibus aut asperiores quasi 
			At possimus voluptatem. Vel aperiam voluptatum eum iusto molestiae aut illo officiis eos aspernatur 
			exercitationem est veritatis fugiat eum magnam aspernatur. Ex accusantium harum qui molestiae corrupti 
			et omnis molestiae vel voluptatibus inventore est incidunt dolore aut explicabo quas qui perferendis itaque.
		</p>
		<Link to="/akothee"><button className='mt-4'>READ MORE</button></Link>
		</div>
		<div className='w-[50%] flex justify-center'  >
			<img src={BonMwiru} alt='woman playing instrument' className='w-[50%]'/>
		</div>
	</div>

	<div className='flex items-center p-8'>
		
		<div className='w-[45%] '>
		<h4 className='mb-4'>"MOTHER & SON"</h4>
		<p>
			Lorem ipsum dolor sit amet. Ea incidunt incidunt ut vitae temporibus aut asperiores quasi 
			At possimus voluptatem. Vel aperiam voluptatum eum iusto molestiae aut illo officiis eos aspernatur 
			exercitationem est veritatis fugiat eum magnam aspernatur. Ex accusantium harum qui molestiae corrupti 
			et omnis molestiae vel voluptatibus inventore est incidunt dolore aut explicabo quas qui perferendis itaque.
		</p>
		<Link to="/juma"><button className='mt-4'>READ MORE</button></Link>
		</div>
		<div className='w-[50%] flex justify-center'  >
			<img src={KamyosoTwo} alt='elephant and calf'  className='w-[50%]'/>
			</div>
	</div>

	<div className='flex items-center p-8'>
		<div className='w-[50%] flex justify-center'  >
			<img src={Kupoayo} alt='woman' className='w-[50%]'/>
			</div>
		<div className='w-[45%] '>
		<h4 className='mb-4'>"WOMAN"</h4>
		<p>
			Lorem ipsum dolor sit amet. Ea incidunt incidunt ut vitae temporibus aut asperiores quasi 
			At possimus voluptatem. Vel aperiam voluptatum eum iusto molestiae aut illo officiis eos aspernatur 
			exercitationem est veritatis fugiat eum magnam aspernatur. Ex accusantium harum qui molestiae corrupti 
			et omnis molestiae vel voluptatibus inventore est incidunt dolore aut explicabo quas qui perferendis itaque.
		</p>
		<Link to="/mary"><button className='mt-4'>READ MORE</button></Link>
		</div>
	</div>
	
	<div className='flex items-center p-8'>
		
		<div className='w-[50%] '>
		<h4 className='mb-4'>"BEAUTIFUL TRADITION"</h4>
		<p>
			Lorem ipsum dolor sit amet. Ea incidunt incidunt ut vitae temporibus aut asperiores quasi 
			At possimus voluptatem. Vel aperiam voluptatum eum iusto molestiae aut illo officiis eos aspernatur 
			exercitationem est veritatis fugiat eum magnam aspernatur. Ex accusantium harum qui molestiae corrupti 
			et omnis molestiae vel voluptatibus inventore est incidunt dolore aut explicabo quas qui perferendis itaque.
		</p>
		<Link to="/akachi"><button className='mt-4'>READ MORE</button></Link>
		</div>
		<div className='w-[50%] flex justify-center'  >
			<img src={Atus} alt="Maasai woman" className='w-[50%]'/>
		</div>
	</div>
	
	<div className='flex items-center p-8'>
		<div className='w-[50%] flex justify-center'  >
			<img src={Mchechu} alt="cheetar" className='w-[50%]'/>
			</div>
		<div className='w-[50%] '>
		<h4 className='mb-4'>"AGILITY"</h4>
		<p>
			Lorem ipsum dolor sit amet. Ea incidunt incidunt ut vitae temporibus aut asperiores quasi 
			At possimus voluptatem. Vel aperiam voluptatum eum iusto molestiae aut illo officiis eos aspernatur 
			exercitationem est veritatis fugiat eum magnam aspernatur. Ex accusantium harum qui molestiae corrupti 
			et omnis molestiae vel voluptatibus inventore est incidunt dolore aut explicabo quas qui perferendis itaque.
		</p>
		<Link to="/suzie"><button className='mt-4'>READ MORE</button></Link>
		</div>
	</div>

    </div>
    )
}
export default Artwork ;