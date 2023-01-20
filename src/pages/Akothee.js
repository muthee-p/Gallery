import React from 'react';
import AkotheeDp from '../assets/akothee.jpg';
import AkotheeOne from '../assets/akothee1.jpg';
import AkotheeTwo from '../assets/akothee2.jpg';
import AkotheeThree from '../assets/akothee3.jpg';
import AkotheeFour from '../assets/akothee4.jpg';
import AkotheeFive from '../assets/akothee5.jpg';
import AkotheeSix from '../assets/akothee6.jpg';

const Akothee = () => {
  return (
    <div className="content">
    <h2 className='mb-4 text-center'>AKOTHEE WINNIE </h2>
    <div className='flex justify-center items-center mb-12'>
    <img src={AkotheeDp} className='w-[30%] rounded-2xl' />
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
				<img src={ AkotheeOne} />
			</div>
			<h5>Id quisquam quia eos dolorem doloribus</h5>
			<p><span>Material:</span> Canvas</p>
			<p><span>Dimensions:</span>32 x 40 in</p>
		</div>

		<div className='w-[50%] m-4 p-2'>
			<div className=' h-[36rem] flex justify-center mb-4'>
				<img src={AkotheeTwo} />
			</div>
			<h5>Id quisquam quia eos dolorem doloribus</h5>
			<p><span>Material:</span> Canvas</p>
			<p><span>Dimensions:</span>32 x 40 in</p>
		</div>
	</div>

	<div className='flex justify-around w-[100%] text-center'>
		<div className='w-[50%] m-4 p-2'>
			<div className=' h-[36rem] flex justify-center mb-4'>
				<img src={ AkotheeThree} />
			</div>
		<h5>Id quisquam quia eos dolorem doloribus</h5>
		<p><span>Material:</span> Canvas</p>
		<p><span>Dimensions:</span>32 x 40 in</p>
		</div>

		<div className='w-[50%] m-4 p-2'>
			<div className=' h-[36rem] flex justify-center mb-4'>
				<img src={ AkotheeFour} />
			</div>
		<h5>Id quisquam quia eos dolorem doloribus</h5>
		<p><span>Material:</span> Canvas</p>
		<p><span>Dimensions:</span>32 x 40 in</p>
		</div>
	</div>

	<div className='flex justify-around w-[100%] text-center'>
		<div className='w-[50%] m-4 p-2'>
			<div className=' h-[36rem] flex justify-center mb-4'>
				<img src={ AkotheeFive} />
			</div>
		<h5>Id quisquam quia eos dolorem doloribus</h5>
		<p><span>Material:</span> Canvas</p>
		<p><span>Dimensions:</span>32 x 40 in</p>
		</div>

		<div className='w-[50%] m-4 p-2'>
			<div className=' h-[36rem] flex justify-center mb-4'>
				<img src={ AkotheeSix} />
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
export default Akothee ;