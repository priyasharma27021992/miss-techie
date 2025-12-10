import { Project } from '../types/common';

export const GITHUB_BASE_URL = 'https://priyasharma27021992.github.io';
export const COMPLETED_PROJECTS: Array<Project> = [
	{
		name: 'Portfolio',
		description:
			'Ofcourse, my own portfolio which is made using mainly reactjs, vite, typescript, sass, tailwind. Also, it is in progress',
		images: [
			{
				src: 'images/projects/portfolio.png',
				alt: 'Portfolio',
			},
		],
		projectUrl: `${GITHUB_BASE_URL}/miss-techie/`,
	},
	{
		name: 'Lemonpeel',
		description:
			'Helped my spouse to create some parts of this static website which is used to make ai videos',
		images: [{ src: 'images/projects/lemonpeel.png', alt: 'Lemonpeel' }],
		projectUrl: 'https://lemonpeel.ai/',
	},
	{
		name: 'Nanhe Khwab Donations',
		description:
			'Created a donation special page mainly for Christmas to give the donors options',
		images: [
			{
				src: 'images/projects/nanhe-khwab-donations.png',
				alt: 'Nanhe Khwab Donations',
			},
		],
		projectUrl: 'https://nanhe-khwab-donation-page.netlify.app/',
	},
	{
		name: 'Simple Calculator',
		description: 'A pretty simple calculator ',
		images: [{ src: 'images/projects/simple-calc.png', alt: 'Calculator' }],
		projectUrl: `${GITHUB_BASE_URL}//simple-calculator/`,
	},
	{
		name: 'Url Shortner',
		description: 'Fed up with long urls? Use the short ones',
		images: [{ src: 'images/projects/short-url.png', alt: 'Short Url' }],
		projectUrl: `https://url-shortner-ten-mu.vercel.app/`,
	},
];

export const IN_PROGRESS_PROJECTS: Array<Project> = [
	{
		name: 'Nanhe Khwab',
		description:
			'NGO site made from bootstrap, jquery, html, css and hoisted on aws but making it on next.js using taiwind, will just generate a static page',
		images: [
			{ src: 'images/projects/nanhe-khwab/1.png', alt: 'Nanhe Khwab 1' },
			{ src: 'images/projects/nanhe-khwab/2.png', alt: 'Nanhe Khwab 2' },
			{ src: 'images/projects/nanhe-khwab/3.png', alt: 'Nanhe Khwab 3' },
		],
		projectUrl: 'https://nanhekhwab.in/',
	},
	{
		name: 'Movie Explorer',
		description: 'Made on next.js using SSR, ISR concepts, uses IMDB api',
		images: [
			{
				src: 'images/projects/movie-explorer.jpg',
				alt: 'Movie Explorer',
			},
		],
		projectUrl: 'https://movie-explorer-six-mu.vercel.app/',
	},
];

export const INCOMPLETED_PROJECTS: Array<Project> = [
	{
		name: 'Find My Shoes Ecommerce App',
		description:
			'This Shoes ecommerece app is in-progress and made using react mainly',
		images: [{ src: 'images/projects/ecommerce-page.png', alt: 'E-commerce' }],
		projectUrl: `${GITHUB_BASE_URL}/ecommerce-app/`,
	},
];

export const JOB_EXPERIENCES = [
	{
		title: 'Frontend Developer',
		description: `Work on client facing e-commerce applications live in 10 EU markets
    which uses next.js 13, tailwind, react, html5, css, nodejs. Has more than 90% lighthouse ratings on most 
    metrics and abide by EU Web accessiblity feature`,
		time: 'March 2025 – Present',
		company: 'Xebia Poland(Earlier PGS Software)',
		location: 'Wroclaw, Poland',
	},
	{
		title: 'Lead Consultant (Web Developer)',
		description: `Collaborate with cross-functional teams, including designers,
          backend developers, and stakeholders, to design and implement robust
            frontend applications using React, HTML5, CSS3, NextJS 13, theme-ui,
            tailwind css and styled-components.`,
		time: 'October 2021 – Present',
		company: 'Xebia',
		location: 'Gurgaon, India',
	},
	{
		title: 'Senior Associate (Web Developer)',
		description: `Developed web pages for the client using React, Redux, Material UI, and Saga. Modernized old PHP-based pages into React. Managed project tasks with Jira and maintained code on GitHub. Contributed to the success of a prominent logistics company`,
		time: 'Sep 2018 – April 2020',
		company: 'Nagarro Software Pvt Limited',
		location: 'Gurgaon, India',
	},
	{
		title: 'Senior Technical Analyst (Full Stack Developer)',
		description: `Worked on the backend and frontend of the Retail Deposits project using Java, React JS,
    and PL/SQL. Led the release process and maintained application integrity. Enhanced SQL database functionality.
    Collaborated effectively with the UK-based client.`,
		time: 'Jan 2018 – Sep 2018',
		company: 'Acorn Machine Intelligence Labs ',
		location: 'Gurgaon, India',
	},
	{
		title: 'Associate Technology (Specialist Developer)',
		description: ` Contributed to the development and maintenance of the AIM system using Java, J2EE, and
Oracle. Managed account and portfolio data for various clients. Led the deployment process and maintained version control.
 Played a key role in process improvement and client communication.`,
		time: 'Sept 2013– Dec 2017',
		company: 'Publicis.Sapient',
		location: 'Gurgaon, India',
	},
];
