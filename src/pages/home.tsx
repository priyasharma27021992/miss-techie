import PortfolioImg from "../assets/portfolio-priya.jpg";
import GithubSvg from "../assets/github.svg";
import LinkedInSvg from "../assets/linked-in.svg";

import "../styles/pure-particle.scss";
import SkillSetProgressBar from "../components/SkillSetProgressBar";

const Home = () => {
  return (
    <div className="w-screen h-[calc(100vh-5rem)]">
      {Array.from(Array(100).keys()).map(() => (
        <div className="circle-container">
          <div className="circle"></div>
        </div>
      ))}
      <div className="h-full w-full bg-white dark:bg-gray-900">
        <div className="flex flex-col items-center justify-between md:rounded-[3rem] m-auto lg:h-screen max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 md:flex-row bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
          <div className="flex flex-col p-5 md:p-10 max-w-2xl">
            <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white animate-typing overflow-hidden whitespace-nowrap">
              Hello!
            </h1>
            <p className="m-0 normal-case animate-typing overflow-hidden whitespace-nowrap">
              I am Priya Sharma from Delhi(India)!
            </p>
            <p className="font-light mb-4 w-xl">
              "With a decade-long journey in frontend development, I've honed my
              skills over the past six years to become a specialist in this
              field. My expertise lies in crafting dynamic and engaging user
              interfaces using a diverse set of tools and technologies. I have
              extensive experience working with ReactJS, NextJS, Vanilla
              JavaScript, Tailwind CSS, Material-UI, and various styling
              techniques. Whether it's building responsive layouts, implementing
              intricate design elements, or optimizing performance, I thrive on
              delivering solutions that seamlessly blend functionality with
              aesthetics. My passion for frontend development drives me to stay
              updated with the latest industry trends and best practices,
              ensuring that I consistently deliver high-quality results that
              exceed expectations."
            </p>
            <div className="">
              <a
                href=""
                className="font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
              >
                Want to know more?
              </a>
              <div className="flex flex-row justify-start flex-wrap">
                <a
                  href="https://github.com/priyasharma27021992"
                  target="_blank"
                >
                  <img src={GithubSvg} alt="Github" className="m-3 w-10 h-10" />
                </a>
                <a
                  href="https://www.linkedin.com/in/priya-sharma-ab86ba46/"
                  target="_blank"
                >
                  <img
                    src={LinkedInSvg}
                    alt="LinkedIn"
                    className="m-3 w-10 h-10"
                  />
                </a>
              </div>
            </div>
            <SkillSetProgressBar />
          </div>
          <div>
            <img
              className="object-cover rounded-full shadow-2xl aspect-square w-96 h-96"
              src={PortfolioImg}
              alt="Priya Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
