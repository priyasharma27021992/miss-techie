import { ExperienceType } from '../types/common';
import { JOB_EXPERIENCES } from '../utils/constants';

const Experiences = () => {
	return (
		<section className='bg-cyan-700'>
			<div className='max-w-4xl mx-auto py-[80px] px-6 h-auto'>
				{JOB_EXPERIENCES?.map((exp: ExperienceType) => (
					<>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 animate-fade-in-left-to-right relative'>
							{/* left content */}
							<div className='text-right mr-5 rounded-md p-2 md:p-5 shadow-xs shadow-white'>
								<p className='text-white'>{exp?.title}</p>
								<p className='text-gray-200 text-sm md:text-base'>
									{exp?.description}
								</p>
								<span className='text-sm text-white'>{exp?.time}</span>
							</div>
							<div className='hidden md:block md:absolute left-1/2 -translate-x-1/2'>
								<div className='flex items-center gap-4'>
									<div className='w-8 h-8 z-2 bg-white rounded-full'></div>
								</div>
							</div>
							<div className='hidden md:block md:absolute left-1/2 h-full z-1 border-dotted border-l-2 top-8 -translate-x-1/2'></div>

							{/* right content */}
							<div className='text-right md:text-left pl-6'>
								<h3 className='text-gray-800'>{exp?.company}</h3>
								<p className='text-white'>{exp?.location}</p>
							</div>
						</div>
					</>
				))}
			</div>
		</section>
	);
};

export default Experiences;
