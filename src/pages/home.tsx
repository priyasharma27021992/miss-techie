import PortfolioImg from "../assets/portfolio-priya.jpg";
import GithubSvg from "../assets/github.svg";
import LinkedInSvg from "../assets/linked-in.svg";

import "../styles/pure-particle.scss";
const Home = () => {
  return (
    <>
      {Array.from(Array(100).keys()).map(() => (
        <div className="circle-container">
          <div className="circle"></div>
        </div>
      ))}
      <div className="h-screen bg-white dark:bg-gray-900">
        <div className="flex flex-col items-center justify-between rounded-lg m-auto h-screen max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 md:flex-row bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
          <div className="flex flex-col p-5 md:p-10 max-w-2xl">
            <p className="mb-4">Hi! I am Priya Sharma</p>
            <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
              I will help you build a beautiful Frontend
            </h1>
            <p className="font-light mb-4">
              "I bring a decade of experience in frontend development, with a
              focused expertise spanning six years. My proficiency revolves
              around crafting seamless user experiences using an array of
              technologies, including ReactJS, NextJS, Vanilla JavaScript,
              Tailwind CSS, and Material-UI. My approach extends beyond mere
              implementation to encompass intuitive design and efficient styling
              practices. I thrive on leveraging these tools to create responsive
              and visually appealing interfaces that enhance user engagement and
              satisfaction."
            </p>
            <div>
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
    </>
  );
};

export default Home;
