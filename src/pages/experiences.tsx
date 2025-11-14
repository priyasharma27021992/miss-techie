import { ExperienceType } from '../types/common';
import { JOB_EXPERIENCES } from '../utils/constants';

const Experiences = () => {
	return (
		<div className='max-w-4xl mx-auto p-6 mt-20 max-h-150vh h-auto'>
			<div className='hidden md:block md:absolute left-1/2 w-0.5 z-1 bg-cyan-700 h-full -translate-x-1/2'></div>

			{JOB_EXPERIENCES?.map((exp: ExperienceType) => (
				<>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 animate-fadeInLeftToRight'>
						{/* left content */}
						<div className='text-right mr-5 bg-cyan-700 rounded-md p-5'>
							<p className='text-white'>{exp?.title}</p>
							<p className='text-gray-200'>{exp?.description}</p>
							<span className='text-sm text-white'>{exp?.time}</span>
						</div>
						<div className='hidden md:block md:absolute left-1/2 -translate-x-1/2'>
							<div className='flex items-center gap-4'>
								<div className='w-8 h-8 z-2 bg-cyan-700 rounded-full'></div>
							</div>
						</div>
						{/* right content */}
						<div className='text-right md:text-left pl-6'>
							<h3 className='text-gray-800'>{exp?.company}</h3>
							<p className='text-white'>{exp?.location}</p>
						</div>
					</div>
				</>
			))}
		</div>
	);
};

export default Experiences;
