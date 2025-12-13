import { useMemo, useState } from 'react';
import {
	IN_PROGRESS_PROJECTS,
	COMPLETED_PROJECTS,
	INCOMPLETED_PROJECTS,
} from '../utils/constants';
import { Project } from '../types/common';
import { ImageSlideShow } from '../components/ui/ImageSlideShow';
import { DropdownSelect } from '../components/ui/DropdownSelect';

const PROJECT_COMPLETION_STATUS = {
	ALL: 'ALL',
	COMPLETED: 'COMPLETED',
	IN_PROGRESS: 'IN_PROGRESS',
	IN_COMPLETED: 'IN_COMPLETED',
};

const PROJECT_OPTIONS: Record<string, Array<Project>> = {
	[PROJECT_COMPLETION_STATUS.ALL]: [
		...COMPLETED_PROJECTS,
		...IN_PROGRESS_PROJECTS,
		...INCOMPLETED_PROJECTS,
	],
	[PROJECT_COMPLETION_STATUS.COMPLETED]: COMPLETED_PROJECTS,
	[PROJECT_COMPLETION_STATUS.IN_PROGRESS]: IN_PROGRESS_PROJECTS,
	[PROJECT_COMPLETION_STATUS.IN_COMPLETED]: INCOMPLETED_PROJECTS,
};

const Projects = () => {
	const [selectedCategory, setSelectedCategory] = useState<string>(
		PROJECT_COMPLETION_STATUS.ALL
	);

	const filteredProjects = useMemo(
		() => PROJECT_OPTIONS[selectedCategory],
		[selectedCategory]
	);

	return (
		<section className='min-h-screen bg-cyan-700 py-16'>
			<div className='max-w-2xl lg:max-w-7xl px-4 mx-auto'>
				<h1 className='mb-10 text-3xl sm:text-4xl font-extrabold text-center text-white'>
					Projects at glance
				</h1>
				<div className='flex flex-col sm:flex-row gap-4 mb-8'>
					<label
						htmlFor='project-category'
						className='font-semibold text-lg text-white'>
						Select Project Category
					</label>
					<DropdownSelect
						options={Object.keys(PROJECT_COMPLETION_STATUS)}
						onSelectCategory={setSelectedCategory}
						selectedCategory={selectedCategory}
					/>
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
					{filteredProjects.map((project, i) => (
						<div
							key={`${project.name} - Number ${i}`}
							className='bg-white border-gray-200 rounded-lg shadow-xl transition hover:shadow-2xl p-5'>
							<a
								href={project.projectUrl}
								target='_blank'>
								<div className='w-full aspect-square shadow-md p-2 m-auto rounded-lg shadow-cyan-700 hover:-translate-y-1 focus-within:-translate-y-1 transition-all duration-300 ease-in'>
									<ImageSlideShow images={project.images} />
								</div>
								<div className='p-6'>
									<h5 className='mb-2 text-2xl fond-bold tracking-tight text-gray-900 dark:text-white'>
										{project.name}
									</h5>
									<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
										{project.description}
									</p>
								</div>
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
