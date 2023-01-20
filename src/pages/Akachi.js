import React from 'react';
import AkachiDp from '../assets/akachi.jpg';
import AkachiOne from '../assets/akachi3.jpg';
import AkachiTwo from '../assets/akachi4.jpg';
import AkachiThree from '../assets/akachi5.jpg';
import AkachiFour from '../assets/akachi6.jpg';
import AkachiFive from '../assets/akachi1.jpg';
import AkachiSix from '../assets/akachi2.jpg';

const Akachi = () => {
  return (
    <div className="content">
    <h2 className='mb-4 text-center'>AKACHI MARTIN </h2>
    <div className='flex justify-center items-center mb-12'>
    <img src={AkachiDp} className='w-[30%] rounded-2xl' />
	<div className='w-[50%] p-8'>
		<h3 className='text-center mb-4'>Whom am i? </h3>
		<p>

		Lorem ipsum dolor sit amet. Ea incidunt incidunt ut vitae temporibus aut asperiores quasi At possimus voluptatem. Vel aperiam voluptatum eum iusto molestiae aut illo officiis eos aspernatur exercitationem est veritatis fugiat eum magnam aspernatur. Ex accusantium harum qui molestiae corrupti et omnis molestiae vel voluptatibus inventore est incidunt dolore aut explicabo quas qui perferendis itaque. 
		</p> <br />
		<p>
		Et earum explicabo et laborum blanditiis eum expedita obcaecati vel quia galisum non adipisci officia id assumenda accusamus.

		Rem pariatur similique et similique tempora At dolores veniam non quia vitae. Aut adipisci consequuntur non dignissimos incidunt ex culpa aperiam est molestiae error ut repellendus voluptatem. Non consectetur animi aut minus placeat non maiores rerum. 
		</p> <br />
		<p> Eos aliquam repellat sit perspiciatis cupiditate est soluta dolorum qui aliquam enim ad alias voluptatem est laboriosam quaerat qui sunt quas.

		Id quisquam quia eos dolorem doloribus ab porro ipsa et consequuntur animi rem voluptatem laboriosam non sint sunt. Sed ullam mollitia in provident iusto ut repellendus consequatur sit sapiente quaerat. Eum numquam laborum sed consequatur consequuntur et illum quaerat aut totam quas est quos omnis.
		</p>
	</div>
	</div>

	<div>
	<h3 className='text-center mb-4'>ARTWORKS AVAILABLE</h3>
	<div className='flex justify-around w-[100%] text-center'>
		<div className='w-[50%] m-4 p-2'>
			<div className=' h-[36rem] flex justify-center mb-4'>
				<img src={ AkachiOne} />
			</div>
			<h5>Id quisquam quia eos dolorem doloribus</h5>
			<p><span>Material:</span> Canvas</p>
			<p><span>Dimensions:</span>32 x 40 in</p>
		</div>

		<div className='w-[50%] m-4 p-2'>
			<div className=' h-[36rem] flex justify-center mb-4'>
				<img src={AkachiTwo} />
			</div>
			<h5>Id quisquam quia eos dolorem doloribus</h5>
			<p><span>Material:</span> Canvas</p>
			<p><span>Dimensions:</span>32 x 40 in</p>
		</div>
	</div>

	<div className='flex justify-around w-[100%] text-center'>
		<div className='w-[50%] m-4 p-2'>
			<div className=' h-[36rem] flex justify-center mb-4'>
				<img src={ AkachiThree} />
			</div>
		<h5>Id quisquam quia eos dolorem doloribus</h5>
		<p><span>Material:</span> Canvas</p>
		<p><span>Dimensions:</span>32 x 40 in</p>
		</div>

		<div className='w-[50%] m-4 p-2'>
			<div className=' h-[36rem] flex justify-center mb-4'>
				<img src={ AkachiFour} />
			</div>
		<h5>Id quisquam quia eos dolorem doloribus</h5>
		<p><span>Material:</span> Canvas</p>
		<p><span>Dimensions:</span>32 x 40 in</p>
		</div>
	</div>

	<div className='flex justify-around w-[100%] text-center'>
		<div className='w-[50%] m-4 p-2'>
			<div className=' h-[36rem] flex justify-center mb-4'>
				<img src={ AkachiFive} />
			</div>
		<h5>Id quisquam quia eos dolorem doloribus</h5>
		<p><span>Material:</span> Canvas</p>
		<p><span>Dimensions:</span>32 x 40 in</p>
		</div>

		<div className='w-[50%] m-4 p-2'>
			<div className=' h-[36rem] flex justify-center mb-4'>
				<img src={ AkachiSix} />
			</div>
		<h5>Id quisquam quia eos dolorem doloribus</h5>
		<p><span>Material:</span> Canvas</p>
		<p><span>Dimensions:</span>32 x 40 in</p>
		</div>
	</div>
    </div>
    
    </div>
    )
}
export default Akachi ;