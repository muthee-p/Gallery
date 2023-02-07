import React from 'react';
import { Link } from 'react-router-dom';
import SuzieDp from '../assets/suzie.jpg';
import SuzieOne from '../assets/suzie1.jpg';
import SuzieTwo from '../assets/suzie2.jpg';
import SuzieThree from '../assets/suzie3.jpg';
import SuzieFour from '../assets/suzie4.jpg';
import SuzieFive from '../assets/suzie5.jpg';
import SuzieSix from '../assets/suzie6.jpg';

const Suzie = () => {
  return (
    <div >
    <h2 className='mb-4 text-center'>SUZIE MOBOYOKO </h2>
    <div className='flex justify-center items-center mb-12'>
    <img src={SuzieDp} className='w-[30%] rounded-2xl' />
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
		<Link to='/suzieslide'>
			<div className=' h-[36rem] flex justify-center mb-4'>
				<img src={ SuzieOne} />
			</div>
			</Link>
			<h5>Id quisquam quia eos dolorem doloribus</h5>
			<p><span>Material:</span> Canvas</p>
			<p><span>Dimensions:</span>32 x 40 in</p>
		</div>

		<div className='w-[50%] m-4 p-2'>
			<div className=' h-[36rem] flex justify-center mb-4'>
				<img src={SuzieTwo} />
			</div>
			<h5>Id quisquam quia eos dolorem doloribus</h5>
			<p><span>Material:</span> Canvas</p>
			<p><span>Dimensions:</span>32 x 40 in</p>
		</div>
	</div>

	<div className='flex justify-around w-[100%] text-center'>
		<div className='w-[50%] m-4 p-2'>
			<div className=' h-[36rem] flex justify-center mb-4'>
				<img src={ SuzieThree} />
			</div>
		<h5>Id quisquam quia eos dolorem doloribus</h5>
		<p><span>Material:</span> Canvas</p>
		<p><span>Dimensions:</span>32 x 40 in</p>
		</div>

		<div className='w-[50%] m-4 p-2'>
			<div className=' h-[36rem] flex justify-center mb-4'>
				<img src={ SuzieFour} />
			</div>
		<h5>Id quisquam quia eos dolorem doloribus</h5>
		<p><span>Material:</span> Canvas</p>
		<p><span>Dimensions:</span>32 x 40 in</p>
		</div>
	</div>

	<div className='flex justify-around w-[100%] text-center'>
		<div className='w-[50%] m-4 p-2'>
			<div className=' h-[36rem] flex justify-center mb-4'>
				<img src={ SuzieFive} />
			</div>
		<h5>Id quisquam quia eos dolorem doloribus</h5>
		<p><span>Material:</span> Canvas</p>
		<p><span>Dimensions:</span>32 x 40 in</p>
		</div>

		<div className='w-[50%] m-4 p-2'>
			<div className=' h-[36rem] flex justify-center mb-4'>
				<img src={ SuzieSix} />
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
export default Suzie ;