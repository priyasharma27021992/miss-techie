import PortfolioImg from "../assets/portfolio-priya.jpg";

import "../styles/pure-particle.scss";
import PriyaResume from "../assets/priya-sharma-resume-2024.pdf";
import { IconButton } from "../components/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faCentercode,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const lastUpdatedDate = new Date("01-31-2025");
  lastUpdatedDate.setHours(0, 0, 0, 0);
  return (
    <main className="w-screen h-screen bg-cyan-700">
      <section className="flex flex-col md:flex-row justify-evenly md:justify-around items-center w-screen h-screen">
        <div className="flex flex-col gap-2 m-5">
          <h1 className="font-bold text-4xl">Hi,</h1>
          <h4 className="font-bold text-4xl">I'm Priya Sharma</h4>
          <h5 className="text-base">
            Web Development | React | Nextjs | JavaScript| CSS| Node Js| Python
          </h5>
          <div className="flex flex-row">
            <IconButton
              children={
                <FontAwesomeIcon
                  icon={faInstagram}
                  aria-label="instagram"
                  className=""
                />
              }
              href="https://www.instagram.com/trippygirl2702"
              iconClassName="hover:bg-pink-600 hover:text-white transition-all duration-300 ease-in-out"
            />
            <IconButton
              children={<FontAwesomeIcon icon={faGithub} aria-label="github" />}
              href="https://github.com/priyasharma27021992"
              iconClassName="hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
            />
            <IconButton
              children={
                <FontAwesomeIcon icon={faLinkedin} aria-label="linkedin" />
              }
              href="https://www.linkedin.com/in/priya-sharma-ab86ba46/"
              iconClassName="hover:bg-sky-800 hover:text-white transition-all duration-300 ease-in-out"
            />
            <IconButton
              children={
                <FontAwesomeIcon icon={faCentercode} aria-label="leetcode" />
              }
              href="https://leetcode.com/u/priyasharma2702/"
              iconClassName="hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
            />
          </div>
          <button className="relative group max-w-[200px] min-h-[50px] border-2 border-white m-2">
            <a
              href={PriyaResume}
              download
              className="w-full h-full flex justify-center items-center relative"
            >
              <span className="block transition-all duration-[650ms] ease-out group-hover:opacity-0">
                CV/Resume
              </span>
              <span className="absolute opacity-0 transition-opacity duration-[650ms] ease-out group-hover:opacity-100">
                <svg
                  className="fill-current w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
              </span>
            </a>
          </button>
          <div className="text-white text-lg">
            Last updated: {lastUpdatedDate.toDateString()}
          </div>
        </div>
        <div>
          <aside>
            <figure>
              <img
                className="object-cover rounded-full shadow-2xl aspect-square min-w-[200px] w-[30vw] hover:scale-110"
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
