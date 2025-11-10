import { useState } from 'react';
import {
	IN_PROGRESS_PROJECTS,
	COMPLETED_PROJECTS,
	INCOMPLETED_PROJECTS,
} from '../utils/constants';
import { Project } from '../types/common';

const Projects = () => {
	const [filteredProjects, setFilteredProjects] = useState<Array<Project>>([
		...COMPLETED_PROJECTS,
		...IN_PROGRESS_PROJECTS,
		...INCOMPLETED_PROJECTS,
	]);

	enum ProjectOption {
		ALL = 'all',
		COMPLETED = 'completed',
		IN_PROGRESS = 'in_progress',
		IN_COMPLETED = 'in_completed',
	}

	const PROJECT_OPTIONS: Record<ProjectOption, Array<Project>> = {
		[ProjectOption.ALL]: [
			...COMPLETED_PROJECTS,
			...IN_PROGRESS_PROJECTS,
			...INCOMPLETED_PROJECTS,
		],
		[ProjectOption.COMPLETED]: COMPLETED_PROJECTS,
		[ProjectOption.IN_PROGRESS]: IN_PROGRESS_PROJECTS,
		[ProjectOption.IN_COMPLETED]: INCOMPLETED_PROJECTS,
	};

	function isValidProjectOption(input: string): input is ProjectOption {
		return Object.values(ProjectOption).includes(input as ProjectOption);
	}

	return (
		<div className='max-w-2xl lg:max-w-7xl px-4 py-16 mx-auto'>
			<h1 className='mb-2 lg:mb-10 text-4xl font-extrabold text-center'>
				Projects at glance
			</h1>
			<div className='my-4'>
				<label
					htmlFor='project-category'
					className='font-semibold text-lg mx-2 italic'>
					Select Project Category
				</label>
				<div>
					<select
						id='project-category'
						className='capitalize text-lg'
						onChange={(e) => {
							if (isValidProjectOption(e.target.value)) {
								setFilteredProjects(PROJECT_OPTIONS[e.target.value]);
							} else {
								console.warn('Select valid option');
							}
						}}>
						{Object.keys(PROJECT_OPTIONS).map((ele) => (
							<option value={ele}>{ele.split('_').join(' ')}</option>
						))}
					</select>
				</div>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
				{filteredProjects.map((project) => (
					<div
						key={project.name}
						className='max-w-sm bg-white border-gray-200 dark:border-gray-600 rounded-lg shadow-xl transform transition-transform hover:scale-105'>
						<a
							href={project.projectUrl}
							target='_blank'>
							<div className='relative w-full h-96'>
								<iframe
									src={project.projectUrl}
									title={project.name}
									className='w-full h-full border-none'></iframe>
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
	);
};

export default Projects;
