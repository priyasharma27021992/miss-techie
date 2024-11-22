import { PROJECTS } from "../utils/constants";

const Projects = () => {
  return (
    <div className="max-w-2xl lg:max-w-7xl px-4 py-16 mx-auto">
      <h1 className="mb-2 lg:mb-10 text-4xl font-extrabold text-center">
        My Projects at glance
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {PROJECTS.map((project) => (
          <div
            key={project.name}
            className="max-w-sm bg-white border-gray-200 dark:border-gray-600 rounded-lg shadow-xl transform transition-transform hover:scale-105"
          >
            <a href={project.projectUrl}>
              <div className="relative w-full h-96">
                <iframe
                  src={project.projectUrl}
                  title={project.name}
                  className="w-full h-full border-none"
                ></iframe>
              </div>
              <div className="p-6">
                <h5 className="mb-2 text-2xl fond-bold tracking-tight text-gray-900 dark:text-white">
                  {project.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {project.description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
