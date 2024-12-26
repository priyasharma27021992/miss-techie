import { ExperienceType } from "../types/common";
import { JOB_EXPERIENCES } from "../utils/constants";

const Experiences = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-20">
      <div className="hidden md:block md:absolute left-1/2 w-0.5 bg-gray-300 h-full -translate-x-1/2"></div>

      {/* job experience 1 */}
      {JOB_EXPERIENCES?.map((exp: ExperienceType) => (
        <>
          <div className="relative">
            <div className="hidden md:block md:absolute left-1/2 -translate-x-1/2 top-10">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 animate-fadeInLeftToRight">
            {/* left content */}
            <div className="text-right mr-5 bg-cyan-400 rounded-md p-5">
              <h3>{exp?.title}</h3>
              <p className="text-gray-600">{exp?.description}</p>
              <span className="text-sm text-gray-500">{exp?.time}</span>
            </div>
            {/* right content */}
            <div className="text-right md:text-left pl-6">
              <h3 className="text-gray-800">{exp?.company}</h3>
              <p className="text-gray-600">{exp?.location}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Experiences;
