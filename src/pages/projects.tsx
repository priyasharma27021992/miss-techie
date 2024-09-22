import { PROJECTS } from "../utils/constants";

const Projects = () => {
  return (
    <div className="max-w-2xl lg:max-w-7xl px-4 py-16 mx-auto">
      <h1 className="mb-2 lg:mb-10 text-4xl font-extrabold text-center">
        My Projects at glance
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROJECTS.map((project) => (
          <div className="max-w-sm bg-white border-gray-200 rounded-lg shadow-lg dark:bg-gray-700 dark:border-gray-700">
            <a href={project.projectUrl}>
              <iframe
                src={project.projectUrl}
                title={project.name}
                className="w-[400px] h-[400px]"
              ></iframe>
              <div className="p-5">
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
