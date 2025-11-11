import PortfolioImg from '../assets/portfolio-priya.jpg';

import '../styles/pure-particle.scss';
import PriyaResume from '../assets/Priya_Sharma_Resume_EU_2025.pdf';
import { IconButton } from '../components/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faInstagram,
	faGithub,
	faLinkedin,
	faCentercode,
} from '@fortawesome/free-brands-svg-icons';

const Home = () => {
	return (
		<main className='w-screen min-h-screen bg-cyan-700 py-20'>
			<section className='flex flex-col md:flex-row justify-center md:justify-between items-center w-screen h-screen px-8 md:px-20'>
				<div className='flex flex-col gap-2 m-5'>
					<h2 className='font-bold text-3xl sm:text-4xl leading-tight'>
						Hi,
						<br />
						I'm <span className='text-white'>Priya Sharma</span>
					</h2>

					<p className='text-base sm:text-lg text-white/90 mt-3 max-w-[400px]'>
						Frontend Engineer • React • Next.js • JavaScript • CSS • Node.js •
						Tailwind • React Testing Library • Cypress
					</p>
					<div className='flex gap-3 mt-4'>
						<IconButton
							children={
								<FontAwesomeIcon
									icon={faInstagram}
									aria-label='instagram'
									size='lg'
								/>
							}
							href='https://www.instagram.com/trippygirl2702'
							iconClassName='hover:bg-pink-600 hover:text-white transition-all duration-300 ease-in-out'
						/>
						<IconButton
							children={
								<FontAwesomeIcon
									icon={faGithub}
									aria-label='github'
								/>
							}
							href='https://github.com/priyasharma27021992'
							iconClassName='hover:bg-black hover:text-white transition-all duration-300 ease-in-out'
						/>
						<IconButton
							children={
								<FontAwesomeIcon
									icon={faLinkedin}
									aria-label='linkedin'
								/>
							}
							href='https://www.linkedin.com/in/priya-sharma-ab86ba46/'
							iconClassName='hover:bg-sky-800 hover:text-white transition-all duration-300 ease-in-out'
						/>
						<IconButton
							children={
								<FontAwesomeIcon
									icon={faCentercode}
									aria-label='leetcode'
								/>
							}
							href='https://leetcode.com/u/priyasharma2702/'
							iconClassName='hover:bg-black hover:text-white transition-all duration-300 ease-in-out'
						/>
					</div>
					<button className='relative group max-w-[200px] min-h-[50px] m-2'>
						<a
							href={PriyaResume}
							download
							className='mt-4 group border-2 border-white text-white px-6 py-3 inline-flex items-center gap-2 hover:bg-white hover:text-cyan-700 transition-all duration-300'>
							<span>Download Resume</span>
							<span className='opacity-0 transition-all duration-[650ms] ease-out group-hover:opacity-100'>
								<svg
									className='fill-current w-4 h-4'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 20'>
									<path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' />
								</svg>
							</span>
						</a>
					</button>
				</div>
				<div>
					<aside>
						<figure>
							<img
								className='object-cover rounded-full shadow-2xl aspect-square w-[250px] md:w-[320px] ring-4 ring-white/20'
								src={PortfolioImg}
								alt='Priya Image'
							/>
						</figure>
					</aside>
				</div>
			</section>
		</main>
	);
};

export default Home;
