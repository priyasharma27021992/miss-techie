import PortfolioImg from "../assets/portfolio-priya.jpg";

import "../styles/pure-particle.scss";
// import SkillSetProgressBar from "../components/SkillSetProgressBar";
import PriyaResume from "../assets/priya-sharma-resume-2024.pdf";
import { IconButton } from "../components/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {
  // return (
  //   <main>
  //     <section className="w-screen h-[calc(100vh-5rem)]">
  //       <article className="h-full w-full bg-white dark:bg-gray-900">
  //         <div className="flex flex-col items-center justify-between md:rounded-[3rem] m-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 md:flex-row bg-black text-white">
  //           <div className="flex flex-col p-5 md:p-10 max-w-2xl">
  //             <h1 className="mb-2 text-2xl font-bold animate-typing overflow-hidden whitespace-nowrap">
  //               Hello!
  //             </h1>
  //             <p className="m-0 normal-case animate-typing overflow-hidden whitespace-nowrap">
  //               I am Priya Sharma from Delhi(India)!
  //             </p>
  //             <p className="font-light mb-4 w-xl">
  //               "With a decade-long journey in frontend development, I've honed
  //               my skills over the past six years to become a specialist in this
  //               field. My expertise lies in crafting dynamic and engaging user
  //               interfaces using a diverse set of tools and technologies. I have
  //               extensive experience working with ReactJS, NextJS, Vanilla
  //               JavaScript, Tailwind CSS, Material-UI, and various styling
  //               techniques. Whether it's building responsive layouts,
  //               implementing intricate design elements, or optimizing
  //               performance, I thrive on delivering solutions that seamlessly
  //               blend functionality with aesthetics. My passion for frontend
  //               development drives me to stay updated with the latest industry
  //               trends and best practices, ensuring that I consistently deliver
  //               high-quality results that exceed expectations."
  //             </p>
  //             <div className="">
  //               <a
  //                 href=""
  //                 className="font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
  //               >
  //                 Want to know more?
  //               </a>
  //               <div className="flex flex-row justify-start flex-wrap">
  //                 <a
  //                   href="https://github.com/priyasharma27021992"
  //                   target="_blank"
  //                 >
  //                   <img
  //                     src={GithubSvg}
  //                     alt="Github"
  //                     className="m-3 w-10 h-10"
  //                   />
  //                 </a>
  //                 <a
  //                   href="https://www.linkedin.com/in/priya-sharma-ab86ba46/"
  //                   target="_blank"
  //                 >
  //                   <img
  //                     src={LinkedInSvg}
  //                     alt="LinkedIn"
  //                     className="m-3 w-10 h-10"
  //                   />
  //                 </a>
  //               </div>
  //             </div>
  //             <SkillSetProgressBar />
  //           </div>
  //           <aside>
  //             <figure>
  //               <img
  //                 className="object-cover rounded-full shadow-2xl aspect-square min-w-[200px] w-[50vw]"
  //                 src={PortfolioImg}
  //                 alt="Priya Image"
  //               />
  //             </figure>
  //           </aside>
  //         </div>
  //       </article>
  //     </section>
  //   </main>
  // );
  return (
    <main className="w-screen h-screen bg-cyan-700">
      <section className="flex justify-around items-center w-screen h-screen">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-4xl">Hi,</h1>
          <h4 className="font-bold text-4xl">I'm Priya Sharma</h4>
          <h5 className="text-base">
            Web Development | React | Nextjs | JavaScript
          </h5>
          <div className="flex flex-row">
            <IconButton
              children={
                <FontAwesomeIcon icon={faInstagram} aria-label="instagram" />
              }
              href=""
            />
            <IconButton
              children={<FontAwesomeIcon icon={faGithub} aria-label="github" />}
              href=""
            />
            <IconButton
              children={
                <FontAwesomeIcon icon={faLinkedin} aria-label="linkedin" />
              }
              href=""
            />
          </div>
          <button className="relative group max-w-[200px] min-h-[50px] border-2 border-white m-2">
            <Link
              to={PriyaResume}
              download
              className="w-full h-full flex justify-center items-center"
            >
              <button className="">
                <span className="block group-hover:hidden transition-all duration-[650ms] ease-out">
                  CV/Resume
                </span>
                <span className="hidden group-hover:block group-hover:justify-center group-hover:items-center absolute transition-all duration-[650ms] ease-out">
                  <svg
                    className="fill-current w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                </span>
              </button>
            </Link>
          </button>
        </div>
        <div>
          <aside>
            <figure>
              <img
                className="object-cover rounded-full shadow-2xl aspect-square min-w-[200px] w-[30vw]"
                src={PortfolioImg}
                alt="Priya Image"
              />
            </figure>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Home;
