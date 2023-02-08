import React from 'react';
import { Link } from 'react-router-dom';
import Daudi from '../assets/daudi.jpg';
import Atus from '../assets/Atus.jpeg';
import Akachi from '../assets/akachi.jpg';
import Mary from '../assets/mary.jpg';
import BonMwiru from '../assets/bonmwiru.jpeg';
import Suzie from '../assets/suzie.jpg';


const Artist = () => {
  return (
    <div className='mt-36 pl-8'>

    <h2 className='text-center'>MEET OUR ARTISTS</h2>
	<div className='flex items-center p-8'>
		<div className='w-[50%] flex justify-center'  >
			<img src={Daudi}  className='w-[50%]' alt="daudi dp"/>
			</div>
		<div className='w-[45%] '>
		<h4 className='mb-4'>Kupoayo</h4>
		<p>
			Lorem ipsum dolor sit amet. Ea incidunt incidunt ut vitae temporibus aut asperiores quasi 
			At possimus voluptatem. Vel aperiam voluptatum eum iusto molestiae aut illo officiis eos aspernatur 
			exercitationem est veritatis fugiat eum magnam aspernatur. Ex accusantium harum qui molestiae corrupti 
			et omnis molestiae vel voluptatibus inventore est incidunt dolore aut explicabo quas qui perferendis itaque.
		</p>
		<Link to="/artists/kupoayo"><button className='mt-4'>READ MORE</button></Link>
		</div>
	</div>

	<div className='flex items-center p-8'>
		
		<div className='w-[45%]'>
		<h4 className='mb-4'>James Obonyo</h4>
		<p>
			Lorem ipsum dolor sit amet. Ea incidunt incidunt ut vitae temporibus aut asperiores quasi 
			At possimus voluptatem. Vel aperiam voluptatum eum iusto molestiae aut illo officiis eos aspernatur 
			exercitationem est veritatis fugiat eum magnam aspernatur. Ex accusantium harum qui molestiae corrupti 
			et omnis molestiae vel voluptatibus inventore est incidunt dolore aut explicabo quas qui perferendis itaque.
		</p>
		<Link to="/artists/jamesobonyo"><button className='mt-4'>READ MORE</button></Link>
		</div>
		<div className='w-[50%] flex justify-center'  >
			<img src={Atus} alt="woman"  className='w-[50%]'/>
		</div>
	</div>

	<div className='flex items-center p-8'>
		
		<div className='w-[45%] '>
		<h4 className='mb-4'> Bon Mwiru</h4>
		<p>
			Lorem ipsum dolor sit amet. Ea incidunt incidunt ut vitae temporibus aut asperiores quasi 
			At possimus voluptatem. Vel aperiam voluptatum eum iusto molestiae aut illo officiis eos aspernatur 
			exercitationem est veritatis fugiat eum magnam aspernatur. Ex accusantium harum qui molestiae corrupti 
			et omnis molestiae vel voluptatibus inventore est incidunt dolore aut explicabo quas qui perferendis itaque.
		</p>
		<Link to="/juma"><button className='mt-4'>READ MORE</button></Link>
		</div>
		<div className='w-[50%] flex justify-center'  >
			<img src={BonMwiru}  className='w-[50%]' alt='woman playing instrument'/>
			</div>
	</div>

	<div className='flex items-center p-8'>
		<div className='w-[50%] flex justify-center'  >
			<img src={Mary}  className='w-[50%]'/>
			</div>
		<div className='w-[45%] '>
		<h4 className='mb-4'>Mary</h4>
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
		<h4 className='mb-4'>Akachi</h4>
		<p>
			Lorem ipsum dolor sit amet. Ea incidunt incidunt ut vitae temporibus aut asperiores quasi 
			At possimus voluptatem. Vel aperiam voluptatum eum iusto molestiae aut illo officiis eos aspernatur 
			exercitationem est veritatis fugiat eum magnam aspernatur. Ex accusantium harum qui molestiae corrupti 
			et omnis molestiae vel voluptatibus inventore est incidunt dolore aut explicabo quas qui perferendis itaque.
		</p>
		<Link to="/akachi"><button className='mt-4'>READ MORE</button></Link>
		</div>
		<div className='w-[50%] flex justify-center'  >
			<img src={Akachi}  className='w-[50%]'/>
		</div>
	</div>
	
	<div className='flex items-center p-8'>
		<div className='w-[50%] flex justify-center'  >
			<img src={Suzie}  className='w-[50%]'/>
			</div>
		<div className='w-[50%] '>
		<h4 className='mb-4'>Suzie</h4>
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
export default Artist ;