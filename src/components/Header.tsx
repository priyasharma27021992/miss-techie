import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Header = () => {
	const [openMobileMenu, setOpenMobileMenu] = useState(false);
	const toggleMenu = () => {
		setOpenMobileMenu(!openMobileMenu);
	};
	return (
		<header>
			<button
				className={classNames(
					'absolute top-10 md:top-20 right-10 md:right-20 w-10 md:w-20 h-4 md:h-16 flex flex-col justify-between curson-pointer z-[1500] transition-transform duration-[650ms] ease-out',
					{
						'transform -rotate-45': openMobileMenu,
					}
				)}
				onClick={toggleMenu}>
				<div
					className={classNames(
						'w-1/2 bg-white h-[4px] rounded-xl [transform-origin:right] [transition-timing-function:cubic-bezier(0.54,0.81,0.57,0.57)] transition-transform duration-[650ms]',
						{
							'[transform:rotate(-450deg)_translate(0.8rem)]': openMobileMenu,
						}
					)}></div>
				<div className='w-full bg-white h-[4px] rounded-xl'></div>
				<div
					className={classNames(
						'w-1/2 flex self-end bg-white h-[4px] rounded-xl [transform-origin:left] [transition-timing-function:cubic-bezier(0.54,0.81,0.57,0.57)] transition-transform duration-[650ms]',
						{
							'[transform:rotate(-450deg)_translate(-0.8rem)]': openMobileMenu,
						}
					)}></div>
			</button>
			<nav
				className={classNames(
					'w-screen fixed z-50 bg-black/80 transition-all duration-[650ms] [transition-timing-function:cubic-bezier(1,0,0,1)]',
					{ 'top-0': openMobileMenu },
					{ 'top-[-100vh] rounded-b-full': !openMobileMenu }
				)}>
				<ul
					className={classNames(
						'list-none w-screen md:w-[80%] m-auto h-screen flex flex-col md:flex-row flex-wrap justify-evenly md:justify-center lg:justify-between items-center text-white text-4xl md:text-6xl font-bold'
					)}>
					<li>
						<Link
							to='/'
							onClick={toggleMenu}>
							Home
						</Link>
					</li>
					<li>
						<Link
							to='/projects'
							onClick={toggleMenu}>
							Projects
						</Link>
					</li>
					<li>
						<Link
							to='/contact'
							onClick={toggleMenu}>
							Contact
						</Link>
					</li>
					<li>
						<Link
							to='/job-experiences'
							onClick={toggleMenu}>
							Job Experiences
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
