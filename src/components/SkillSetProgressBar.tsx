type ProgressBarProps = {
  progress: number;
  width: `w-[${number}%]`;
  barText: string;
};
const ProgressBar = ({
  progress = 0,
  width = "w-[0%]",
  barText = "Skill",
}: ProgressBarProps) => {
  return (
    <div className="my-3">
      <h6 className="text-white text-[15px]">{barText}</h6>
      <div className="h-[25px] w-full bg-white rounded-2xl">
        <div className={`h-full  ${width} bg-cyan-500 rounded-2xl text-center`}>
          <span className="font-black text-black">{`${progress}%`}</span>
        </div>
      </div>
    </div>
  );
};

const SkillSetProgressBar = () => {
  return (
    <div className="m-2">
      <h4 className="text-crimson">My SkillSet:</h4>
      <ProgressBar
        progress={80}
        width="w-[80%]"
        barText="React.js, Javasript, Next.js"
      />
      <ProgressBar progress={80} width="w-[80%]" barText="HTML5,CSS" />
      <ProgressBar progress={80} width="w-[80%]" barText="Javascript" />
      <ProgressBar
        progress={70}
        width="w-[70%]"
        barText="Jest, Testing Library, Cypress"
      />
      <ProgressBar
        progress={40}
        width="w-[40%]"
        barText="Devops, Node, Python"
      />
    </div>
  );
};

export default SkillSetProgressBar;
