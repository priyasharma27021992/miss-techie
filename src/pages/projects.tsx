import { useMemo, useState } from 'react';
import {
	IN_PROGRESS_PROJECTS,
	COMPLETED_PROJECTS,
	INCOMPLETED_PROJECTS,
} from '../utils/constants';
import { Project } from '../types/common';

const PROJECT_COMPLETION_STATUS = {
	ALL: 'all',
	COMPLETED: 'completed',
	IN_PROGRESS: 'in_progress',
	IN_COMPLETED: 'in_completed',
} as const;

type ProjectCompletionStatus =
	(typeof PROJECT_COMPLETION_STATUS)[keyof typeof PROJECT_COMPLETION_STATUS];

const PROJECT_OPTIONS: Record<ProjectCompletionStatus, Array<Project>> = {
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
	const [selectedCategory, setSelectedCategory] =
		useState<ProjectCompletionStatus>(PROJECT_COMPLETION_STATUS.ALL);

	const filteredProjects = useMemo(
		() => PROJECT_OPTIONS[selectedCategory],
		[selectedCategory]
	);

	return (
		<section className='min-h-screen bg-cyan-700 py-16'>
			<div className='max-w-2xl lg:max-w-7xl px-4 mx-auto'>
				<h1 className='mb-10 text-3xl sm:text-4xl font-extrabold text-center'>
					Projects at glance
				</h1>
				<div className='flex flex-col sm:flex-row gap-4 mb-8'>
					<label
						htmlFor='project-category'
						className='font-semibold text-lg'>
						Select Project Category
					</label>
					<select
						id='project-category'
						className='capitalize border border-gray-300 px-3 py-2 rounded-md text-gray-700'
						onChange={(e) =>
							setSelectedCategory(e.target.value as ProjectCompletionStatus)
						}>
						{Object.values(PROJECT_COMPLETION_STATUS).map((option) => (
							<option value={option}>{option.split('_').join(' ')}</option>
						))}
					</select>
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
					{filteredProjects.map((project) => (
						<div
							key={project.name}
							className='bg-white border-gray-200 rounded-lg shadow-xl transition hover:shadow-2xl p-5'>
							<img src='' />
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
		</section>
	);
};

export default Projects;
