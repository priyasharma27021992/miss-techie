import PortfolioImg from "../assets/portfolio-priya.jpg";
const Home = () => {
  return (
    <div className="h-screen bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center justify-between rounded-lg m-auto h-full max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 md:flex-row bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <div className="flex flex-col p-15">
          <p className="mb-4">Hi! I am Priya Sharma</p>
          <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
            I will help you build a beautiful Frontend
          </h1>
          <p className="font-light mb-4">
            I am a frontend developer with overall experience of 10 years and
            releavant of 6 years on building frontend end. I ahve worked upon
            mainly reactjs, nextjs, vanilla js, tailwind css, material-ui,
            styling etc.
          </p>
          <div>
            <a
              href=""
              className="font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
            >
              Want to know more?
            </a>
          </div>
        </div>
        <div>
          <img
            className="object-cover rounded-full shadow-2xl"
            src={PortfolioImg}
            alt="Priya Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
