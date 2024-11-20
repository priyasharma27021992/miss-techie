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
  return (
    <main className="w-screen h-screen bg-cyan-700">
      <section className="flex flex-col md:flex-row justify-evenly md:justify-around items-center w-screen h-screen">
        <div className="flex flex-col gap-2 m-5">
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
